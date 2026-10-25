// @ts-nocheck -- Vendored Explorer decoder; typed facade in def-decoder.d.mts.
// Adapted from supplied HoMM3 Explorer. SPDX-License-Identifier: MIT
// Copyright (c) 2026 HoMM3 Explorer Contributors
class DataView2 {
    constructor(buffer, offset = 0) {
        if (buffer instanceof ArrayBuffer) {
            this.buffer = buffer;
            this._baseOffset = 0;
        } else {
            // Uint8Array or typed array — respect byteOffset
            this.buffer = buffer.buffer;
            this._baseOffset = buffer.byteOffset;
        }
        this.view = new DataView(this.buffer);
        this.offset = this._baseOffset + offset;
    }
    readUint8() { const v = this.view.getUint8(this.offset); this.offset += 1; return v; }
    readInt8() { const v = this.view.getInt8(this.offset); this.offset += 1; return v; }
    readUint16LE() { const v = this.view.getUint16(this.offset, true); this.offset += 2; return v; }
    readInt16LE() { const v = this.view.getInt16(this.offset, true); this.offset += 2; return v; }
    readUint32LE() { const v = this.view.getUint32(this.offset, true); this.offset += 4; return v; }
    readInt32LE() { const v = this.view.getInt32(this.offset, true); this.offset += 4; return v; }
    readBytes(n) {
        const arr = new Uint8Array(this.buffer, this.offset, n);
        this.offset += n;
        return new Uint8Array(arr);
    }
    readString(n) {
        const bytes = this.readBytes(n);
        const nullIdx = bytes.indexOf(0);
        const slice = nullIdx >= 0 ? bytes.slice(0, nullIdx) : bytes;
        let str = '';
        for (const b of slice) str += String.fromCharCode(b);
        return str;
    }
    seek(pos) { this.offset = this._baseOffset + pos; }
    tell() { return this.offset - this._baseOffset; }
}

const DEF_FILE_TYPES = {
    0x40: 'SPELL',
    0x41: 'SPRITE',
    0x42: 'CREATURE',
    0x43: 'MAP',
    0x44: 'MAP_HERO',
    0x45: 'TERRAIN',
    0x46: 'CURSOR',
    0x47: 'INTERFACE',
    0x48: 'SPRITE_FRAME',
    0x49: 'BATTLE_HERO'
};

const SPECIAL_SOURCE_PALETTE = [
    [0, 255, 255],    // 0: Transparency (cyan)
    [255, 150, 255],  // 1: Shadow border (pink)
    [255, 100, 255],  // 2: Shadow border - fog of war (pink)
    [255, 50, 255],   // 3: Shadow body - fog of war (magenta)
    [255, 0, 255],    // 4: Shadow body (magenta)
    [255, 255, 0],    // 5: Selection / owner flag (yellow)
    [180, 0, 255],    // 6: Shadow body below selection (violet)
    [0, 255, 0],      // 7: Shadow border below selection (green)
];

const SPECIAL_TARGET_PALETTE = [
    [0, 0, 0, 0],       // 0: Full transparency
    [0, 0, 0, 0x40],    // 1: Shadow border
    [0, 0, 0, 0x40],    // 2: Shadow border (fog of war)
    [0, 0, 0, 0x80],    // 3: Shadow body (fog of war)
    [0, 0, 0, 0x80],    // 4: Shadow body
    [0, 0, 0, 0],       // 5: Selection highlight (transparent)
    [0, 0, 0, 0x80],    // 6: Shadow body below selection
    [0, 0, 0, 0x40],    // 7: Shadow border below selection
];

const ALWAYS_REPLACE = new Set([0, 1, 4]);

function paletteMatches(actual, expected, threshold = 8) {
    return Math.abs(actual[0] - expected[0]) < threshold &&
           Math.abs(actual[1] - expected[1]) < threshold &&
           Math.abs(actual[2] - expected[2]) < threshold;
}

function detectSpecialIndices(palette) {
    const special = new Set();
    for (let i = 0; i < Math.min(8, palette.length); i++) {
        if (ALWAYS_REPLACE.has(i)) {
            special.add(i);
        } else if (paletteMatches(palette[i], SPECIAL_SOURCE_PALETTE[i])) {
            special.add(i);
        }
    }
    return special;
}

class DefFile {
    constructor() {
        this.type = null;
        this.typeName = '';
        this.width = 0;
        this.height = 0;
        this.blockCount = 0;
        this.palette = [];
        this.rawData = [];
        this._isD32 = false;
    }

    static open(data) {
        const def = new DefFile();
        def._parse(data);
        return def;
    }

    _parseD32(data) {
        this._isD32 = true;
        const r = new DataView2(data);

        const magic = r.readUint32LE();
        const unknown1 = r.readUint32LE();
        const unknown2 = r.readUint32LE();
        this.width = r.readUint32LE();
        this.height = r.readUint32LE();
        const groupCount = r.readUint32LE();
        const unknown6 = r.readUint32LE();
        const unknown7 = r.readUint32LE();

        this.rawData = [];

        for (let group = 0; group < groupCount; group++) {
            const headerSize = r.readUint32LE();
            const groupNo = r.readUint32LE();
            const entriesCount = r.readUint32LE();
            const unknownB = r.readUint32LE();

            const fileNames = [];
            const offsets = [];

            for (let i = 0; i < entriesCount; i++) {
                fileNames.push(r.readString(13));
            }
            for (let i = 0; i < entriesCount; i++) {
                offsets.push(r.readUint32LE());
            }

            const filepos = r.tell();

            for (let i = 0; i < entriesCount; i++) {
                r.seek(offsets[i]);
                const bitsPerPixel = r.readUint32LE();
                const imageSize = r.readUint32LE();
                const fullWidth = r.readUint32LE();
                const fullHeight = r.readUint32LE();
                const storedWidth = r.readUint32LE();
                const storedHeight = r.readUint32LE();
                const marginLeft = r.readUint32LE();
                const marginTop = r.readUint32LE();
                const entryUnknown1 = r.readUint32LE();
                const entryUnknown2 = r.readUint32LE();

                const pixeldata = r.readBytes(imageSize);

                // BGRA -> RGBA, flip vertically
                const canvas = document.createElement('canvas');
                canvas.width = storedWidth;
                canvas.height = storedHeight;
                const ctx = canvas.getContext('2d');
                const imgData = ctx.createImageData(storedWidth, storedHeight);

                for (let y = 0; y < storedHeight; y++) {
                    for (let x = 0; x < storedWidth; x++) {
                        const srcIdx = (y * storedWidth + x) * 4;
                        const dstY = storedHeight - 1 - y;
                        const dstIdx = (dstY * storedWidth + x) * 4;
                        imgData.data[dstIdx + 0] = pixeldata[srcIdx + 2]; // R
                        imgData.data[dstIdx + 1] = pixeldata[srcIdx + 1]; // G
                        imgData.data[dstIdx + 2] = pixeldata[srcIdx + 0]; // B
                        imgData.data[dstIdx + 3] = pixeldata[srcIdx + 3]; // A
                    }
                }
                ctx.putImageData(imgData, 0, 0);

                // Compose into full-size frame
                const fullCanvas = document.createElement('canvas');
                fullCanvas.width = fullWidth;
                fullCanvas.height = fullHeight;
                const fullCtx = fullCanvas.getContext('2d');
                fullCtx.drawImage(canvas, marginLeft, marginTop);

                this.rawData.push({
                    groupId: groupNo,
                    imageId: i,
                    offset: offsets[i],
                    name: fileNames[i],
                    image: {
                        size: imageSize,
                        format: null,
                        fullWidth,
                        fullHeight,
                        width: storedWidth,
                        height: storedHeight,
                        marginLeft,
                        marginTop,
                        hasShadow: false,
                        pixeldata,
                        canvas: fullCanvas,
                        _prerendered: true
                    }
                });
            }
            r.seek(filepos);
        }
    }

    _parse(data) {
        const r = new DataView2(data);
        const magic = r.readUint32LE();
        r.seek(0);

        if (magic === 0x46323344) { // D32 format from HotA
            this._parseD32(data);
            return;
        }

        this.type = r.readUint32LE();
        this.typeName = DEF_FILE_TYPES[this.type] || 'UNKNOWN';
        this.width = r.readUint32LE();
        this.height = r.readUint32LE();
        this.blockCount = r.readUint32LE();

        this.palette = [];
        for (let i = 0; i < 256; i++) {
            const pr = r.readUint8();
            const pg = r.readUint8();
            const pb = r.readUint8();
            this.palette.push([pr, pg, pb]);
        }

        const offsets = {};
        const fileNames = {};

        for (let i = 0; i < this.blockCount; i++) {
            const groupId = r.readUint32LE();
            const imageCount = r.readUint32LE();
            r.readUint32LE(); // unknown
            r.readUint32LE(); // unknown

            if (!offsets[groupId]) offsets[groupId] = [];
            if (!fileNames[groupId]) fileNames[groupId] = [];

            for (let j = 0; j < imageCount; j++) {
                fileNames[groupId].push(r.readString(13));
            }
            for (let j = 0; j < imageCount; j++) {
                offsets[groupId].push(r.readUint32LE());
            }
        }

        this.rawData = [];
        const noShadowTypes = new Set([0x40, 0x45, 0x46, 0x47]); // SPELL, TERRAIN, CURSOR, INTERFACE
        const decodedOffsets = new Map();

        for (const groupIdStr of Object.keys(offsets)) {
            const groupId = parseInt(groupIdStr);
            for (let imageId = 0; imageId < offsets[groupId].length; imageId++) {
                const offset = offsets[groupId][imageId];
                const name = fileNames[groupId][imageId];

                if (!decodedOffsets.has(offset)) decodedOffsets.set(offset, this._getImageData(data, offset, name));
                const imageData = decodedOffsets.get(offset);
                if (imageData) {
                    imageData.hasShadow = !noShadowTypes.has(this.type);
                }

                this.rawData.push({
                    groupId,
                    imageId,
                    offset,
                    name,
                    image: imageData
                });
            }
        }
    }

    _getImageData(data, offset, name) {
        const r = new DataView2(data);
        r.seek(offset);

        const size = r.readUint32LE();
        const format = r.readUint32LE();
        const fullWidth = r.readUint32LE();
        const fullHeight = r.readUint32LE();
        let width = r.readUint32LE();
        let height = r.readUint32LE();
        let marginLeft = r.readInt32LE();
        let marginTop = r.readInt32LE();
        // Original siege-moat spell DEFs have a 16-byte image header.
        const legacyHeader = format === 1 && width === fullHeight * 4 && height >= width && marginLeft > fullWidth && marginTop > fullHeight;
        const imageStart = offset + (legacyHeader ? 16 : 32);
        if (legacyHeader) { width = fullWidth; height = fullHeight; marginLeft = 0; marginTop = 0; r.seek(imageStart); }

        if (marginLeft > fullWidth || marginTop > fullHeight) {
            console.warn(`Image ${name} - margins exceed dimensions`);
            return null;
        }

        if (width === 0 || height === 0) {
            console.warn(`Image ${name} - no image size`);
            return null;
        }

        let pixeldata;

        switch (format) {
            case 0: {
                pixeldata = r.readBytes(width * height);
                break;
            }
            case 1: {
                const lineOffsets = [];
                for (let i = 0; i < height; i++) lineOffsets.push(r.readUint32LE());
                const chunks = [];
                let totalBytes = 0;
                for (const lineOffset of lineOffsets) {
                    r.seek(imageStart + lineOffset);
                    let totalLength = 0;
                    while (totalLength < width) {
                        const code = r.readUint8();
                        let length = r.readUint8() + 1;
                        if (code === 0xff) {
                            chunks.push(r.readBytes(length));
                        } else {
                            const fill = new Uint8Array(length);
                            fill.fill(code);
                            chunks.push(fill);
                        }
                        totalLength += length;
                        totalBytes += length;
                    }
                }
                pixeldata = new Uint8Array(totalBytes);
                let off = 0;
                for (const c of chunks) { pixeldata.set(c, off); off += c.length; }
                break;
            }
            case 2: {
                const lineOffsets = [];
                for (let i = 0; i < height; i++) lineOffsets.push(r.readUint16LE());
                r.readUint8(); r.readUint8(); // unknown

                const chunks = [];
                let totalBytes = 0;
                for (const lineOffset of lineOffsets) {
                    if (r.tell() !== offset + 32 + lineOffset) {
                        r.seek(offset + 32 + lineOffset);
                    }
                    let totalLength = 0;
                    while (totalLength < width) {
                        const segment = r.readUint8();
                        const code = segment >> 5;
                        const length = (segment & 0x1f) + 1;
                        if (code === 7) {
                            chunks.push(r.readBytes(length));
                        } else {
                            const fill = new Uint8Array(length);
                            fill.fill(code);
                            chunks.push(fill);
                        }
                        totalLength += length;
                        totalBytes += length;
                    }
                }
                pixeldata = new Uint8Array(totalBytes);
                let off = 0;
                for (const c of chunks) { pixeldata.set(c, off); off += c.length; }
                break;
            }
            case 3: {
                // Each row split into 32-byte blocks
                const blocksPerRow = Math.floor(width / 32);
                const lineOffsets = [];
                for (let i = 0; i < height; i++) {
                    const row = [];
                    for (let j = 0; j < blocksPerRow; j++) {
                        row.push(r.readUint16LE());
                    }
                    lineOffsets.push(row);
                }

                const chunks = [];
                let totalBytes = 0;
                for (const lineOffset of lineOffsets) {
                    for (const blockOffset of lineOffset) {
                        if (r.tell() !== offset + 32 + blockOffset) {
                            r.seek(offset + 32 + blockOffset);
                        }
                        let totalLength = 0;
                        while (totalLength < 32) {
                            const segment = r.readUint8();
                            const code = segment >> 5;
                            const length = (segment & 0x1f) + 1;
                            if (code === 7) {
                                chunks.push(r.readBytes(length));
                            } else {
                                const fill = new Uint8Array(length);
                                fill.fill(code);
                                chunks.push(fill);
                            }
                            totalLength += length;
                            totalBytes += length;
                        }
                    }
                }
                pixeldata = new Uint8Array(totalBytes);
                let off = 0;
                for (const c of chunks) { pixeldata.set(c, off); off += c.length; }
                break;
            }
            default:
                console.warn(`Image ${name} - unknown format ${format}`);
                return null;
        }

        return {
            size,
            format,
            fullWidth,
            fullHeight,
            width,
            height,
            marginLeft,
            marginTop,
            hasShadow: false,
            pixeldata
        };
    }

    getGroups() {
        const seen = new Set();
        const groups = [];
        for (const d of this.rawData) {
            if (!seen.has(d.groupId)) {
                seen.add(d.groupId);
                groups.push(d.groupId);
            }
        }
        return groups;
    }

    getFrameCount(groupId) {
        return this.rawData.filter(d => d.groupId === groupId).length;
    }

    getSize() {
        return [this.width, this.height];
    }

    getBlockCount() {
        return this.blockCount;
    }

    getType() {
        return this.type;
    }

    getTypeName() {
        return this.typeName;
    }

    getPalette() {
        return this.palette;
    }

    getRawData() {
        return this.rawData;
    }

    readImage(how = 'combined', groupId = null, imageId = null, name = null) {
        const foundData = this.rawData.filter(v =>
            (groupId === null || v.groupId === groupId) &&
            (imageId === null || v.imageId === imageId) &&
            (name === null || v.name === name)
        );

        if (foundData.length !== 1) {
            console.warn(`Image read unsuccessful. Found ${foundData.length} images with filter criteria.`);
            return null;
        }

        const fd = foundData[0];
        if (!fd.image) return null;

        // D32 pre-rendered images
        if (fd.image._prerendered) {
            return fd.image.canvas;
        }

        return this._getImage(
            fd.image.pixeldata,
            fd.image.width,
            fd.image.height,
            fd.image.fullWidth,
            fd.image.fullHeight,
            fd.image.marginLeft,
            fd.image.marginTop,
            fd.image.hasShadow,
            how
        );
    }

    _getImage(pixeldata, width, height, fullWidth, fullHeight, marginLeft, marginTop, hasShadow, how) {
        if (this._isD32) return null; // Should use _prerendered path

        const palette = this.palette;
        const special = detectSpecialIndices(palette);
        const shadowIndices = new Set([1, 2, 3, 4, 6, 7]);
        const overlayIndices = new Set([5, 6, 7]);

        // Check if has overlay
        let hasOverlay = false;
        if (hasShadow && special.has(5)) {
            for (let i = 0; i < pixeldata.length; i++) {
                if (pixeldata[i] === 5) { hasOverlay = true; break; }
            }
        }

        // Create RGBA pixel array from paletted data
        const rgbaData = new Uint8Array(width * height * 4);
        for (let i = 0; i < width * height; i++) {
            const idx = pixeldata[i];
            if (idx < palette.length) {
                rgbaData[i * 4 + 0] = palette[idx][0];
                rgbaData[i * 4 + 1] = palette[idx][1];
                rgbaData[i * 4 + 2] = palette[idx][2];
                rgbaData[i * 4 + 3] = 255;
            }
        }

        // Apply special color handling based on 'how' parameter
        switch (how) {
            case 'combined': {
                for (let i = 0; i < width * height; i++) {
                    const idx = pixeldata[i];
                    if (idx === 0 && special.has(0)) {
                        rgbaData[i*4] = 0; rgbaData[i*4+1] = 0; rgbaData[i*4+2] = 0; rgbaData[i*4+3] = 0;
                    }
                    if (hasShadow) {
                        if (shadowIndices.has(idx) && special.has(idx)) {
                            const t = SPECIAL_TARGET_PALETTE[idx];
                            rgbaData[i*4] = t[0]; rgbaData[i*4+1] = t[1]; rgbaData[i*4+2] = t[2]; rgbaData[i*4+3] = t[3];
                        }
                        if (hasOverlay && idx === 5 && special.has(5)) {
                            rgbaData[i*4] = 0; rgbaData[i*4+1] = 0; rgbaData[i*4+2] = 0; rgbaData[i*4+3] = 0;
                        }
                    }
                }
                break;
            }
            case 'normal': {
                for (let i = 0; i < width * height; i++) {
                    const idx = pixeldata[i];
                    if (idx === 0 && special.has(0)) {
                        rgbaData[i*4] = 0; rgbaData[i*4+1] = 0; rgbaData[i*4+2] = 0; rgbaData[i*4+3] = 0;
                    }
                    if (hasShadow) {
                        if ((shadowIndices.has(idx) || overlayIndices.has(idx)) && special.has(idx)) {
                            rgbaData[i*4] = 0; rgbaData[i*4+1] = 0; rgbaData[i*4+2] = 0; rgbaData[i*4+3] = 0;
                        }
                    }
                }
                break;
            }
            case 'shadow': {
                if (!hasShadow) return null;
                for (let i = 0; i < width * height; i++) {
                    const idx = pixeldata[i];
                    if (idx === 0 && special.has(0)) {
                        rgbaData[i*4] = 0; rgbaData[i*4+1] = 0; rgbaData[i*4+2] = 0; rgbaData[i*4+3] = 0;
                    }
                    for (let j = 2; j < 8; j++) {
                        if (idx === j) {
                            if (special.has(j) && !shadowIndices.has(j)) {
                                rgbaData[i*4] = 0; rgbaData[i*4+1] = 0; rgbaData[i*4+2] = 0; rgbaData[i*4+3] = 0;
                            } else if (special.has(j) && shadowIndices.has(j)) {
                                const t = SPECIAL_TARGET_PALETTE[j];
                                rgbaData[i*4] = t[0]; rgbaData[i*4+1] = t[1]; rgbaData[i*4+2] = t[2]; rgbaData[i*4+3] = t[3];
                            }
                        }
                    }
                    // Non-special pixels become transparent in shadow view
                    if (idx > 7 && !special.has(idx)) {
                        rgbaData[i*4] = 0; rgbaData[i*4+1] = 0; rgbaData[i*4+2] = 0; rgbaData[i*4+3] = 0;
                    }
                    if (idx === 1 && special.has(1)) {
                        const t = SPECIAL_TARGET_PALETTE[1];
                        rgbaData[i*4] = t[0]; rgbaData[i*4+1] = t[1]; rgbaData[i*4+2] = t[2]; rgbaData[i*4+3] = t[3];
                    }
                    if (idx > 7) {
                        rgbaData[i*4] = 0; rgbaData[i*4+1] = 0; rgbaData[i*4+2] = 0; rgbaData[i*4+3] = 0;
                    }
                }
                break;
            }
            case 'overlay': {
                if (!hasOverlay) return null;
                for (let i = 0; i < width * height; i++) {
                    const idx = pixeldata[i];
                    if (overlayIndices.has(idx) && special.has(idx)) {
                        rgbaData[i*4] = 255; rgbaData[i*4+1] = 255; rgbaData[i*4+2] = 255; rgbaData[i*4+3] = 255;
                    } else {
                        rgbaData[i*4] = 0; rgbaData[i*4+1] = 0; rgbaData[i*4+2] = 0; rgbaData[i*4+3] = 0;
                    }
                }
                break;
            }
            default:
                console.warn('Unknown how:', how);
                return null;
        }

        // Create canvas with full dimensions
        const canvas = document.createElement('canvas');
        canvas.width = fullWidth;
        canvas.height = fullHeight;
        const ctx = canvas.getContext('2d');

        // Draw the decoded region
        const subCanvas = document.createElement('canvas');
        subCanvas.width = width;
        subCanvas.height = height;
        const subCtx = subCanvas.getContext('2d');
        const imgData = subCtx.createImageData(width, height);
        imgData.data.set(rgbaData);
        subCtx.putImageData(imgData, 0, 0);

        ctx.drawImage(subCanvas, marginLeft, marginTop);
        return canvas;
    }
}

// ============================================================

export { DefFile };
