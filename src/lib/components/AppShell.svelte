<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { hexToDecimal } from '$lib/reference/rich.mjs';
  import { translator, type Locale } from '$lib/i18n';
  import LanguageMenu from '$lib/components/LanguageMenu.svelte';
  import ErmAlphabet from '$lib/components/ErmAlphabet.svelte';
  import ErmQuickLinks from '$lib/components/ErmQuickLinks.svelte';
  import ContextReference from '$lib/components/ContextReference.svelte';
  import ermNavigation from '../../../content/_navigation/erm.json';
  import docsNavigation from '../../../content/_navigation/docs.json';
  import topNavigation from '../../../content/_navigation/top.json';

  export let lang: Locale;
  export let toc: Array<{ id: string; label: string }> = [];
  export let activeSlug = '';

  $: activeSection = activeSlug.startsWith('erm') ? 'erm' : 'docs';
  $: navGroups = (activeSection === 'erm' ? ermNavigation : docsNavigation).groups.map((group) => ({
    label: group.labelKey,
    links: group.items.map((item) => [item.labelKey, item.slug] as const)
  }));
  const topItems = topNavigation.items;
  const githubUrl = topNavigation.github.href;

  $: t = translator(lang);
  $: if (browser) document.documentElement.lang = lang;
  let menuOpen = false;
  let theme: 'dark' | 'light' = 'dark';
  let searchOpen = false;
  type SearchDialogConstructor = typeof import('$lib/components/SearchDialog.svelte').default;
  let SearchDialogComponent: SearchDialogConstructor | null = null;
  let searchComponentRequest: Promise<void> | null = null;
  let searchQuery = '';
  let searchScope: 'everywhere' | 'section' | 'page' = 'everywhere';
  $: if (searchScope === 'page' && !activeSlug) searchScope = 'everywhere';
  afterNavigate(() => { searchOpen = false; menuOpen = false; });
  let resetPending = false;
  let referencePane: ContextReference;
  let referenceExpanded = false;
  let openGroups = [...docsNavigation.groups, ...ermNavigation.groups].map((group) => group.labelKey as string);

  function savePreferences() {
    try {
      const current = JSON.parse(localStorage.getItem('modding-guide:preferences:v1') ?? '{}');
      localStorage.setItem('modding-guide:preferences:v1', JSON.stringify({ ...current, theme, language: lang }));
    } catch {
      // Preferences are optional; the interface remains fully usable without storage.
    }
  }

  function applyTheme(next: 'dark' | 'light', persist = true) {
    theme = next;
    document.documentElement.dataset.theme = next;
    if (persist) savePreferences();
  }

  function toggleTheme() {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  }

  function updateGroup(label: string, isOpen: boolean) {
    openGroups = isOpen ? Array.from(new Set([...openGroups, label])) : openGroups.filter((item) => item !== label);
    try {
      localStorage.setItem('modding-guide:navigation:v1', JSON.stringify({ openGroups }));
    } catch {
      // Navigation state is optional.
    }
  }

  function handleKeyboard(event: KeyboardEvent) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      searchOpen = true;
      void loadSearchComponent();
    }
    if (event.key === 'Escape') {
      searchOpen = false;
      menuOpen = false;
      referenceExpanded = false;
    }
  }

  function handleOutsideSearch(event: PointerEvent) {
    if (!searchOpen || !(event.target instanceof Element)) return;
    if (!event.target.closest('.search-dropdown-host, .search-trigger')) searchOpen = false;
  }

  function loadSearchComponent() {
    if (SearchDialogComponent || searchComponentRequest) return searchComponentRequest;
    searchComponentRequest = import('$lib/components/SearchDialog.svelte').then((module) => {
      SearchDialogComponent = module.default;
    }).finally(() => {
      searchComponentRequest = null;
    });
    return searchComponentRequest;
  }

  function toggleSearch() {
    searchOpen = !searchOpen;
    if (searchOpen) void loadSearchComponent();
  }

  function handleReferenceClick(event: MouseEvent) {
    if (activeSection !== 'erm' || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('.content-column .article-body a') : null;
    if (!target || target.target === '_blank') return;
    const url = new URL(target.href, window.location.href);
    const prefix = `${base}/${lang}/erm/`;
    if (url.origin !== window.location.origin || !url.pathname.startsWith(prefix)) return;
    const slug = url.pathname.slice(prefix.length);
    if (!/^(tables\/|framework\/(constants|globals)\/)/.test(slug) && !target.hasAttribute('data-context')) return;
    event.preventDefault(); event.stopPropagation();
    void referencePane?.openReference(url.href);
  }

  function convertRadix(event: Event) {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;
    const scope = input.closest('.erm-reference');
    if (input.hasAttribute('data-erm-radix')) {
      const output = scope?.querySelector('output');
      if (output) output.textContent = hexToDecimal(input.value);
    }
    if (input.hasAttribute('data-erm-table-search')) {
      const query = input.value.trim().toLocaleLowerCase(lang);
      scope?.querySelectorAll('table').forEach((table) => {
        Array.from(table.rows).slice(1).forEach((row) => { row.hidden = !!query && !(row.textContent ?? '').toLocaleLowerCase(lang).includes(query); });
      });
    }
  }

  function resetSettings() {
    if (!resetPending) {
      resetPending = true;
      return;
    }
    try {
      localStorage.removeItem('modding-guide:preferences:v1');
      localStorage.removeItem('modding-guide:navigation:v1');
    } catch {
      // Reset still updates the current view if storage is unavailable.
    }
    openGroups = navGroups.map((group) => group.label as string);
    resetPending = false;
    applyTheme('dark');
  }

  onMount(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('modding-guide:preferences:v1') ?? '{}');
      applyTheme(saved.theme === 'light' ? 'light' : 'dark', false);
      if (saved.lastSearchScope === 'section' || saved.lastSearchScope === 'page') searchScope = saved.lastSearchScope;
      const savedNavigation = JSON.parse(localStorage.getItem('modding-guide:navigation:v1') ?? '{}');
      if (Array.isArray(savedNavigation.openGroups)) {
        openGroups = savedNavigation.openGroups.filter((label: unknown) => typeof label === 'string');
      }
      const currentGroup = navGroups.find((group) => group.links.some((link) => activeSlug === link[1]));
      if (currentGroup && !openGroups.includes(currentGroup.label)) openGroups = [...openGroups, currentGroup.label];
    } catch {
      applyTheme('dark', false);
    }
    window.addEventListener('keydown', handleKeyboard);
    document.addEventListener('pointerdown', handleOutsideSearch, true);
    document.addEventListener('click', handleReferenceClick, true);
    document.addEventListener('input', convertRadix);
    return () => {
      window.removeEventListener('keydown', handleKeyboard);
      document.removeEventListener('pointerdown', handleOutsideSearch, true);
      document.removeEventListener('click', handleReferenceClick, true);
      document.removeEventListener('input', convertRadix);
    };
  });
</script>

<svelte:head>
  <meta name="color-scheme" content="dark light" />
</svelte:head>

<div class="site-frame">
<header class="topbar">
  <a class="brand" href={`${base}/${lang}/`} aria-label="ERA Modding Guide">
    <img class="brand-emblem" src={`${base}/icon.png`} alt="" width="64" height="64" />
    <span class="brand-era">ERA</span>
    <span class="brand-divider" aria-hidden="true"></span>
    <span class="brand-guide">Modding Guide</span>
  </a>
  <nav class="topnav" aria-label={t('nav.primary')}>
    {#each topItems as item}
      {#if item.enabled}
        <a class:active={item.id === activeSection} href={`${base}/${lang}/${item.href}/`}>{t(item.labelKey)}</a>
      {:else}
        <button type="button" disabled title={t('nav.soon')}>{t(item.labelKey)}</button>
      {/if}
    {/each}
  </nav>
  <button class="search-trigger" type="button" aria-label={t('search.label')} aria-expanded={searchOpen} on:click|stopPropagation={toggleSearch}>
    <span aria-hidden="true">⌕</span>
    <span>{t('search.placeholder')}</span>
    <kbd>{t('search.shortcut')}</kbd>
  </button>
  <LanguageMenu {lang} />
  <button class="icon-button theme-button" type="button" aria-label={t('theme.toggle')} title={theme === 'dark' ? t('theme.light') : t('theme.dark')} on:click={toggleTheme}>
    <span aria-hidden="true">{theme === 'dark' ? '◐' : '☀'}</span>
  </button>
  <button class="icon-button menu-button" type="button" aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')} aria-expanded={menuOpen} on:click={() => (menuOpen = !menuOpen)}>
    <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
  </button>
  <a class="github-link" href={githubUrl} target="_blank" rel="noreferrer" aria-label={t('nav.github')}>{t('nav.github')} <span aria-hidden="true">↗</span></a>
  {#if searchOpen}
    <div class="search-dropdown-host">
      {#key lang}
        {#if SearchDialogComponent}
          <svelte:component this={SearchDialogComponent} bind:open={searchOpen} bind:query={searchQuery} bind:scope={searchScope} {lang} {activeSlug} />
        {:else}
          <section class="search-dialog search-dialog-loading" aria-label={t('search.label')}><p>{t('search.loading')}</p></section>
        {/if}
      {/key}
    </div>
  {/if}
</header>

<div class="mobile-search-row">
  <button class="search-trigger" type="button" aria-label={t('search.label')} aria-expanded={searchOpen} on:click|stopPropagation={toggleSearch}>
    <span aria-hidden="true">⌕</span>
    <span>{t('search.placeholder')}</span>
    <kbd>{t('search.shortcut')}</kbd>
  </button>
</div>

{#if menuOpen}
  <button class="drawer-scrim" type="button" aria-label={t('nav.closeMenu')} on:click={() => (menuOpen = false)}></button>
{/if}

<div class="site-grid" class:erm-grid={activeSection === 'erm'}>
  <aside class:open={menuOpen} class="sidebar" aria-label={t('nav.documentation')}>
    <div class="sidebar-scroll">
      <div class="mobile-primary-controls">
        <nav aria-label={t('nav.primary')}>
          {#each topItems as item}
            {#if item.enabled}
              <a href={`${base}/${lang}/${item.href}/`}>{t(item.labelKey)}</a>
            {:else}
              <button type="button" disabled title={t('nav.soon')}>{t(item.labelKey)}</button>
            {/if}
          {/each}
          <a href={githubUrl} target="_blank" rel="noreferrer">{t('nav.github')} ↗</a>
        </nav>
        <div><LanguageMenu {lang} /><button class="icon-button" type="button" aria-label={t('theme.toggle')} on:click={toggleTheme}>{theme === 'dark' ? '◐' : '☀'}</button></div>
      </div>
      {#if activeSection === 'erm'}<ErmAlphabet {lang} />{/if}
      {#each navGroups as group}
        <details class="nav-group" open={openGroups.includes(group.label)} on:toggle={(event) => updateGroup(group.label, event.currentTarget.open)}>
          <summary><h2>{t(group.label)}</h2><span aria-hidden="true">⌄</span></summary>
          <ul>
            {#each group.links as link}
              <li>
                <a class:current={activeSlug === link[1]} href={link[1] ? `${base}/${lang}/${link[1]}/` : `${base}/${lang}/`} on:click={() => (menuOpen = false)}>
                  <span class="nav-rune" aria-hidden="true">◇</span>
                  {t(link[0])}
                </a>
              </li>
            {/each}
          </ul>
        </details>
        <div class="ornament" aria-hidden="true"><span></span><b>◆</b><span></span></div>
      {/each}
      <button class:confirming={resetPending} class="reset-button" type="button" on:click={resetSettings} on:blur={() => (resetPending = false)}>
        {resetPending ? t('nav.confirmReset') : t('nav.reset')}
      </button>
    </div>
  </aside>

  <main class="content-column">
    {#if activeSection === 'erm'}<ErmQuickLinks {lang} />{/if}
    <div class="content-inner">
      <slot />
    </div>
  </main>

  <aside class="context-sidebar" class:reference-expanded={referenceExpanded} aria-label={activeSection === 'erm' ? t('erm.context.title') : t('nav.onThisPage')}>
    {#if activeSection === 'erm'}
      <ContextReference {lang} bind:this={referencePane} bind:expanded={referenceExpanded} />
    {:else}
    <div class="context-sticky">
      <h2>{t('nav.onThisPage')}</h2>
      {#if toc.length}
        <nav class="toc" aria-label={t('nav.onThisPage')}>
          {#each toc as item}
            <a href={`#${item.id}`}>{item.label}</a>
          {/each}
        </nav>
      {:else}
        <nav class="toc" aria-label={t('nav.onThisPage')}>
          <a href="#overview">{t('nav.overview')}</a>
          <a href="#quick-start">{t('home.quickTitle')}</a>
          <a href="#topics">{t('home.findTitle')}</a>
        </nav>
      {/if}
      <div class="ornament wide" aria-hidden="true"><span></span><b>◆</b><span></span></div>
      <div class="new-card">
        <h3>{t('home.newTitle')}</h3>
        <p>{t('home.newText')}</p>
        <a class="button-outline" href={`${base}/${lang}/${activeSection === 'erm' ? 'erm/start' : 'docs/quick-start'}/`}>{t('home.newAction')} <span aria-hidden="true">→</span></a>
      </div>
      <div class="motto-card">
        <span aria-hidden="true">◇</span>
        <p>{t('home.built')}</p>
        <span aria-hidden="true">◇</span>
      </div>
    </div>
    {/if}
  </aside>
</div>
</div>
