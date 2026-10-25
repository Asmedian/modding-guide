<script lang="ts">
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import type { WikiCampaign } from '$lib/wiki/types';
  import WikiH3Text from './WikiH3Text.svelte';
  export let campaign:WikiCampaign;
  export let lang:Locale;
  $: t=translator(lang);
  let selected:number|null=null;
  let level=0;
  $: scenario=selected===null?null:campaign.scenarios[selected];
  const factionRu:Record<string,string>={Castle:'Замок',Rampart:'Оплот',Tower:'Башня',Inferno:'Инферно',Necropolis:'Некрополь',Dungeon:'Темница',Stronghold:'Цитадель',Fortress:'Крепость',Conflux:'Слияние',Random:'Случайный'};
  const faction=(name:string)=>lang==='ru'?(factionRu[name]??name):name;
  function bonusName(bonus:{type?:number;amount?:number}){
    const names=lang==='ru'?['Заклинание','Существа','Здание','Артефакт','Свиток','Первичные навыки','Вторичный навык','Ресурсы']:['Spell','Creatures','Building','Artifact','Spell scroll','Primary skills','Secondary skill','Resources'];
    return (names[bonus.type??-1]??t('wiki.bonuses'))+(bonus.amount?` ×${bonus.amount}`:'');
  }
  function conditions(mask:number){return Array.from({length:16},(_,i)=>i+1).filter(i=>mask&(1<<(i-1))).join(', ')||t('wiki.start');}
</script>
<section class="wiki-campaign-view">
  {#if scenario}
    <button class="wiki-raised-button" on:click={()=>selected=null}>← {t('wiki.campaign')}</button>
    <h3 class="wiki-heading">{scenario.name||scenario.mapName}<small class="wiki-edition">SoD</small></h3>
    <p class="wiki-campaign-description"><WikiH3Text text={scenario.description??''} /></p>
    {#if scenario.minimaps?.length}
      <div class="wiki-map-levels">{#each scenario.minimaps as mini,i}<button class="wiki-raised-button" class:current={level===i} on:click={()=>level=i}>{i===0?t('wiki.surface'):t('wiki.underground')}</button>{/each}</div>
      {@const mini=scenario.minimaps[level]??scenario.minimaps[0]}
      <img class="wiki-campaign-map" src={`${base}${mini.image}`} width={mini.width} height={mini.height} alt={scenario.name||scenario.mapName} />
    {/if}
    <dl class="wiki-campaign-stats"><div><dt>{t('wiki.mapSize')}</dt><dd>{scenario.mapSize}×{scenario.mapSize}</dd></div><div><dt>{t('wiki.players')}</dt><dd>{scenario.playerCount}</dd></div><div><dt>{t('wiki.objects')}</dt><dd>{scenario.objects}</dd></div><div><dt>{t('wiki.towns')}</dt><dd>{scenario.towns}</dd></div><div><dt>{t('wiki.monsters')}</dt><dd>{scenario.monsters}</dd></div></dl>
    {#if scenario.victory}<p>{t('wiki.victory')}: {scenario.victory.name}</p>{/if}
    {#if scenario.loss}<p>{t('wiki.loss')}: {scenario.loss.name}</p>{/if}
  {:else}
    <h3 class="wiki-heading">{campaign.name}<small class="wiki-edition">SoD</small></h3>
    <p class="wiki-campaign-description"><WikiH3Text text={campaign.description} /></p>
    <dl class="wiki-campaign-stats">
      <div><dt>{t('wiki.version')}</dt><dd>{campaign.version}</dd></div><div><dt>{t('wiki.scenarios')}</dt><dd>{campaign.scenarioCount}</dd></div><div><dt>{t('wiki.maps')}</dt><dd>{campaign.mapCount}</dd></div><div><dt>{t('wiki.totalArea')}</dt><dd>{campaign.aggregate.area.toLocaleString(lang)}</dd></div><div><dt>{t('wiki.objects')}</dt><dd>{campaign.aggregate.objects.toLocaleString(lang)}</dd></div><div><dt>{t('wiki.towns')}</dt><dd>{campaign.aggregate.towns}</dd></div><div><dt>{t('wiki.monsters')}</dt><dd>{campaign.aggregate.monsters}</dd></div>
    </dl>
    <div class="wiki-factions">{#each Object.entries(campaign.aggregate.factions).sort((a,b)=>b[1]-a[1]) as [name,count]}<div><span>{faction(name)}</span><meter min="0" max={campaign.aggregate.towns||1} value={count}>{count}</meter><span>{count}</span></div>{/each}</div>
    <h3 class="wiki-heading">{t('wiki.scenarios')}<small class="wiki-edition">SoD</small></h3>
    <div class="wiki-scenario-grid">
      {#each campaign.scenarios as item,i}
        <section class="wiki-scenario-card"><h4 class="wiki-heading"><span>{i+1}</span> {item.name||item.mapName}<small class="wiki-edition">SoD</small></h4>
          <div class="wiki-scenario-info">{#if item.minimaps?.[0]}<img src={`${base}${item.minimaps[0].image}`} width={item.minimaps[0].width} height={item.minimaps[0].height} alt={item.name||item.mapName} loading="lazy" decoding="async" />{/if}<div>
            <p>{item.mapSize}×{item.mapSize}{item.hasUnderground?` + ${t('wiki.underground')}`:''} · {t('wiki.players')}: {item.playerCount}</p>
            {#if item.difficulty}<p>{t('wiki.difficulty')}: {item.difficulty}</p>{/if}
            {#if item.victory}<p>{t('wiki.victory')}: {item.victory.name}</p>{/if}{#if item.loss}<p>{t('wiki.loss')}: {item.loss.name}</p>{/if}
            <p>{t('wiki.prerequisites')}: {conditions(item.preconditions)}</p>
            {#if item.bonuses?.length}<p>{t('wiki.bonuses')}: {item.bonuses.map(bonusName).join(', ')}</p>{/if}
          </div></div>
          {#if item.regionText}<p class="wiki-campaign-description"><WikiH3Text text={item.regionText} /></p>{/if}
          {#if item.description}<details><summary>{t('wiki.description')}</summary><p class="wiki-campaign-description"><WikiH3Text text={item.description} /></p></details>{/if}
          {#if item.prologText}<details><summary>{t('wiki.prologue')}</summary><p class="wiki-campaign-description"><WikiH3Text text={item.prologText} /></p></details>{/if}
          {#if item.epilogText}<details><summary>{t('wiki.epilogue')}</summary><p class="wiki-campaign-description"><WikiH3Text text={item.epilogText} /></p></details>{/if}
          <div class="wiki-scenario-actions"><button class="wiki-raised-button" on:click={()=>{selected=i;level=0;}}>{t('wiki.openMap')}</button></div>
        </section>
      {/each}
    </div>
  {/if}
</section>
