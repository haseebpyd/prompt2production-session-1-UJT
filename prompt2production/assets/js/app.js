const CHAPTERS = {
    home: 'home',
    foundations: '01-introduction-to-ai',
    llms: '02-understanding-llms',
    prompting: '03-prompt-engineering',
    'prompting-context': '03-context-engineering',
    'prompting-images': '03-image-generation',
    'prompting-ux': '03-ux-design',
    'prompting-ui': '03-ui-development',
    'prompting-video': '03-video-generation',
    'prompting-gpts': '03-custom-gpts-gems',
    'one-page-app': '04-one-page-app',
    agile: '05-agile-sprints',
    'cursor-ides': '06-cursor-antigravity',
    'main-journey': '07-main-journey',
    'responsible-ai': '08-responsible-ai',
    'cheat-sheet': '09-cheat-sheet',
    glossary: '10-glossary',
    'frontend-roadmap': '11-frontend-roadmap',
};

const CHAPTER_LABELS = {
    home: 'Home & Overview',
    foundations: '1. Introduction to AI',
    llms: '2. Understanding LLMs',
    prompting: '3. Prompt Engineering',
    'prompting-context': '3a. Context Engineering',
    'prompting-images': '3b. Image Generation',
    'prompting-ux': '3c. UX Design',
    'prompting-ui': '3d. UI Development',
    'prompting-video': '3e. Video Generation',
    'prompting-gpts': '3f. Custom GPTs & Gems',
    'one-page-app': '4. One-Page App',
    agile: '5. Agile & Sprints',
    'cursor-ides': '6. Cursor & Antigravity',
    'main-journey': '7. The Main Journey',
    'responsible-ai': '8. Responsible AI',
    'cheat-sheet': '9. Prompt Cheat Sheet',
    glossary: '10. Glossary',
    'frontend-roadmap': '11. Frontend Roadmap',
};

const TARGET_TO_CHAPTER = Object.fromEntries(
    Object.entries(CHAPTERS).map(([target, file]) => [target, file])
);

let currentTarget = 'home';
let currentViewMode = 'lecture';
let currentLectureId = 'lecture-0';
let currentSlideIndex = 0;
let searchIndex = [];
let searchIndexReady = false;
let searchIndexPromise = null;
let activeResultIndex = -1;

const VIEW_MODE_KEY = 'p2p-view-mode';
const LAST_EBOOK_KEY = 'p2p-last-ebook';
const THEME_KEY = 'p2p-theme';
const SLIDE_INDEX_PREFIX = 'p2p-slide-';
const MOBILE_SIDEBAR_MQ = '(max-width: 767px)';

function isMobileSidebar() {
    return window.matchMedia(MOBILE_SIDEBAR_MQ).matches;
}

function setSidebarOpen(open) {
    document.body.classList.toggle('sidebar-open', open);
    const btn = document.getElementById('sidebar-toggle');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (btn) {
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        const icon = btn.querySelector('.sidebar-toggle-icon');
        if (icon) icon.textContent = open ? '✕' : '☰';
    }
    backdrop?.setAttribute('aria-hidden', String(!open));
}

function closeMobileSidebar() {
    if (isMobileSidebar()) setSidebarOpen(false);
}

function updateSidebarToggleTarget(mode) {
    const navId = mode === 'ebook' ? 'ebook-nav' : 'lecture-nav';
    document.getElementById('sidebar-toggle')?.setAttribute('aria-controls', navId);
}

function initMobileSidebar() {
    const toggle = document.getElementById('sidebar-toggle');
    const backdrop = document.getElementById('sidebar-backdrop');

    toggle?.addEventListener('click', () => {
        setSidebarOpen(!document.body.classList.contains('sidebar-open'));
    });

    backdrop?.addEventListener('click', closeMobileSidebar);

    document.querySelectorAll('#ebook-nav a, #lecture-nav a').forEach((link) => {
        link.addEventListener('click', closeMobileSidebar);
    });

    window.matchMedia(MOBILE_SIDEBAR_MQ).addEventListener('change', (e) => {
        if (!e.matches) setSidebarOpen(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' || !document.body.classList.contains('sidebar-open')) return;
        if (e.target.matches('input, textarea, select')) return;
        closeMobileSidebar();
    });
}

function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(THEME_KEY, theme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.textContent = isDark ? 'Light' : 'Dark';
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
}

function initTheme() {
    applyTheme(getPreferredTheme());

    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(next);
    });
}

function isLectureTarget(target) {
    return Boolean(target && LECTURES[target]);
}

function getSlideIndexKey(lectureId) {
    return `${SLIDE_INDEX_PREFIX}${lectureId}`;
}

function saveSlideIndex(lectureId, index) {
    localStorage.setItem(getSlideIndexKey(lectureId), String(index));
}

function loadSlideIndex(lectureId) {
    const stored = localStorage.getItem(getSlideIndexKey(lectureId));
    const index = stored !== null ? parseInt(stored, 10) : 0;
    const max = (LECTURES[lectureId]?.slides.length || 1) - 1;
    return Number.isFinite(index) ? Math.min(Math.max(0, index), max) : 0;
}

async function loadChapter(target, options = {}) {
    const file = TARGET_TO_CHAPTER[target];
    if (!file) return;
    if (currentViewMode !== 'ebook') return;

    const main = document.getElementById('chapter-container');
    main.innerHTML = '<div class="text-stone-500 dark:text-stone-400 py-12 text-center">Loading chapter…</div>';

    try {
        const res = await fetch(`chapters/${file}.html`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        main.innerHTML = await res.text();
        currentTarget = target;
        localStorage.setItem(LAST_EBOOK_KEY, target);
        setActiveNav(target);
        initChapterInteractions();
        if (options.scrollToHeading) {
            setTimeout(() => scrollToSearchResult(options.scrollToHeading), 80);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        history.replaceState({ mode: 'ebook', target }, '', `#${target}`);
    } catch (err) {
        main.innerHTML = `<div class="bg-red-50 text-red-800 p-6 rounded-lg">Failed to load chapter. Run via a local server (e.g. <code>python3 -m http.server 8000</code>).<br><span class="text-sm">${err.message}</span></div>`;
    }
}

function scrollToSearchResult(heading) {
    const needle = heading.toLowerCase().trim();
    const headings = document.querySelectorAll('#chapter-container h2, #chapter-container h3, #chapter-container h4');
    for (const el of headings) {
        const text = el.textContent.toLowerCase().trim();
        if (text.includes(needle) || needle.includes(text.slice(0, 24))) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            el.classList.add('search-flash');
            setTimeout(() => el.classList.remove('search-flash'), 2500);
            return;
        }
    }
}

const PROMPTING_SUB_PAGES = new Set([
    'prompting',
    'prompting-context',
    'prompting-images',
    'prompting-ux',
    'prompting-ui',
    'prompting-video',
    'prompting-gpts',
]);

function setPromptingNavExpanded(expanded) {
    const group = document.getElementById('nav-group-prompting');
    const toggle = group?.querySelector('.nav-group-toggle');
    if (!group || !toggle) return;
    group.classList.toggle('is-collapsed', !expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
}

function setActiveNav(target) {
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.toggle('active', link.dataset.target === target);
    });
    document.querySelectorAll('.nav-sublink').forEach((link) => {
        link.classList.toggle('active', link.dataset.target === target);
    });
    const parent = document.querySelector('.nav-link[data-target="prompting"]');
    if (parent) {
        parent.classList.toggle('nav-parent-active', PROMPTING_SUB_PAGES.has(target));
    }
    if (PROMPTING_SUB_PAGES.has(target)) {
        setPromptingNavExpanded(true);
    }
}

function initCollapsibleNav() {
    const group = document.getElementById('nav-group-prompting');
    const toggle = group?.querySelector('.nav-group-toggle');
    if (!group || !toggle) return;

    const hash = window.location.hash.replace('#', '');
    const startCollapsed = sessionStorage.getItem('nav-prompting-collapsed') === '1';
    const onPromptingPage = PROMPTING_SUB_PAGES.has(hash);
    setPromptingNavExpanded(onPromptingPage || !startCollapsed);

    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const expanded = group.classList.contains('is-collapsed');
        setPromptingNavExpanded(expanded);
        sessionStorage.setItem('nav-prompting-collapsed', expanded ? '0' : '1');
    });
}

function setActiveLectureNav(lectureId) {
    document.querySelectorAll('.lecture-link').forEach((link) => {
        link.classList.toggle('active', link.dataset.lecture === lectureId);
    });
}

function renderSlideDots(lectureId, slideIndex, total) {
    return Array.from({ length: total }, (_, i) =>
        `<button type="button" class="slide-dot${i === slideIndex ? ' active' : ''}" data-slide="${i}" aria-label="Go to slide ${i + 1}"${i === slideIndex ? ' aria-current="true"' : ''}></button>`
    ).join('');
}

function renderSlideLinks(links) {
    if (!links?.length) return '';
    const items = links
        .map(
            (link) =>
                `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" class="lecture-slide-link">${escapeHtml(link.label)}</a>`
        )
        .join('');
    return `<div class="lecture-slide-links">${items}</div>`;
}

function renderLectureSlide(lectureId, slideIndex) {
    const lecture = LECTURES[lectureId];
    if (!lecture) return '';

    const slide = lecture.slides[slideIndex];
    const total = lecture.slides.length;
    const bullets = slide.bullets
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('');
    const linksHtml = renderSlideLinks(slide.links);

    return `
        <section class="lecture-deck" data-lecture="${escapeHtml(lectureId)}" data-slide="${slideIndex}">
            <div class="lecture-deck-header">
                <p class="lecture-meta">${escapeHtml(lecture.title)} · Slide ${slideIndex + 1} of ${total}</p>
                <button type="button" id="slide-fullscreen" class="slide-fullscreen-btn" aria-label="Enter fullscreen">
                    <span aria-hidden="true">⛶</span> Fullscreen
                </button>
            </div>
            <div class="lecture-slide" id="lecture-slide-stage">
                <h2 class="lecture-slide-title">${escapeHtml(slide.title)}</h2>
                <ul class="lecture-slide-bullets">${bullets}</ul>
                ${linksHtml}
            </div>
            <div class="slide-nav">
                <button type="button" id="slide-prev" class="slide-nav-btn"${slideIndex === 0 ? ' disabled' : ''}>← Prev</button>
                <button type="button" id="slide-next" class="slide-nav-btn"${slideIndex >= total - 1 ? ' disabled' : ''}>Next →</button>
            </div>
            <div class="slide-dots" role="tablist" aria-label="Slide progress">
                ${renderSlideDots(lectureId, slideIndex, total)}
            </div>
        </section>`;
}

function patchLectureDeck(deck, lectureId, slideIndex) {
    const lecture = LECTURES[lectureId];
    const slide = lecture.slides[slideIndex];
    const total = lecture.slides.length;

    deck.dataset.slide = String(slideIndex);
    deck.querySelector('.lecture-meta').textContent = `${lecture.title} · Slide ${slideIndex + 1} of ${total}`;

    const stage = deck.querySelector('#lecture-slide-stage');
    stage.querySelector('.lecture-slide-title').textContent = slide.title;
    stage.querySelector('.lecture-slide-bullets').innerHTML = slide.bullets
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('');

    const existingLinks = stage.querySelector('.lecture-slide-links');
    const linksHtml = renderSlideLinks(slide.links);
    if (linksHtml) {
        if (existingLinks) existingLinks.outerHTML = linksHtml;
        else stage.insertAdjacentHTML('beforeend', linksHtml);
    } else if (existingLinks) {
        existingLinks.remove();
    }

    const prev = deck.querySelector('#slide-prev');
    const next = deck.querySelector('#slide-next');
    if (prev) prev.disabled = slideIndex === 0;
    if (next) next.disabled = slideIndex >= total - 1;

    const dots = deck.querySelector('.slide-dots');
    if (dots) dots.innerHTML = renderSlideDots(lectureId, slideIndex, total);

    updateFullscreenButton(deck.querySelector('#slide-fullscreen'));
}

function loadLecture(lectureId, slideIndex) {
    const lecture = LECTURES[lectureId];
    if (!lecture) return;
    if (currentViewMode !== 'lecture') return;

    const total = lecture.slides.length;
    const index = Math.min(Math.max(0, slideIndex ?? loadSlideIndex(lectureId)), total - 1);

    const main = document.getElementById('chapter-container');
    const existingDeck = main.querySelector('.lecture-deck');
    const sameLecture = existingDeck?.dataset.lecture === lectureId;

    if (sameLecture) {
        patchLectureDeck(existingDeck, lectureId, index);
    } else {
        main.innerHTML = renderLectureSlide(lectureId, index);
    }

    currentLectureId = lectureId;
    currentSlideIndex = index;
    saveSlideIndex(lectureId, index);
    setActiveLectureNav(lectureId);

    history.replaceState({ mode: 'lecture', lectureId, slideIndex: index }, '', `#${lectureId}`);
    if (!document.fullscreenElement) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateFullscreenButton(btn) {
    if (!btn) return;
    const isFs = document.fullscreenElement?.id === 'lecture-slide-stage';
    btn.innerHTML = isFs
        ? '<span aria-hidden="true">✕</span> Exit fullscreen'
        : '<span aria-hidden="true">⛶</span> Fullscreen';
    btn.setAttribute('aria-label', isFs ? 'Exit fullscreen' : 'Enter fullscreen');
}

async function toggleSlideFullscreen(slideEl, btn) {
    if (!slideEl) return;
    try {
        if (document.fullscreenElement === slideEl) {
            await document.exitFullscreen();
        } else {
            await slideEl.requestFullscreen();
        }
    } catch {
        /* fullscreen not supported or denied */
    }
    updateFullscreenButton(btn);
}

let slideNavigationReady = false;

function initSlideNavigation() {
    if (slideNavigationReady) return;
    slideNavigationReady = true;

    document.getElementById('chapter-container')?.addEventListener('click', (e) => {
        const deck = e.target.closest('.lecture-deck');
        if (!deck) return;

        const lectureId = deck.dataset.lecture;
        const slideIndex = parseInt(deck.dataset.slide, 10);

        if (e.target.closest('#slide-fullscreen')) {
            const slideEl = deck.querySelector('#lecture-slide-stage');
            const fsBtn = deck.querySelector('#slide-fullscreen');
            toggleSlideFullscreen(slideEl, fsBtn);
            return;
        }

        if (e.target.closest('#slide-prev')) {
            if (slideIndex > 0) loadLecture(lectureId, slideIndex - 1);
            return;
        }

        if (e.target.closest('#slide-next')) {
            const total = LECTURES[lectureId]?.slides.length || 0;
            if (slideIndex < total - 1) loadLecture(lectureId, slideIndex + 1);
            return;
        }

        const dot = e.target.closest('.slide-dot');
        if (dot) loadLecture(lectureId, parseInt(dot.dataset.slide, 10));
    });
}

function setViewMode(mode, options = {}) {
    if (mode !== 'ebook' && mode !== 'lecture') return;

    currentViewMode = mode;
    localStorage.setItem(VIEW_MODE_KEY, mode);

    document.body.classList.toggle('view-ebook', mode === 'ebook');
    document.body.classList.toggle('view-lecture', mode === 'lecture');

    document.getElementById('ebook-nav')?.classList.toggle('hidden', mode !== 'ebook');
    document.getElementById('lecture-nav')?.classList.toggle('hidden', mode !== 'lecture');
    updateSidebarToggleTarget(mode);

    document.querySelectorAll('.mode-toggle-btn').forEach((btn) => {
        const isActive = btn.dataset.mode === mode;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    if (mode === 'lecture') {
        const lectureId = options.lectureId || currentLectureId || 'lecture-0';
        const slideIndex = options.slideIndex ?? loadSlideIndex(lectureId);
        loadLecture(lectureId, slideIndex);
    } else {
        const target = options.target || localStorage.getItem(LAST_EBOOK_KEY) || currentTarget || 'home';
        const resolved = TARGET_TO_CHAPTER[target] ? target : 'home';
        loadChapter(resolved);
    }
}

function initViewMode() {
    initSlideNavigation();

    document.querySelectorAll('.mode-toggle-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.dataset.mode === currentViewMode) return;
            setViewMode(btn.dataset.mode);
        });
    });

    document.querySelectorAll('.lecture-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentViewMode !== 'lecture') {
                setViewMode('lecture', { lectureId: link.dataset.lecture });
            } else {
                loadLecture(link.dataset.lecture, loadSlideIndex(link.dataset.lecture));
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (currentViewMode !== 'lecture') return;
        if (e.target.matches('input, textarea, select')) return;

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (currentSlideIndex > 0) loadLecture(currentLectureId, currentSlideIndex - 1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            const total = LECTURES[currentLectureId]?.slides.length || 0;
            if (currentSlideIndex < total - 1) loadLecture(currentLectureId, currentSlideIndex + 1);
        }
    });

    const hash = window.location.hash.replace('#', '');
    if (isLectureTarget(hash)) {
        setViewMode('lecture', { lectureId: hash, slideIndex: loadSlideIndex(hash) });
    } else {
        const storedMode = localStorage.getItem(VIEW_MODE_KEY) || 'lecture';
        if (storedMode === 'lecture') {
            setViewMode('lecture', { lectureId: 'lecture-0' });
        } else if (hash && TARGET_TO_CHAPTER[hash]) {
            setViewMode('ebook', { target: hash });
        } else {
            setViewMode('ebook', { target: 'home' });
        }
    }
}

function initNavigation() {
    initCollapsibleNav();

    document.querySelectorAll('.nav-link, .nav-sublink').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentViewMode !== 'ebook') setViewMode('ebook', { target: link.dataset.target });
            else loadChapter(link.dataset.target);
        });
    });

    document.getElementById('chapter-container').addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        const target = link.getAttribute('href').slice(1);
        if (isLectureTarget(target)) {
            e.preventDefault();
            setViewMode('lecture', { lectureId: target, slideIndex: loadSlideIndex(target) });
        } else if (target && TARGET_TO_CHAPTER[target]) {
            e.preventDefault();
            if (currentViewMode !== 'ebook') setViewMode('ebook', { target });
            else loadChapter(target);
        }
    });

    window.addEventListener('popstate', (e) => {
        const state = e.state || {};
        const hash = window.location.hash.replace('#', '');

        if (state.mode === 'lecture' || isLectureTarget(hash)) {
            const lectureId = state.lectureId || hash;
            const slideIndex = state.slideIndex ?? loadSlideIndex(lectureId);
            if (currentViewMode !== 'lecture') setViewMode('lecture', { lectureId, slideIndex });
            else loadLecture(lectureId, slideIndex);
        } else {
            const target = state.target || hash || 'home';
            if (TARGET_TO_CHAPTER[target]) {
                if (currentViewMode !== 'ebook') setViewMode('ebook', { target });
                else loadChapter(target);
            }
        }
    });

    window.addEventListener('hashchange', () => {
        const target = window.location.hash.replace('#', '');

        if (isLectureTarget(target)) {
            if (currentViewMode !== 'lecture') setViewMode('lecture', { lectureId: target, slideIndex: loadSlideIndex(target) });
            else if (target !== currentLectureId) loadLecture(target, loadSlideIndex(target));
        } else if (TARGET_TO_CHAPTER[target] && currentViewMode === 'ebook' && target !== currentTarget) {
            loadChapter(target);
        }
    });
}

function initChapterInteractions() {
    initPromptBuilder();
    initAccordions();
    initCopyPromptButtons();
    initCopyCodeButtons();
    initGlossarySearch();
}

function initPromptBuilder() {
    const roleInput = document.getElementById('prompt-role');
    if (!roleInput) return;

    const taskInput = document.getElementById('prompt-task');
    const contextInput = document.getElementById('prompt-context');
    const constraintsInput = document.getElementById('prompt-constraints');
    const formatInput = document.getElementById('prompt-format');
    const examplesInput = document.getElementById('prompt-examples');
    const outputTextarea = document.getElementById('prompt-output');
    const generateBtn = document.getElementById('generate-prompt-btn');
    const copyBtn = document.getElementById('copy-prompt-btn');

    const generatePrompt = () => {
        let prompt = '';
        const parts = [
            { label: 'Role', value: roleInput.value },
            { label: 'Task', value: taskInput.value },
            { label: 'Context', value: contextInput.value },
            { label: 'Constraint', value: constraintsInput.value },
            { label: 'Format', value: formatInput.value },
            { label: 'Example', value: examplesInput.value },
        ];
        parts.forEach((part) => {
            if (part.value.trim()) prompt += `${part.label}: ${part.value.trim()}\n\n`;
        });
        outputTextarea.value = prompt.trim();
    };

    [roleInput, taskInput, contextInput, constraintsInput, formatInput, examplesInput].forEach((input) => {
        input.addEventListener('input', generatePrompt);
    });
    generateBtn?.addEventListener('click', generatePrompt);
    generatePrompt();

    copyBtn?.addEventListener('click', async () => {
        await navigator.clipboard.writeText(outputTextarea.value);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy to Clipboard'; }, 1500);
    });
}

function initAccordions() {
    document.querySelectorAll('.accordion-button').forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isExpanded = button.classList.toggle('active');
            content.style.maxHeight = isExpanded ? `${content.scrollHeight}px` : '0';
        });
    });
}

function initCopyPromptButtons() {
    document.querySelectorAll('.copy-prompt-btn').forEach((btn) => {
        btn.addEventListener('click', async () => {
            const promptText = btn.previousElementSibling.textContent;
            await navigator.clipboard.writeText(promptText);
            const original = btn.textContent;
            btn.textContent = 'Prompt Copied!';
            setTimeout(() => { btn.textContent = original; }, 1500);
        });
    });
}

function initCopyCodeButtons() {
    document.querySelectorAll('.copy-code-btn').forEach((btn) => {
        btn.addEventListener('click', async () => {
            const text = btn.getAttribute('data-copy');
            await navigator.clipboard.writeText(text);
            const original = btn.textContent;
            btn.textContent = 'Copied!';
            setTimeout(() => { btn.textContent = original; }, 1500);
        });
    });
}

function initGlossarySearch() {
    const searchInput = document.getElementById('glossary-search');
    const glossaryList = document.getElementById('glossary-list');
    if (!searchInput || !glossaryList) return;

    const glossaryItems = glossaryList.querySelectorAll('li');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        glossaryItems.forEach((item) => {
            item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
        });
    });
}

function normalizeText(text) {
    return text.replace(/\s+/g, ' ').trim();
}

function collectSiblingText(heading) {
    const parts = [heading.textContent];
    const level = parseInt(heading.tagName[1], 10);
    let sibling = heading.nextElementSibling;
    while (sibling) {
        if (/^H[234]$/.test(sibling.tagName) && parseInt(sibling.tagName[1], 10) <= level) break;
        parts.push(sibling.textContent);
        sibling = sibling.nextElementSibling;
    }
    return normalizeText(parts.join(' '));
}

function extractSearchChunks(html, target, chapterLabel) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const root = doc.querySelector('section.chapter') || doc.querySelector('section') || doc.body;
    const chunks = [];

    const pageTitle = root.querySelector('h2')?.textContent.trim() || chapterLabel;
    const pageIntro = normalizeText(
        Array.from(root.querySelectorAll('header p')).map((p) => p.textContent).join(' ')
    );
    chunks.push({
        target,
        chapter: chapterLabel,
        type: 'page',
        title: pageTitle,
        heading: pageTitle,
        text: `${pageTitle} ${pageIntro} ${normalizeText(root.textContent).slice(0, 300)}`,
    });

    root.querySelectorAll('h2, h3, h4').forEach((heading) => {
        const title = heading.textContent.trim();
        if (!title || title.length < 3) return;
        chunks.push({
            target,
            chapter: chapterLabel,
            type: 'section',
            title,
            heading: title,
            text: collectSiblingText(heading),
        });
    });

    root.querySelectorAll(
        '.bg-white.rounded-lg, .hover-card, .accordion-button, .bg-gradient-to-r, .bg-indigo-50.border, .bg-emerald-50'
    ).forEach((card) => {
        const title =
            card.querySelector('h3, h4, h2, .font-bold, strong')?.textContent.trim() ||
            card.textContent.trim().slice(0, 60);
        const text = normalizeText(card.textContent);
        if (text.length < 40 || text.length > 2000) return;
        chunks.push({
            target,
            chapter: chapterLabel,
            type: 'card',
            title: title.slice(0, 120),
            heading: title.slice(0, 120),
            text,
        });
    });

    return chunks;
}

async function buildSearchIndex() {
    const batches = await Promise.all(
        Object.entries(CHAPTERS).map(async ([target, file]) => {
            try {
                const res = await fetch(`chapters/${file}.html`);
                if (!res.ok) return [];
                const html = await res.text();
                return extractSearchChunks(html, target, CHAPTER_LABELS[target] || target);
            } catch {
                return [];
            }
        })
    );

    const seen = new Set();
    searchIndex = batches.flat().filter((item) => {
        const key = `${item.target}|${item.type}|${item.heading}|${item.text.slice(0, 60)}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    searchIndexReady = true;
}

function ensureSearchIndex() {
    if (!searchIndexPromise) {
        searchIndexPromise = buildSearchIndex();
    }
    return searchIndexPromise;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function buildExcerpt(text, terms) {
    const lower = text.toLowerCase();
    let start = 0;
    for (const term of terms) {
        const idx = lower.indexOf(term);
        if (idx !== -1) {
            start = Math.max(0, idx - 40);
            break;
        }
    }
    let excerpt = text.slice(start, start + 160);
    if (start > 0) excerpt = `…${excerpt}`;
    if (start + 160 < text.length) excerpt = `${excerpt}…`;

    for (const term of terms) {
        const re = new RegExp(`(${escapeRegex(term)})`, 'gi');
        excerpt = excerpt.replace(re, '<mark>$1</mark>');
    }
    return excerpt;
}

function searchHandbook(query) {
    const terms = query.toLowerCase().split(/\s+/).filter((t) => t.length >= 2);
    if (!terms.length) return [];

    const scored = [];
    for (const item of searchIndex) {
        const titleHay = item.title.toLowerCase();
        const chapterHay = item.chapter.toLowerCase();
        const textHay = item.text.toLowerCase();
        let score = 0;

        for (const term of terms) {
            if (titleHay.includes(term)) score += 12;
            if (chapterHay.includes(term)) score += 8;
            if (textHay.includes(term)) score += 4;
            if (item.type === 'page' && chapterHay.includes(term)) score += 3;
        }

        if (score > 0) scored.push({ ...item, score });
    }

    return scored.sort((a, b) => b.score - a.score).slice(0, 14);
}

function renderSearchResults(results, terms) {
    const panel = document.getElementById('global-search-results');
    if (!panel) return;

    activeResultIndex = -1;

    if (!terms.length) {
        panel.classList.add('hidden');
        panel.innerHTML = '';
        return;
    }

    if (!results.length) {
        panel.innerHTML = '<div class="search-no-results">No matches. Try different keywords.</div>';
        panel.classList.remove('hidden');
        return;
    }

    panel.innerHTML = results
        .map((result, index) => {
            const badgeClass = result.type === 'card' ? 'card' : result.type === 'section' ? 'section' : '';
            return `<button type="button" class="search-result-item" role="option" data-index="${index}" data-target="${escapeHtml(result.target)}" data-heading="${encodeURIComponent(result.heading)}">
                <div class="search-result-meta">
                    <span class="search-result-badge ${badgeClass}">${escapeHtml(result.type)}</span>
                    <span class="search-result-chapter">${escapeHtml(result.chapter)}</span>
                </div>
                <div class="search-result-title">${escapeHtml(result.title)}</div>
                <div class="search-result-excerpt">${buildExcerpt(result.text, terms)}</div>
            </button>`;
        })
        .join('');

    panel.querySelectorAll('.search-result-item').forEach((btn) => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            const heading = decodeURIComponent(btn.dataset.heading);
            closeSearchResults();
            document.getElementById('global-search').value = '';
            loadChapter(target, { scrollToHeading: heading });
        });
    });

    panel.classList.remove('hidden');
}

function closeSearchResults() {
    const panel = document.getElementById('global-search-results');
    panel?.classList.add('hidden');
    activeResultIndex = -1;
}

function setActiveResult(index) {
    const items = document.querySelectorAll('.search-result-item');
    items.forEach((item, i) => item.classList.toggle('active', i === index));
    activeResultIndex = index;
    items[index]?.scrollIntoView({ block: 'nearest' });
}

function initGlobalSearch() {
    const input = document.getElementById('global-search');
    const status = document.getElementById('global-search-status');
    const wrap = document.getElementById('global-search-wrap');
    if (!input) return;

    ensureSearchIndex().then(() => {
        if (status) {
            status.textContent = `${searchIndex.length} passages indexed`;
            status.classList.remove('hidden');
        }
    });

    input.addEventListener('input', async () => {
        const query = input.value.trim();
        const terms = query.toLowerCase().split(/\s+/).filter((t) => t.length >= 2);

        if (!terms.length) {
            closeSearchResults();
            return;
        }

        if (!searchIndexReady) {
            if (status) status.textContent = 'Indexing handbook…';
            await ensureSearchIndex();
            if (status) status.textContent = `${searchIndex.length} passages indexed`;
        }

        renderSearchResults(searchHandbook(query), terms);
    });

    input.addEventListener('keydown', (e) => {
        const items = document.querySelectorAll('.search-result-item');
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveResult(Math.min(activeResultIndex + 1, items.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveResult(Math.max(activeResultIndex - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            items[activeResultIndex >= 0 ? activeResultIndex : 0]?.click();
        } else if (e.key === 'Escape') {
            closeSearchResults();
            input.blur();
        }
    });

    document.addEventListener('click', (e) => {
        if (!wrap?.contains(e.target)) closeSearchResults();
    });

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            input.focus();
            input.select();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileSidebar();
    initNavigation();
    initViewMode();
    initGlobalSearch();
    ensureSearchIndex();

    document.addEventListener('fullscreenchange', () => {
        updateFullscreenButton(document.getElementById('slide-fullscreen'));
    });
});
