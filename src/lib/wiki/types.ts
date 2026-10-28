export type Localized = { ru: string; en: string };
export type WikiResource = {
  id: string; name: string; archive: string; edition: string; kind: string;
  bytes: number; original: string; anchor: string; sha256: string; preview?: string; image?: string; media?: string;
  width?: number; height?: number; previewWidth?: number; previewHeight?: number;
  duration?: number; type?: number; groups?: number; frames?: number; hex?: string;
  frameGroups?: Array<{id:number;frames:number}>;
  fontHeight?:number; palette?:WikiPalette; details?:string;
  mask?:WikiResource;
  campaign?:{name:string;description:string;version:string;scenarioCount:number;mapCount:number};
};
export type WikiPalette={type:string;colors:number[][];flags:number[]|null};
export type WikiCampaign={
  name:string; description:string; version:string; scenarioCount:number; mapCount:number;
  aggregate:{area:number;objects:number;towns:number;monsters:number;factions:Record<string,number>};
  scenarios:Array<{
    index:number; mapName:string; name?:string; description?:string; regionText?:string; prologText?:string; epilogText?:string;
    difficulty?:string; preconditions:number; bonuses?:Array<{type?:number;amount?:number}>; original?:string;
    mapSize?:number; hasUnderground?:boolean; playerCount?:number; objects?:number;towns?:number;monsters?:number;
    factions?:Record<string,number>; victory?:{name:string};loss?:{name:string};parseError?:string;
    minimaps?:Array<{width:number;height:number;image:string}>;
  }>;
};
export type WikiSection = { path: Localized[]; resources: WikiResource[] };
export type WikiCatalogPage = {
  slug: string; rootSlug: string; title: Localized; archive: string; edition: string;
  editions?: string[]; showEdition?: boolean;
  number: number; pageCount: number; previous: string | null; next: string | null;
  sections: WikiSection[];
  outline?: Array<{label: Localized; depth: number; slug: string; id: string}>;
};
