import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import H3Map from './explorer-map-parser.mjs';

const root=process.argv[2];
if (!root) throw new Error('Pass the site output directory');
const pagesPath=join(root,'content/wiki/_registry/pages.json');
const pages=JSON.parse(readFileSync(pagesPath,'utf8'));
const resources=new Map(pages.flatMap(p=>p.sections.flatMap(s=>s.resources.map(r=>[r.id,r]))));
// Minimal canvas adapter: use Explorer's own terrain and ownership rendering.
globalThis.document={createElement(){return {getContext(){return {createImageData(w,h){return {width:w,height:h,data:new Uint8Array(w*h*4)};},putImageData(image){this.image=image;}};}};}};
const reports=[];
function minimap(map,level,path){
  let image;
  globalThis.document.createElement=()=>({getContext(){return {createImageData(w,h){return {width:w,height:h,data:new Uint8Array(w*h*4)};},putImageData(value){image=value;}};}});
  H3Map.renderMinimap(map,level);
  if(!image)return null;
  writeFileSync(path, image.data);return {width:image.width,height:image.height,rgba:path};
}
for(const resource of resources.values())if(resource.kind==='h3c'){
  const original=new Uint8Array(readFileSync(join(root,'static',resource.original)));
  const campaign=await H3Map.parseH3C(original,{encoding:'windows-1251'});
  const prefix='/assets/wiki/sod/h3bitmap-lod/display/'+resource.name;
  const folder=join(root,'static',prefix);mkdirSync(folder,{recursive:true});
  const aggregate={area:0,objects:0,towns:0,monsters:0,factions:{}};
  const scenarios=campaign.scenarios.map((sc,i)=>{
    const map=campaign.maps[i];
    const item={index:i,mapName:sc.mapName,regionText:sc.regionText,prologText:sc.prologText,epilogText:sc.epilogText,preconditions:sc.preconditions,difficulty:sc.difficultyName,bonuses:sc.bonuses};
    if(campaign.rawMaps[i]){
      const filename=`scenario-${i+1}.h3m`;
      writeFileSync(join(folder,filename),campaign.rawMaps[i]);item.original=prefix+'/'+filename;
    }
    if(map&&!map.parseError){
      Object.assign(item,{name:map.name,description:map.description,mapSize:map.mapSize,hasUnderground:map.hasUnderground,players:map.players,playerCount:map.playerCount,victory:map.victoryCondition,loss:map.lossCondition,factions:map.stats?.townsByFaction??{},objects:map.stats?.objectCount??map.objects?.length??0,towns:map.stats?.towns?.length??0,monsters:map.stats?.monsters?.length??0,minimaps:[]});
      aggregate.area+=map.mapSize**2*(map.hasUnderground?2:1);aggregate.objects+=item.objects;aggregate.towns+=item.towns;aggregate.monsters+=item.monsters;
      for(const [name,count]of Object.entries(item.factions))aggregate.factions[name]=(aggregate.factions[name]??0)+count;
      for(let level=0;level<(map.hasUnderground?2:1);level++){
        const filename=`scenario-${i+1}-${level}.rgba`;const data=minimap(map,level,join(folder,filename));
        if(data)item.minimaps.push({width:data.width,height:data.height,image:prefix+'/'+filename.replace('.rgba','.png')});
      }
    }else if(map?.parseError)item.parseError=map.parseError;
    return item;
  });
  const detail={name:campaign.name,description:campaign.description,version:campaign.versionName,scenarioCount:campaign.scenarioCount,mapCount:campaign.mapCount,allowDifficultySelection:campaign.allowDifficultySelection,aggregate,scenarios};
  const details=prefix+'/campaign.json';writeFileSync(join(folder,'campaign.json'),JSON.stringify(detail,null,2)+'\n');
  const summary={name:detail.name,description:detail.description,version:detail.version,scenarioCount:detail.scenarioCount,mapCount:detail.mapCount};
  for(const page of pages)for(const section of page.sections)for(const entry of section.resources)if(entry.id===resource.id){entry.campaign=summary;entry.details=details;delete entry.hex;}
  reports.push({name:resource.name,...summary,errors:scenarios.filter(s=>s.parseError).map(s=>[s.index,s.parseError])});
}
writeFileSync(pagesPath,JSON.stringify(pages,null,2)+'\n');
writeFileSync(join(root,'content/wiki/_registry/campaign-audit.json'),JSON.stringify(reports,null,2)+'\n');
console.log(JSON.stringify(reports.map(r=>({name:r.name,maps:r.mapCount,scenarios:r.scenarioCount,errors:r.errors})),null,2));
