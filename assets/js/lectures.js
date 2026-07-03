const LECTURES = {
    'lecture-0': {
        title: 'Lecture 0: Introduction',
        slides: [
            {
                title: 'Meet Your Instructor',
                bullets: [
                    'Mr. Haseeb — COO at AlrightTech',
                    'Full Stack AI Engineer',
                    'Designed this program to take interns from AI basics to production-ready apps',
                    'mrhaseeb.com · LinkedIn: /in/mrmuhammadhaseeb',
                ],
            },
            {
                title: 'Ebook + Lecture Mode',
                bullets: [
                    'From Prompt to Production — digital book for depth + lecture slides for focus',
                    'Toggle Ebook | Lecture in the top-right header',
                    'Hash URLs (#lecture-3, #agile) bookmark your place — progress saves automatically',
                ],
            },
            {
                title: 'The Production Journey',
                bullets: [
                    'Engineer prompts → build a one-page app → ship to GitHub + Vercel',
                    'Move to Cursor + SDD for full stack web or Flutter mobile',
                    'End goal: live web URL or published app on Play Store / App Store',
                ],
            },
            {
                title: 'Lectures 1–2: Prompt Skills',
                bullets: [
                    'Lecture 1 — 6-step framework: Role, Task, Context, Constraints, Format, Examples',
                    'Lecture 2 — apply prompts to chat, code, images, audio, and fast inference (Groq)',
                    'Core skill for every build step that follows',
                ],
                links: [
                    { label: 'Lecture 1', url: '#lecture-1' },
                    { label: 'Lecture 2', url: '#lecture-2' },
                ],
            },
            {
                title: 'Lecture 3: First Ship',
                bullets: [
                    'Build a single-page app with DeepSeek — no IDE required yet',
                    'Version control with GitHub (CLI or GitHub Desktop)',
                    'Deploy a public live URL on Vercel',
                ],
                links: [
                    { label: 'Lecture 3', url: '#lecture-3' },
                ],
            },
            {
                title: 'Lectures 4–6: Build for Real',
                bullets: [
                    'Lecture 4 — Cursor modes, foundation docs (context, tech, uiux), env vars',
                    'Lecture 5 — full stack concepts, Next.js, PostgreSQL, Prisma',
                    'Lecture 6 — SDD sprint pipeline, database setup, build-fix-push workflow',
                ],
                links: [
                    { label: 'Lecture 4', url: '#lecture-4' },
                    { label: 'Lecture 5', url: '#lecture-5' },
                    { label: 'Lecture 6', url: '#lecture-6' },
                ],
            },
            {
                title: 'Lectures 7–10: Mobile Path',
                bullets: [
                    'Lecture 7 — native vs cross-platform, Flutter, React Native, platform permissions',
                    'Lecture 8 — Flutter setup on Windows/Mac, commands, APK and IPA builds',
                    'Lecture 9 — Google Play Store publishing; Lecture 10 — Apple App Store',
                ],
                links: [
                    { label: 'Lecture 7', url: '#lecture-7' },
                    { label: 'Lecture 8', url: '#lecture-8' },
                    { label: 'Lecture 9', url: '#lecture-9' },
                    { label: 'Lecture 10', url: '#lecture-10' },
                ],
            },
            {
                title: 'Ebook Deep Dives & Outcomes',
                bullets: [
                    'Ebook Ch 1–2: AI and LLM foundations; Ch 8: Responsible AI',
                    'Ch 9–10: prompt cheat sheet and glossary for quick reference',
                    'Outcomes: engineer prompts, run SDD sprints, ship web or mobile to production',
                ],
                links: [
                    { label: 'Ch 1 — Introduction to AI', url: '#introduction' },
                    { label: 'Ch 8 — Responsible AI', url: '#responsible-ai' },
                ],
            },
        ],
    },
    'lecture-1': {
        title: 'Lecture 1: Prompt Engineering',
        slides: [
            {
                title: 'What Is Prompt Engineering?',
                bullets: [
                    'The skill of designing your input to get the best output from an LLM',
                    'You are not just chatting — you are guiding the model',
                    'The core skill of the AI-augmented developer',
                ],
            },
            {
                title: 'The 6-Step Framework',
                bullets: [
                    'Use S-T-C-C-F-E for any complex task',
                    'Role → Task → Context → Constraints → Format → Examples',
                    'Each step removes ambiguity and improves first-try results',
                ],
            },
            {
                title: 'Step 1: Role',
                bullets: [
                    'Assign a persona to the model',
                    'Sets tone, expertise level, and perspective',
                    'Example: "Act as a senior Python backend engineer."',
                ],
            },
            {
                title: 'Step 2: Task',
                bullets: [
                    'State the goal in one clear sentence',
                    'Say exactly what you want done',
                    'Example: "Create a function to calculate Haversine distance between two coordinates."',
                ],
            },
            {
                title: 'Step 3: Context',
                bullets: [
                    'Give background the model needs to answer correctly',
                    'Include stack, data shapes, and environment',
                    'Example: "Coordinates are passed as a tuple (lat, lon). The app uses the math library."',
                ],
            },
            {
                title: 'Step 4: Constraints',
                bullets: [
                    'Set hard limits on the output',
                    'Say what is not allowed',
                    'Example: "No external libraries. Add docstrings and type hints."',
                ],
            },
            {
                title: 'Step 5: Format',
                bullets: [
                    'Specify how the output should look',
                    'JSON only, code block only, markdown headings, etc.',
                    'Example: "Output only runnable Python code in a code block."',
                ],
            },
            {
                title: 'Step 6: Examples',
                bullets: [
                    'Optional but powerful — show input/output pairs',
                    'Steers format and accuracy',
                    'Example: "Input (40.6, -74.0) and (34.0, -118.2) → approx 3935 km."',
                ],
            },
            {
                title: 'Framework in One Prompt',
                bullets: [
                    'Role: Act as a world-class Python backend engineer.',
                    'Task: Create a Haversine distance function.',
                    'Context: Use math library; coordinates as (lat, lon) tuples.',
                    'Constraints: No external libs; add docstrings and type hints.',
                    'Format: Output only runnable Python in a code block.',
                ],
            },
            {
                title: 'Bad Prompt',
                bullets: [
                    '"Make my app faster."',
                    'Too vague — no context about the app or stack',
                    'No success criteria or measurable goal',
                    'The model must guess what you mean',
                ],
            },
            {
                title: 'Good Prompt',
                bullets: [
                    'Role: Act as a senior Next.js performance engineer.',
                    'Task: List the top 3 optimizations for my /dashboard page.',
                    'Context: Next.js 15 app, 50+ product images, loads in 4 seconds.',
                    'Constraints: No new dependencies. Format: numbered list with estimated impact.',
                ],
            },
            {
                title: 'Quick Rules',
                bullets: [
                    'Be specific — "300-word intro" beats "write about dogs"',
                    'Use action verbs: analyze, extract, refactor, generate',
                    'Define output format every time',
                    'Iterate, test, and save prompts that work',
                ],
            },
        ],
    },
    'lecture-2': {
        title: 'Lecture 2: Prompt Engineering Use Cases',
        slides: [
            {
                title: 'One Skill, Many Outputs',
                bullets: [
                    'Prompt engineering works across chat, code, images, audio, and more',
                    'Same S-T-C-C-F-E framework — different tools per modality',
                    'Pick the right tool for the job, then write a precise prompt',
                ],
            },
            {
                title: 'Chat & Text',
                bullets: [
                    'Summarize documents, draft emails, brainstorm features',
                    'Extract structured data — ask for JSON with a defined schema',
                    'Try zero-shot for simple tasks or role-based for expert tone',
                ],
                links: [
                    { label: 'ChatGPT', url: 'https://chatgpt.com' },
                    { label: 'Gemini', url: 'https://gemini.google.com' },
                    { label: 'DeepSeek', url: 'https://chat.deepseek.com' },
                    { label: 'Claude', url: 'https://claude.ai' },
                ],
            },
            {
                title: 'Code Generation',
                bullets: [
                    'Generate functions, debug errors, refactor messy code',
                    'Always set constraints: no external libs, language version, file structure',
                    'Format: "Output only runnable code in a single code block"',
                ],
                links: [
                    { label: 'DeepSeek', url: 'https://chat.deepseek.com' },
                    { label: 'Cursor', url: 'https://cursor.com' },
                ],
            },
            {
                title: 'Image Generation',
                bullets: [
                    'Describe subject, style, lighting, and composition clearly',
                    'One scene per prompt — avoid cramming multiple ideas',
                    'Use photography language: lens, angle, mood, background',
                ],
                links: [
                    { label: 'Gemini', url: 'https://gemini.google.com' },
                ],
            },
            {
                title: 'Audio & Voice',
                bullets: [
                    'Text-to-speech for narration, demos, and accessibility',
                    'Specify tone, pace, accent, and language in the prompt',
                    'Voice cloning and sound effects for product demos',
                ],
                links: [
                    { label: 'ElevenLabs', url: 'https://elevenlabs.io' },
                ],
            },
            {
                title: 'Fast Inference with Groq',
                bullets: [
                    'Run open-source models at very high speed',
                    'Great for quick prompt experiments and A/B testing',
                    'Low latency — iterate on prompts faster than full chat UIs',
                ],
                links: [
                    { label: 'Groq Playground', url: 'https://console.groq.com/playground' },
                ],
            },
            {
                title: 'Try It Now',
                bullets: [
                    'Pick one modality from this lecture',
                    'Write a 6-step prompt and test it in the tool below',
                    'Save prompts that work — you will reuse them in projects',
                ],
                links: [
                    { label: 'ChatGPT', url: 'https://chatgpt.com' },
                    { label: 'Gemini', url: 'https://gemini.google.com' },
                    { label: 'DeepSeek', url: 'https://chat.deepseek.com' },
                    { label: 'Claude', url: 'https://claude.ai' },
                    { label: 'Cursor', url: 'https://cursor.com' },
                    { label: 'Groq', url: 'https://console.groq.com/playground' },
                    { label: 'ElevenLabs', url: 'https://elevenlabs.io' },
                ],
            },
        ],
    },
    'lecture-3': {
        title: 'Lecture 3: Single-Page App & Deployment',
        slides: [
            {
                title: 'What Is a Single-Page App?',
                bullets: [
                    'One HTML file with embedded CSS and JavaScript',
                    'Opens in any browser — no npm, no build tools, no IDE',
                    'Perfect first project before moving to full stack',
                ],
            },
            {
                title: 'What You Will Build',
                bullets: [
                    'Pick one small app: todo list, unit converter, or expense tracker',
                    'All features in a single file named index.html',
                    'Must work by double-clicking the file in your browser',
                ],
            },
            {
                title: 'Generate Code with DeepSeek',
                bullets: [
                    'DeepSeek is free and strong at generating code',
                    'Open the chat, paste your structured prompt, get full HTML back',
                    'No setup required — just a browser and a text editor',
                ],
                links: [
                    { label: 'DeepSeek', url: 'https://chat.deepseek.com' },
                ],
            },
            {
                title: 'Write the Prompt',
                bullets: [
                    'Role: Act as a senior frontend developer',
                    'Task: Create a single-file HTML todo list app',
                    'Constraints: Tailwind CDN, dark theme, localStorage, no external JS libs',
                    'Format: Output only the complete runnable HTML in one code block',
                ],
                links: [
                    { label: 'DeepSeek', url: 'https://chat.deepseek.com' },
                ],
            },
            {
                title: 'Get the Output',
                bullets: [
                    'Copy the generated code from DeepSeek',
                    'Save as index.html on your computer',
                    'Double-click to open in browser — iterate with follow-up prompts',
                    'Try: "Add dark mode toggle" or "Fix button alignment"',
                ],
            },
            {
                title: 'What Is GitHub?',
                bullets: [
                    'Cloud storage for your code with full version history',
                    'Share projects with mentors and add to your portfolio',
                    'Industry standard — every developer uses it',
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com' },
                ],
            },
            {
                title: 'Create a GitHub Repository',
                bullets: [
                    'Sign up at github.com → click New repository',
                    'Name it after your app (e.g. my-todo-app) — set to Public',
                    'Do not add README, .gitignore, or license if uploading files from your computer',
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com' },
                ],
            },
            {
                title: 'Git CLI: init, add, commit',
                bullets: [
                    'Open terminal in your project folder',
                    'git init — start tracking this folder',
                    'git add . — stage all files',
                    'git commit -m "feat: initial todo app" — save a snapshot',
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com' },
                ],
            },
            {
                title: 'Git CLI: connect & push',
                bullets: [
                    'git branch -M main — rename default branch to main',
                    'git remote add origin https://github.com/YOU/REPO.git',
                    'git push -u origin main — upload code to GitHub',
                ],
                links: [
                    { label: 'GitHub', url: 'https://github.com' },
                ],
            },
            {
                title: 'GitHub Desktop',
                bullets: [
                    'Install GitHub Desktop — visual alternative to the command line',
                    'File → Add Local Repository → select your project folder',
                    'Write commit summary → Commit to main → Push origin',
                ],
                links: [
                    { label: 'GitHub Desktop', url: 'https://desktop.github.com' },
                ],
            },
            {
                title: 'What Is Vercel?',
                bullets: [
                    'Hosting platform that connects to your GitHub repo',
                    'Every push to main auto-deploys a live public URL',
                    'Free tier is enough for intern projects and portfolios',
                ],
                links: [
                    { label: 'Vercel', url: 'https://vercel.com' },
                ],
            },
            {
                title: 'Import Project on Vercel',
                bullets: [
                    'Sign in to Vercel with your GitHub account — authorize repo access',
                    'Add New → Project → import your repository',
                    'Framework Preset: Other (for static HTML) → click Deploy',
                ],
                links: [
                    { label: 'Vercel', url: 'https://vercel.com' },
                ],
            },
            {
                title: 'Deployments & Live URL',
                bullets: [
                    'Every git push to main triggers a new deployment automatically',
                    'Production URL is your live public link — copy it for your portfolio',
                    'Preview deployments appear for branches and pull requests',
                ],
                links: [
                    { label: 'Vercel', url: 'https://vercel.com' },
                ],
            },
            {
                title: 'Environment Variables on Vercel',
                bullets: [
                    'Project → Settings → Environment Variables',
                    'Add key-value pairs for Production, Preview, or Development',
                    'Redeploy after adding or changing variables — they are not applied retroactively',
                ],
                links: [
                    { label: 'Vercel Env Vars', url: 'https://vercel.com/docs/projects/environment-variables' },
                ],
            },
            {
                title: 'Custom Domains (Optional)',
                bullets: [
                    'Project → Settings → Domains → add your domain name',
                    'Update DNS records at your domain registrar as Vercel instructs',
                    'HTTPS is automatic once DNS propagates',
                ],
                links: [
                    { label: 'Vercel Domains', url: 'https://vercel.com/docs/projects/domains' },
                ],
            },
            {
                title: 'Checkpoint: First Production Ship',
                bullets: [
                    'App works locally when you open index.html in a browser',
                    'Code is on GitHub with at least one meaningful commit',
                    'Public Vercel URL loads your app — demo-ready for mentors',
                ],
                links: [
                    { label: 'Vercel', url: 'https://vercel.com' },
                ],
            },
        ],
    },
    'lecture-4': {
        title: 'Lecture 4: AI IDEs, Documentation & Frontend Development',
        slides: [
            {
                title: 'From Browser to AI IDE',
                bullets: [
                    'Web LLMs work on one file at a time in a chat window',
                    'AI IDEs see your whole project — files, terminal, and git',
                    'This is how you move from a single-page app to full stack development',
                ],
            },
            {
                title: 'AI IDE Landscape',
                bullets: [
                    'Cursor — VS Code fork with deep AI integration (primary for this course)',
                    'Antigravity — Google agentic IDE with strong Gemini support',
                    'GitHub Copilot and Windsurf — other popular AI-native options',
                    'Pick one primary IDE and learn it well',
                ],
                links: [
                    { label: 'Cursor', url: 'https://cursor.com' },
                    { label: 'Antigravity', url: 'https://antigravity.google' },
                    { label: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
                ],
            },
            {
                title: 'Cursor: Ask Mode',
                bullets: [
                    'Ask questions about your codebase — no file changes',
                    'Example: "How does authentication work in this project?"',
                    'Best for learning, exploring, and understanding before you build',
                ],
                links: [
                    { label: 'Cursor', url: 'https://cursor.com' },
                ],
            },
            {
                title: 'Cursor: Plan Mode',
                bullets: [
                    'AI drafts a step-by-step plan before editing any files',
                    'You review and approve the plan, then it builds',
                    'Use this for multi-file features and sprint-sized tasks',
                ],
                links: [
                    { label: 'Cursor', url: 'https://cursor.com' },
                ],
            },
            {
                title: 'Cursor: Agent Mode',
                bullets: [
                    'Autonomous multi-file edits across your project',
                    'Runs terminal commands — npm install, git, tests',
                    'Iterates until the task is done or you stop it',
                ],
                links: [
                    { label: 'Cursor', url: 'https://cursor.com' },
                ],
            },
            {
                title: 'Cursor: Debug Mode',
                bullets: [
                    'Systematic bug tracing — paste errors and stack traces',
                    'AI reasons step-by-step before proposing a fix',
                    'Use when something breaks and you need root-cause analysis',
                ],
                links: [
                    { label: 'Cursor', url: 'https://cursor.com' },
                ],
            },
            {
                title: 'Files, Terminal & @ Context',
                bullets: [
                    'Use @file, @folder, @codebase to give the AI precise context',
                    'Inline edit (Cmd+K) — highlight code and describe the change',
                    'Terminal — run npm, git, and tests without leaving the IDE',
                ],
                links: [
                    { label: 'Cursor Docs', url: 'https://docs.cursor.com' },
                ],
            },
            {
                title: 'Antigravity',
                bullets: [
                    'Google\'s agentic development environment',
                    'Strong Gemini integration and multi-agent workflows',
                    'Good for complex builds when you want Google\'s AI stack',
                ],
                links: [
                    { label: 'Antigravity', url: 'https://antigravity.google' },
                ],
            },
            {
                title: 'Document Before You Code',
                bullets: [
                    'Foundation markdown files define scope before AI writes code',
                    'Stops the model from guessing your stack, design, or features',
                    'See sprint-templates/ in this repo for full examples',
                ],
            },
            {
                title: 'context.md — Scope Defined',
                bullets: [
                    'Executive summary, goals, user roles, and feature list',
                    'In-scope vs out-of-scope — what you will and will not build',
                    'Assumptions and risks — the "what and why" of the project',
                ],
            },
            {
                title: 'tech.md & uiux.md',
                bullets: [
                    'tech.md — framework, database, auth, env vars, deployment target',
                    'uiux.md — color palette, typography, components, accessibility',
                    'Together they lock stack and design so every sprint stays consistent',
                ],
            },
            {
                title: 'Prompting with Cursor / Antigravity',
                bullets: [
                    'Open Plan mode and attach @context.md @tech.md @uiux.md',
                    'Paste one sprint execution prompt at a time — never the whole sprint.md',
                    'Review the plan, approve, then let the agent build and test',
                ],
                links: [
                    { label: 'Cursor', url: 'https://cursor.com' },
                ],
            },
            {
                title: 'Environment Variables',
                bullets: [
                    'API keys and secrets live in .env.local — never commit to git',
                    'Ship .env.example with placeholder names so teammates know what to set',
                    'Production keys go in Vercel → Project → Settings → Environment Variables',
                    'First Vercel project setup: see Lecture 3',
                ],
                links: [
                    { label: 'Vercel Env Vars', url: 'https://vercel.com/docs/projects/environment-variables' },
                    { label: 'Lecture 3 — Vercel Setup', url: '#lecture-3' },
                ],
            },
            {
                title: 'Build a Chatbot with Cursor + API',
                bullets: [
                    '1) Get a Gemini API key from Google AI Studio',
                    '2) Add GEMINI_API_KEY=... to .env.local (and Vercel for production)',
                    '3) API route calls Gemini server-side — key never exposed to browser',
                    '4) Frontend chat UI — prompt Cursor: "Build a Next.js chat page using uiux.md colors"',
                ],
                links: [
                    { label: 'Get Gemini API Key', url: 'https://aistudio.google.com/apikey' },
                    { label: 'Google AI Studio', url: 'https://aistudio.google.com' },
                    { label: 'Gemini API Docs', url: 'https://ai.google.dev/gemini-api/docs' },
                ],
            },
            {
                title: 'Complete Frontend Roadmap',
                bullets: [
                    'Prompt2Production teaches AI-native development — not every frontend topic in depth',
                    'The ebook has a full Beginner → Pro roadmap: HTML, CSS, JS, React, Next.js, testing, and more',
                    'Use it as a self-study guide alongside your sprints and portfolio builds',
                    'Switch to Ebook mode → Chapter 11: Frontend Roadmap',
                ],
                links: [
                    { label: 'Frontend Roadmap (Ebook)', url: '#frontend-roadmap' },
                ],
            },
        ],
    },
    'lecture-5': {
        title: 'Lecture 5: Intro to Full Stack Development',
        slides: [
            {
                title: 'What Is Full Stack?',
                bullets: [
                    'Full stack = frontend + backend + database working together',
                    'You build the whole product — not just the user interface',
                    'Example: a todo app with login, saved tasks, and a live deployed URL',
                ],
            },
            {
                title: 'Frontend vs Backend',
                bullets: [
                    'Frontend — what users see and click (HTML, CSS, React components)',
                    'Backend — business logic, authentication, and data access',
                    'In Next.js, both live in the same project — pages and API routes',
                ],
            },
            {
                title: 'What Are APIs?',
                bullets: [
                    'API = how the frontend asks the backend for data or actions',
                    'Example: fetch("/api/login") sends credentials → server returns a session',
                    'Example: fetch("/api/chat", { message }) → server calls Gemini → JSON reply',
                ],
            },
            {
                title: 'What Is a "Stack"?',
                bullets: [
                    'The set of languages, frameworks, and tools your team standardizes on',
                    'MERN — MongoDB, Express, React, Node.js',
                    'AlrightTech stack — Next.js, PostgreSQL, Prisma, Tailwind, Vercel',
                ],
            },
            {
                title: 'JavaScript / TypeScript Stacks',
                bullets: [
                    'Next.js — React framework with API routes and server actions built in',
                    'MERN — MongoDB + Express + React + Node; often two separate repos',
                    'TypeScript adds type safety across frontend and backend',
                ],
                links: [
                    { label: 'Next.js', url: 'https://nextjs.org' },
                ],
            },
            {
                title: 'Python Stacks',
                bullets: [
                    'Django — full framework with admin panel, ORM, and auth built in',
                    'Flask — minimal and flexible; you choose your own pieces',
                    'FastAPI — modern, fast APIs; popular for ML and AI backends',
                ],
                links: [
                    { label: 'Django', url: 'https://www.djangoproject.com' },
                    { label: 'FastAPI', url: 'https://fastapi.tiangolo.com' },
                ],
            },
            {
                title: 'PHP & Other Stacks',
                bullets: [
                    'Laravel — elegant PHP framework with strong ecosystem and tooling',
                    'Often paired with a separate React or Vue frontend',
                    'Ruby on Rails — convention over configuration; great for rapid CRUD apps',
                ],
                links: [
                    { label: 'Laravel', url: 'https://laravel.com' },
                ],
            },
            {
                title: 'Framework Comparison',
                bullets: [
                    'Next.js (TS) — Pro: one repo, easy Vercel deploy. Con: JS ecosystem learning curve',
                    'Django (Python) — Pro: admin + ORM. Con: heavy for modern SPAs',
                    'Flask (Python) — Pro: simple, flexible. Con: you assemble everything yourself',
                    'FastAPI (Python) — Pro: fast APIs, async. Con: no built-in admin UI',
                    'Laravel (PHP) — Pro: mature ecosystem. Con: often needs a separate frontend',
                    'MERN (JS) — Pro: widely taught. Con: two codebases, more wiring and CORS',
                ],
                links: [
                    { label: 'Next.js', url: 'https://nextjs.org' },
                    { label: 'Django', url: 'https://www.djangoproject.com' },
                    { label: 'FastAPI', url: 'https://fastapi.tiangolo.com' },
                    { label: 'Laravel', url: 'https://laravel.com' },
                ],
            },
            {
                title: 'How to Select a Framework',
                bullets: [
                    'Match your team\'s language skills and hiring market',
                    'Project type — SPA, content site, API-only, or mobile companion',
                    'Deployment target — Vercel, AWS, shared hosting',
                    'AI tool support — Cursor knows React/Next and Python stacks deeply',
                ],
            },
            {
                title: 'Why Next.js for This Course?',
                bullets: [
                    'AlrightTech production standard — same stack interns use on real projects',
                    'Cursor and AI tools generate high-quality React/Next code',
                    'One codebase means faster sprints and fewer integration bugs',
                ],
                links: [
                    { label: 'Next.js', url: 'https://nextjs.org' },
                ],
            },
            {
                title: 'One Repo, Not Two',
                bullets: [
                    'Separate frontend + backend repos = duplicated types and two deploys',
                    'You also fight CORS, auth cookies, and API contract drift',
                    'Next.js: pages, API routes, and server actions in one project',
                ],
            },
            {
                title: 'Next.js Advantages',
                bullets: [
                    'App Router and Server Components — less JavaScript sent to the browser',
                    'Built-in API routes — no separate Express server needed',
                    'Image optimization, fast refresh, TypeScript-first, one-click Vercel deploy',
                ],
                links: [
                    { label: 'Next.js', url: 'https://nextjs.org' },
                ],
            },
            {
                title: 'Relational vs Non-Relational DB',
                bullets: [
                    'Relational (SQL) — PostgreSQL, MySQL: tables, rows, joins, ACID transactions',
                    'Example: User table linked to Project table via foreign key',
                    'Non-relational (NoSQL) — MongoDB, Firebase: flexible JSON documents',
                    'Example: one document per user with nested projects array',
                ],
                links: [
                    { label: 'PostgreSQL', url: 'https://www.postgresql.org' },
                    { label: 'MongoDB', url: 'https://www.mongodb.com' },
                ],
            },
            {
                title: 'How to Choose a Database',
                bullets: [
                    'Use SQL when data has clear relationships — users → projects → tasks',
                    'Use NoSQL for flexible schemas, rapid prototypes, or document-heavy data',
                    'This course uses PostgreSQL + Prisma — industry standard, works great with Next.js',
                ],
                links: [
                    { label: 'PostgreSQL', url: 'https://www.postgresql.org' },
                    { label: 'Prisma', url: 'https://www.prisma.io' },
                ],
            },
        ],
    },
    'lecture-6': {
        title: 'Lecture 6: Full Stack with SDD',
        slides: [
            {
                title: 'What Is Sprint-Driven Development?',
                bullets: [
                    'SDD breaks a full project into small, shippable sprints',
                    'AI can generate code in seconds — SDD keeps you organized and complete',
                    'Each sprint has clear goals, tasks, and acceptance criteria',
                ],
            },
            {
                title: 'Start with requirements.md',
                bullets: [
                    'One file capturing all client needs before any code is written',
                    'Include: features, user roles, constraints, and success criteria',
                    'This is the source of truth for every doc and sprint that follows',
                ],
            },
            {
                title: 'Generate the Foundation Docs',
                bullets: [
                    'From requirements.md → context.md, tech.md, and uiux.md',
                    'Use PromptWizard to auto-generate, or write them in Cursor',
                    'Reference templates in sprint-templates/ folder in this repo',
                ],
                links: [
                    { label: 'Agile & PromptWizard (Ebook)', url: '#agile' },
                ],
            },
            {
                title: 'context.md — What & Why',
                bullets: [
                    'Executive summary, goals, user roles, and feature list',
                    'In-scope vs out-of-scope — what you will and will not build',
                    'Assumptions and risks — AI reads this to know what to build',
                ],
            },
            {
                title: 'tech.md & uiux.md',
                bullets: [
                    'tech.md — Next.js, PostgreSQL, Prisma, auth, env vars, deploy target',
                    'uiux.md — color palette, typography, components, accessibility',
                    'Together they lock stack and design for every sprint',
                ],
            },
            {
                title: 'Build sprint.md',
                bullets: [
                    'Split the full project into phases, then sprints within each phase',
                    'Each sprint includes: Goals, Tasks, Acceptance Criteria, Dependencies',
                    'See sprint-templates/sprints.md for a full 14-sprint reference example',
                ],
            },
            {
                title: 'Set Up .env & Database URL',
                bullets: [
                    'Create a PostgreSQL database — from Vercel Storage, or sign up at Neon, Supabase, or another provider',
                    'Copy the connection string into .env.local: DATABASE_URL=postgresql://...',
                    'Add the same DATABASE_URL in Vercel → Project → Settings → Environment Variables',
                    'Ship .env.example with placeholder names — never commit real keys to git',
                ],
                links: [
                    { label: 'Vercel Storage', url: 'https://vercel.com/docs/storage' },
                    { label: 'Neon', url: 'https://neon.tech' },
                    { label: 'Vercel Env Vars', url: 'https://vercel.com/docs/projects/environment-variables' },
                ],
            },
            {
                title: 'Sprint Execution Prompts',
                bullets: [
                    'Every sprint ends with a copy-paste prompt block for Cursor',
                    'Prompt must say: attach @context.md @tech.md @uiux.md',
                    'Example: "Implement Sprint 2.1 Auth — login UI, API routes, Prisma User model per acceptance criteria"',
                ],
            },
            {
                title: 'One Sprint = One Cursor Session',
                bullets: [
                    'Start a new agent or chat for each sprint — fresh context',
                    'Open Plan mode, attach the three foundation docs',
                    'Paste one Sprint Execution Prompt only — never the whole sprint.md file',
                ],
                links: [
                    { label: 'Cursor', url: 'https://cursor.com' },
                    { label: 'Cursor Docs', url: 'https://docs.cursor.com' },
                ],
            },
            {
                title: 'Build, Fix Errors, Push',
                bullets: [
                    'After each sprint: run npm run build and fix all errors',
                    'Test every acceptance criterion before moving on',
                    'git add . → git commit -m "feat: sprint X.Y description" → git push',
                    'Push to main triggers a new Vercel deployment automatically (see Lecture 3)',
                ],
                links: [
                    { label: 'Lecture 3 — Git & Vercel', url: '#lecture-3' },
                ],
            },
            {
                title: 'Run to 100% Completion',
                bullets: [
                    'Check off every acceptance criterion — do not skip any',
                    'Mark each sprint DONE before starting the next one',
                    'Checkpoint: all sprints done, build passes, meaningful Git history, live URL works',
                ],
            },
        ],
    },
    'lecture-7': {
        title: 'Lecture 7: Mobile App Development',
        slides: [
            {
                title: 'What Is Mobile App Development?',
                bullets: [
                    'Building apps installed on phones and tablets — not just websites in a browser',
                    'Touch-first UI, offline access, push notifications, and app store distribution',
                    'Different from responsive web: native device features, home screen icon, OS integration',
                ],
            },
            {
                title: 'Native vs Cross-Platform',
                bullets: [
                    'Native — separate codebase per OS (iOS and Android built independently)',
                    'Cross-platform — one codebase shipped to both iOS and Android',
                    'Choose based on performance needs, team skills, timeline, and budget',
                ],
            },
            {
                title: 'Native Languages',
                bullets: [
                    'iOS: Swift with SwiftUI — Apple\'s modern UI toolkit',
                    'Android: Kotlin with Jetpack Compose — Google\'s modern UI toolkit',
                    'Legacy codebases still use Objective-C (iOS) and Java (Android)',
                ],
                links: [
                    { label: 'Apple Developer', url: 'https://developer.apple.com' },
                    { label: 'Android Developers', url: 'https://developer.android.com' },
                ],
            },
            {
                title: 'Native Development — Pros & Cons',
                bullets: [
                    'Pros: best performance, full access to OS APIs, platform-native look and feel',
                    'Cons: two separate codebases or teams — slower to ship the same feature twice',
                    'Best when performance, deep OS integration, or platform polish is critical',
                ],
            },
            {
                title: 'Cross-Platform Frameworks',
                bullets: [
                    'Write once, deploy to iOS and Android from a shared codebase',
                    'Main options: React Native (JavaScript) and Flutter (Dart)',
                    'Web-wrapper hybrid: Capacitor wraps an existing web app — fast if you already have Next.js',
                ],
                links: [
                    { label: 'Capacitor', url: 'https://capacitorjs.com' },
                ],
            },
            {
                title: 'Cross-Platform — Pros & Cons',
                bullets: [
                    'Pros: one codebase, faster MVP, shared business logic across platforms',
                    'Cons: larger app size, occasional platform-specific bugs to fix',
                    'Some native APIs require plugins or platform channels',
                ],
            },
            {
                title: 'React Native',
                bullets: [
                    'JavaScript/TypeScript with React component patterns',
                    'Uses native UI components under the hood — feels close to platform defaults',
                    'Huge npm ecosystem — great if you already know React or Next.js',
                ],
                links: [
                    { label: 'React Native', url: 'https://reactnative.dev' },
                ],
            },
            {
                title: 'Flutter',
                bullets: [
                    'Dart language with a custom rendering engine (Skia)',
                    'Consistent, pixel-perfect UI on both iOS and Android',
                    'Strong tooling: flutter doctor, hot reload, rich widget library',
                ],
                links: [
                    { label: 'Flutter', url: 'https://flutter.dev' },
                ],
            },
            {
                title: 'React Native vs Flutter',
                bullets: [
                    'React Native — leverage existing React skills and npm packages',
                    'Flutter — fast dev cycles, polished UI, AlrightTech mobile default',
                    'Both publish to the App Store and Google Play',
                ],
                links: [
                    { label: 'React Native', url: 'https://reactnative.dev' },
                    { label: 'Flutter', url: 'https://flutter.dev' },
                ],
            },
            {
                title: 'Info.plist — iOS System Capabilities',
                bullets: [
                    'Info.plist is the iOS config file that declares what your app can access',
                    'Add usage-description keys for permissions — camera, location, microphone, photos',
                    'Also configures push notifications, background modes, URL schemes, and app display name',
                    'Flutter path: ios/Runner/Info.plist — plugins often add keys; you still review before App Store submit',
                ],
                links: [
                    { label: 'Apple Info.plist Keys', url: 'https://developer.apple.com/documentation/bundleresources/information_property_list' },
                ],
            },
            {
                title: 'AndroidManifest.xml — Permissions & Capabilities',
                bullets: [
                    'AndroidManifest.xml tells Android what your app needs and how it launches',
                    'Declare permissions — INTERNET, CAMERA, ACCESS_FINE_LOCATION, POST_NOTIFICATIONS',
                    'Register activities, services, deep links, and hardware features the OS must know about',
                    'Flutter path: android/app/src/main/AndroidManifest.xml — merge carefully when plugins add entries',
                ],
                links: [
                    { label: 'Android Manifest', url: 'https://developer.android.com/guide/topics/manifest/manifest-intro' },
                ],
            },
            {
                title: 'Pick Your Mobile Path',
                bullets: [
                    'Web capstone → Next.js stack (Lectures 5–6)',
                    'Native mobile capstone → Flutter + Firebase or API backend',
                    'Already have a web app? Consider Capacitor for web-to-mobile',
                    'Checkpoint: pick your stack before sprint planning',
                ],
                links: [
                    { label: 'Main Journey (Ebook)', url: '#main-journey' },
                    { label: 'Flutter', url: 'https://flutter.dev' },
                ],
            },
        ],
    },
    'lecture-8': {
        title: 'Lecture 8: Getting Started with Flutter',
        slides: [
            {
                title: 'Getting Started with Flutter',
                bullets: [
                    'Hands-on follow-up to Lecture 7 — time to build real mobile apps',
                    'Flutter uses Dart to ship one codebase to iOS and Android',
                    'Use Cursor + SDD (Lecture 6) for feature work after setup is done',
                ],
                links: [
                    { label: 'Lecture 7 — Mobile Intro', url: '#lecture-7' },
                ],
            },
            {
                title: 'Windows — Install Flutter',
                bullets: [
                    'Download the Flutter SDK from flutter.dev and extract to a folder (e.g. C:\\src\\flutter)',
                    'Add flutter\\bin to your system PATH',
                    'Run flutter doctor — install Git if prompted',
                ],
                links: [
                    { label: 'Flutter — Install', url: 'https://docs.flutter.dev/get-started/install' },
                ],
            },
            {
                title: 'Windows — Android Studio',
                bullets: [
                    'Install Android Studio — includes the Android SDK and platform tools',
                    'Open SDK Manager and install latest platform + build tools',
                    'Run flutter doctor --android-licenses and accept all licenses',
                    'Launch an emulator or connect a physical Android device',
                ],
                links: [
                    { label: 'Android Studio', url: 'https://developer.android.com/studio' },
                ],
            },
            {
                title: 'Windows — Connect Android Device',
                bullets: [
                    'Wired: enable Developer options + USB debugging → plug in → flutter devices',
                    'Wireless (Android 11+): Settings → Developer options → Wireless debugging',
                    'Pair with adb pair IP:PORT then connect with adb connect IP:PORT',
                ],
                links: [
                    { label: 'Wireless Debugging', url: 'https://developer.android.com/tools/adb#wireless-android11-debugging' },
                ],
            },
            {
                title: 'Mac — Install Flutter & Xcode',
                bullets: [
                    'Install Flutter SDK and add flutter/bin to PATH (~/.zshrc)',
                    'Install Xcode from the App Store — required for iOS builds',
                    'Run sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer',
                    'Open Xcode once; install CocoaPods (sudo gem install cocoapods) for iOS plugins',
                ],
                links: [
                    { label: 'Flutter — Install', url: 'https://docs.flutter.dev/get-started/install' },
                    { label: 'Xcode', url: 'https://developer.apple.com/xcode/' },
                ],
            },
            {
                title: 'Mac — Android Studio & Devices',
                bullets: [
                    'Install Android Studio on Mac for Android emulator and device testing',
                    'Same wired steps: USB debugging on → flutter devices',
                    'Same wireless steps: adb pair then adb connect for cable-free debugging',
                ],
                links: [
                    { label: 'Android Studio', url: 'https://developer.android.com/studio' },
                    { label: 'Wireless Debugging', url: 'https://developer.android.com/tools/adb#wireless-android11-debugging' },
                ],
            },
            {
                title: 'Mac — Connect iOS Device',
                bullets: [
                    'Plug in iPhone → tap Trust on the device',
                    'Open ios/Runner.xcworkspace in Xcode → Signing & Capabilities → select your Team',
                    'Run flutter run — pick your iPhone from the device list',
                ],
                links: [
                    { label: 'Xcode', url: 'https://developer.apple.com/xcode/' },
                ],
            },
            {
                title: 'Verify Your Setup',
                bullets: [
                    'Run flutter doctor -v — fix any red X items before coding',
                    'Run flutter devices — your phone or emulator should appear',
                    'Checkpoint: setup is green enough to start Sprint 1',
                ],
            },
            {
                title: 'Flutter Projects Use SDD',
                bullets: [
                    'Same pipeline as Lecture 6: requirements → context.md, tech.md, uiux.md → sprint.md',
                    'One Cursor Plan session per sprint — attach foundation docs, paste one sprint prompt',
                    'After each sprint: flutter analyze, test on device, git commit, git push',
                ],
                links: [
                    { label: 'Lecture 6 — SDD', url: '#lecture-6' },
                    { label: 'Agile & PromptWizard (Ebook)', url: '#agile' },
                ],
            },
            {
                title: 'Env Vars & Database',
                bullets: [
                    'Backend (Next.js on Vercel) holds DATABASE_URL — never put DB credentials in the mobile app',
                    'Flutter uses .env via flutter_dotenv: API_BASE_URL, auth keys',
                    'Add .env to .gitignore; ship .env.example with placeholder names',
                ],
                links: [
                    { label: 'Neon', url: 'https://neon.tech' },
                    { label: 'Vercel Env Vars', url: 'https://vercel.com/docs/projects/environment-variables' },
                    { label: 'flutter_dotenv', url: 'https://pub.dev/packages/flutter_dotenv' },
                ],
            },
            {
                title: 'Flutter Folder Structure',
                bullets: [
                    'lib/ — Dart UI and app logic; main.dart is the entry point',
                    'pubspec.yaml — dependencies, assets, and app metadata',
                    'android/ and ios/ — native config (AndroidManifest.xml, Info.plist)',
                    'assets/ — images and fonts; test/ — widget and unit tests',
                ],
            },
            {
                title: 'Create & Run Your App',
                bullets: [
                    'flutter create my_app → cd my_app → flutter pub get → flutter run',
                    'Hot reload: press r in terminal — instant UI updates without restart',
                    'Hot restart: R — full app restart. Quit: q',
                ],
            },
            {
                title: 'Essential Flutter Commands',
                bullets: [
                    'flutter doctor — check toolchain; flutter devices — list targets',
                    'flutter clean — clear build cache; flutter pub add <pkg> — add dependency',
                    'flutter analyze — lint check; flutter test — run tests',
                ],
            },
            {
                title: 'Build an APK (Android)',
                bullets: [
                    'flutter build apk --release',
                    'Output: build/app/outputs/flutter-apk/app-release.apk — share for testing',
                    'Google Play Store upload uses flutter build appbundle instead',
                ],
                links: [
                    { label: 'Flutter Android Deploy', url: 'https://docs.flutter.dev/deployment/android' },
                ],
            },
            {
                title: 'Build an IPA (iOS)',
                bullets: [
                    'Requires Mac + Xcode + Apple Developer signing configured',
                    'Set up signing in Xcode, then run flutter build ipa',
                    'Output in build/ios/ipa/ — distribute via TestFlight or App Store Connect',
                ],
                links: [
                    { label: 'Flutter iOS Deploy', url: 'https://docs.flutter.dev/deployment/ios' },
                ],
            },
            {
                title: 'Flutter Dev Checklist',
                bullets: [
                    'flutter doctor passes; app runs on a real device or emulator',
                    'SDD foundation docs and sprint.md in the repo',
                    '.env.example committed; release APK or IPA built once before capstone demo',
                ],
            },
        ],
    },
    'lecture-9': {
        title: 'Lecture 9: Publishing to Play Store',
        slides: [
            {
                title: 'Publishing Your Android App',
                bullets: [
                    'Capstone finish for Android — from Flutter build to a live Play Store listing',
                    'Follows Lecture 8 setup and SDD delivery of your app features',
                    'This lecture covers console setup, signing, monetization, and release',
                ],
                links: [
                    { label: 'Lecture 8 — Flutter Setup', url: '#lecture-8' },
                ],
            },
            {
                title: 'What Is Google Play Store?',
                bullets: [
                    'Google\'s official marketplace for Android apps',
                    'Users discover, install, update, and review apps on their devices',
                    'Developers publish and manage apps through Google Play Console',
                ],
            },
            {
                title: 'How the Play Store Works',
                bullets: [
                    'Create a developer account ($25 one-time fee)',
                    'Upload a signed AAB and complete store listing + compliance forms',
                    'Google reviews your app, then it goes live on a release track',
                ],
                links: [
                    { label: 'Google Play Console', url: 'https://play.google.com/console' },
                ],
            },
            {
                title: 'Google Play Console Overview',
                bullets: [
                    'Dashboard: app bundle explorer, crash reports, and user feedback',
                    'Release tracks: internal → closed → open → production',
                    'Sections: store listing, policy status, monetization, and testing',
                ],
                links: [
                    { label: 'Google Play Console', url: 'https://play.google.com/console' },
                ],
            },
            {
                title: 'Before You Publish',
                bullets: [
                    'App tested on a real Android device — no critical bugs',
                    'flutter analyze passes; privacy policy URL hosted and ready',
                    'Package name is final (com.company.app) — cannot change after first upload',
                ],
            },
            {
                title: 'Store Listing Assets',
                bullets: [
                    'App name, short description (80 chars), and full description (4000 chars)',
                    'Category, contact email, and privacy policy link',
                    'Prepare all graphics before starting the listing form',
                ],
                links: [
                    { label: 'Play Store Listing Guide', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
                ],
            },
            {
                title: 'Asset Dimensions',
                bullets: [
                    'App icon: 512×512 PNG (32-bit, no transparency)',
                    'Feature graphic: 1024×500 PNG or JPEG',
                    'Phone screenshots: minimum 2, aspect ratio 16:9 or 9:16 (320px–3840px)',
                    'Optional: 7" tablet screenshots, promo video via YouTube URL',
                ],
                links: [
                    { label: 'Play Store Listing Guide', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
                ],
            },
            {
                title: 'Screenshots & Branding Tips',
                bullets: [
                    'Use real app UI — no misleading or stock graphics',
                    'Match brand colors and typography from uiux.md',
                    'Show core flows: login, home screen, and your key feature',
                ],
            },
            {
                title: 'Initial Console Forms',
                bullets: [
                    'Create app → set default language → choose app or game type → free or paid',
                    'Complete App content: ads declaration, target audience, content declarations',
                    'Declare if app is a news app or has COVID-related features (if applicable)',
                ],
            },
            {
                title: 'Content Rating & Data Safety',
                bullets: [
                    'Fill the IARC content rating questionnaire → receive PEGI/ESRB age rating',
                    'Data safety form: declare what data you collect, share, and encrypt',
                    'Answers must match actual app behavior — mismatches cause rejection',
                ],
            },
            {
                title: 'Create an Upload Keystore',
                bullets: [
                    'keytool -genkey -v -keystore upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload',
                    'Store the .jks file and passwords securely — never commit to git',
                    'Losing the keystore blocks all future app updates on Play Store',
                ],
                links: [
                    { label: 'Flutter Android Signing', url: 'https://docs.flutter.dev/deployment/android#signing-the-app' },
                ],
            },
            {
                title: 'Configure Flutter Signing',
                bullets: [
                    'Create android/key.properties (add to .gitignore)',
                    'Set storeFile, storePassword, keyAlias, keyPassword in key.properties',
                    'Reference signingConfigs in android/app/build.gradle for release builds',
                ],
                links: [
                    { label: 'Flutter Android Signing', url: 'https://docs.flutter.dev/deployment/android#signing-the-app' },
                ],
            },
            {
                title: 'Build a Signed AAB',
                bullets: [
                    'flutter build appbundle --release',
                    'Output: build/app/outputs/bundle/release/app-release.aab',
                    'Google Play requires AAB for new apps — signing uses your upload keystore at build time',
                ],
                links: [
                    { label: 'Flutter Android Deploy', url: 'https://docs.flutter.dev/deployment/android' },
                ],
            },
            {
                title: 'Upload & Release Tracks',
                bullets: [
                    'Play Console → Release → Testing → Internal testing first',
                    'Add tester emails; verify install before promoting to production',
                    'Bump version in pubspec.yaml (version: 1.0.0+2) for each new upload',
                ],
                links: [
                    { label: 'Google Play Console', url: 'https://play.google.com/console' },
                ],
            },
            {
                title: 'Add Ads with AdMob',
                bullets: [
                    'Create an AdMob account and link it to your Play app',
                    'Add google_mobile_ads package; set APPLICATION_ID in AndroidManifest.xml',
                    'Implement banner or interstitial ads; declare "Contains ads" in Play Console',
                ],
                links: [
                    { label: 'AdMob', url: 'https://admob.google.com' },
                    { label: 'google_mobile_ads', url: 'https://pub.dev/packages/google_mobile_ads' },
                ],
            },
            {
                title: 'Subscriptions on Google Play',
                bullets: [
                    'Play Console → Monetize → Products → Subscriptions',
                    'Create subscription products with base plans and optional offers',
                    'App uses Google Play Billing — Flutter: in_app_purchase package',
                ],
                links: [
                    { label: 'Google Play Billing', url: 'https://developer.android.com/google/play/billing' },
                ],
            },
            {
                title: 'Implement Subscriptions in Flutter',
                bullets: [
                    'Fetch subscription products by ID from Play Console',
                    'Launch purchase flow and listen for purchase update events',
                    'Verify purchases server-side in production; handle restore and cancellation',
                ],
                links: [
                    { label: 'in_app_purchase', url: 'https://pub.dev/packages/in_app_purchase' },
                    { label: 'Google Play Billing', url: 'https://developer.android.com/google/play/billing' },
                ],
            },
            {
                title: 'Play Store Launch Checklist',
                bullets: [
                    'Signed AAB uploaded; store listing and graphics complete',
                    'Content rating and data safety forms submitted',
                    'Tested on internal track; ads and subscriptions declared',
                    'Production release submitted — checkpoint: app is live on Play Store',
                ],
            },
        ],
    },
    'lecture-10': {
        title: 'Lecture 10: Publishing to App Store',
        slides: [
            {
                title: 'Publishing Your iOS App',
                bullets: [
                    'Capstone finish for iOS — from Flutter build to a live App Store listing',
                    'Follows Lecture 8 Mac/Xcode setup and SDD delivery of your app features',
                    'Android parallel: see Lecture 9 for Google Play publishing',
                ],
                links: [
                    { label: 'Lecture 8 — Flutter Setup', url: '#lecture-8' },
                    { label: 'Lecture 9 — Play Store', url: '#lecture-9' },
                ],
            },
            {
                title: 'What Is the App Store?',
                bullets: [
                    'Apple\'s official marketplace for iPhone and iPad apps',
                    'Users discover, install, update, and review apps on their devices',
                    'Developers publish and manage apps through App Store Connect',
                ],
            },
            {
                title: 'How the App Store Works',
                bullets: [
                    'Join the Apple Developer Program ($99/year)',
                    'Build a signed IPA, upload it, and complete store listing + compliance forms',
                    'Apple reviews your app, then it goes live on the App Store',
                ],
                links: [
                    { label: 'Apple Developer Program', url: 'https://developer.apple.com/programs/' },
                    { label: 'App Store Connect', url: 'https://appstoreconnect.apple.com' },
                ],
            },
            {
                title: 'App Store Connect Overview',
                bullets: [
                    'My Apps — create and manage app records and builds',
                    'TestFlight — beta testing before public release',
                    'Sign the Paid Applications Agreement before paid apps or subscriptions',
                ],
                links: [
                    { label: 'App Store Connect', url: 'https://appstoreconnect.apple.com' },
                ],
            },
            {
                title: 'Before You Publish',
                bullets: [
                    'Mac + Xcode required; app tested on a real iPhone',
                    'flutter analyze passes; privacy policy URL hosted and ready',
                    'Bundle ID is final (com.company.app) — register in Certificates, Identifiers & Profiles',
                ],
                links: [
                    { label: 'Apple Developer', url: 'https://developer.apple.com/programs/' },
                ],
            },
            {
                title: 'Store Listing Assets',
                bullets: [
                    'App name, subtitle (30 chars), description, and keywords',
                    'Support URL, marketing URL (optional), and privacy policy URL',
                    'Prepare all graphics before starting the listing form',
                ],
            },
            {
                title: 'Asset Dimensions',
                bullets: [
                    'App icon: 1024×1024 PNG — no transparency, no rounded corners',
                    'iPhone 6.7" screenshots: 1290×2796 portrait (minimum required set)',
                    'iPad 12.9" if universal app: 2048×2732; optional App Preview video',
                ],
                links: [
                    { label: 'Screenshot Specifications', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
                ],
            },
            {
                title: 'Screenshots & Branding Tips',
                bullets: [
                    'Use real app UI — no misleading or stock graphics',
                    'Match brand colors and typography from uiux.md',
                    'Show core flows: login, home screen, and your key feature',
                ],
            },
            {
                title: 'Initial App Store Connect Forms',
                bullets: [
                    'Register Bundle ID in Apple Developer portal',
                    'Create app record: SKU, primary language, and platform (iOS)',
                    'Set category, complete age rating questionnaire, and pricing (free or paid)',
                ],
            },
            {
                title: 'Age Rating & App Privacy',
                bullets: [
                    'Complete the age rating questionnaire in App Store Connect',
                    'App Privacy labels: declare data collected — contact, usage, identifiers',
                    'Answers must match actual app behavior — mismatches cause rejection',
                ],
            },
            {
                title: 'Code Signing & Certificates',
                bullets: [
                    'Apple Developer portal: create Distribution certificate + App Store provisioning profile',
                    'Xcode → Signing & Capabilities → select Team and enable automatic signing',
                    'Provisioning profile must match your Bundle ID for release builds',
                ],
                links: [
                    { label: 'Apple Developer', url: 'https://developer.apple.com/programs/' },
                ],
            },
            {
                title: 'Build an IPA with Flutter',
                bullets: [
                    'Configure signing in Xcode first, then run flutter build ipa',
                    'Output in build/ios/ipa/',
                    'Bump version in pubspec.yaml (version: 1.0.0+1) for each new upload',
                ],
                links: [
                    { label: 'Flutter iOS Deploy', url: 'https://docs.flutter.dev/deployment/ios' },
                ],
            },
            {
                title: 'Upload with Transporter',
                bullets: [
                    'Install Transporter from the Mac App Store',
                    'Sign in with your Apple ID → drag the .ipa file → Deliver',
                    'Alternative: Xcode → Window → Organizer → Distribute App',
                ],
                links: [
                    { label: 'Transporter', url: 'https://apps.apple.com/app/transporter/id1450874784' },
                ],
            },
            {
                title: 'TestFlight Beta Testing',
                bullets: [
                    'App Store Connect → TestFlight → add testers',
                    'Internal testers (your team) — instant access, no review',
                    'External testers — requires brief Beta App Review; fix bugs before App Store submission',
                ],
                links: [
                    { label: 'TestFlight', url: 'https://developer.apple.com/testflight/' },
                ],
            },
            {
                title: 'Submit for App Store Review',
                bullets: [
                    'Select build in App Store Connect → add release notes',
                    'Answer export compliance and content rights questions',
                    'Submit for Review — typical wait is 24–48 hours',
                ],
                links: [
                    { label: 'App Store Connect', url: 'https://appstoreconnect.apple.com' },
                ],
            },
            {
                title: 'Add Ads with AdMob (iOS)',
                bullets: [
                    'Create AdMob account and link to your App Store app',
                    'Add google_mobile_ads package; set GADApplicationIdentifier in Info.plist',
                    'iOS 14+: request App Tracking Transparency for personalized ads',
                ],
                links: [
                    { label: 'AdMob iOS Setup', url: 'https://developers.google.com/admob/ios/quick-start' },
                    { label: 'google_mobile_ads', url: 'https://pub.dev/packages/google_mobile_ads' },
                ],
            },
            {
                title: 'Subscriptions on the App Store',
                bullets: [
                    'App Store Connect → Subscriptions → create subscription group + products',
                    'Flutter in_app_purchase package uses StoreKit under the hood',
                    'Verify receipts server-side in production; handle restore and cancellation',
                ],
                links: [
                    { label: 'In-App Purchase', url: 'https://developer.apple.com/in-app-purchase/' },
                    { label: 'in_app_purchase', url: 'https://pub.dev/packages/in_app_purchase' },
                ],
            },
            {
                title: 'App Store Launch Checklist',
                bullets: [
                    'IPA uploaded; store listing and screenshots complete',
                    'Age rating and App Privacy forms submitted',
                    'TestFlight tested; ads and subscriptions declared',
                    'Submitted and approved — checkpoint: app is live on the App Store',
                ],
            },
        ],
    },
};
