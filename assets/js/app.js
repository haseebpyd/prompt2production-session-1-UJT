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
};

const TARGET_TO_CHAPTER = Object.fromEntries(
    Object.entries(CHAPTERS).map(([target, file]) => [target, file])
);

let currentTarget = 'home';

async function loadChapter(target) {
    const file = TARGET_TO_CHAPTER[target];
    if (!file) return;

    const main = document.getElementById('chapter-container');
    main.innerHTML = '<div class="text-stone-500 py-12 text-center">Loading chapter…</div>';

    try {
        const res = await fetch(`chapters/${file}.html`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        main.innerHTML = await res.text();
        currentTarget = target;
        setActiveNav(target);
        initChapterInteractions();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.replaceState({ target }, '', `#${target}`);
    } catch (err) {
        main.innerHTML = `<div class="bg-red-50 text-red-800 p-6 rounded-lg">Failed to load chapter. Run via a local server (e.g. <code>python3 -m http.server 8000</code>).<br><span class="text-sm">${err.message}</span></div>`;
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
}

function initNavigation() {
    document.querySelectorAll('.nav-link, .nav-sublink').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadChapter(link.dataset.target);
        });
    });

    document.getElementById('chapter-container').addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        const target = link.getAttribute('href').slice(1);
        if (target && TARGET_TO_CHAPTER[target]) {
            e.preventDefault();
            loadChapter(target);
        }
    });

    const hash = window.location.hash.replace('#', '');
    if (hash && TARGET_TO_CHAPTER[hash]) {
        loadChapter(hash);
    } else {
        loadChapter('home');
    }

    window.addEventListener('popstate', (e) => {
        const target = e.state?.target || window.location.hash.replace('#', '') || 'home';
        if (TARGET_TO_CHAPTER[target]) loadChapter(target);
    });

    window.addEventListener('hashchange', () => {
        const target = window.location.hash.replace('#', '');
        if (TARGET_TO_CHAPTER[target] && target !== currentTarget) loadChapter(target);
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

document.addEventListener('DOMContentLoaded', initNavigation);
