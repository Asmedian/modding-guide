type DefFrame = {groupId: number; imageId: number; name: string; image: {width: number; height: number; marginLeft:number; marginTop:number; pixeldata: Uint8Array} | null};
export class DefFile {
  static open(data: Uint8Array): DefFile;
  rawData: DefFrame[];
  type: number;
  getGroups(): number[];
  getFrameCount(group: number): number;
  readImage(how: string, groupId: number, imageId: number): HTMLCanvasElement | null;
}
