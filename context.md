# Project Context

## What We're Building

A **digital book** — an interactive, chapter-based handbook for **AlrightTech intern training**.

**Title:** From Prompt to Production: Building Full Stack Apps with AI  
**Format:** Self-paced digital book (content flows chapter by chapter — no day/week schedule)  
**Author / Trainer:** Mr. Haseeb — Full Stack AI Engineer & COO, AlrightTech

---

## Mission (COO Task)

Train interns to a level where they can **independently build full stack web and mobile applications using AI** — understand AI, engineer prompts, run agile sprints via **PromptWizard**, and ship production-quality software with **Cursor / Antigravity**.

---

## Audience

| Trait | Detail |
|-------|--------|
| Level | BS Computer Science (in-progress or graduated) |
| Org | AlrightTech interns |
| Starting point | Mixed — some fresh grads, some mid-degree |
| End state | Can scaffold, sprint-plan, build, version, and deploy real apps with AI-native tools |

---

## Learning Journey

```
Intro to AI → LLMs → Prompt Engineering → One-Page App (Web LLM)
    → Agile + PromptWizard → Cursor / Antigravity → Full Stack Capstone → Production
```

---

## Repository Structure

```
prompt2production-session-1-UJT/
├── index.html              # Shell: nav + chapter loader
├── context.md              # This file — program vision
├── chapters/               # One HTML file per chapter
│   ├── home.html
│   ├── 01-introduction-to-ai.html
│   ├── 02-understanding-llms.html
│   ├── 03-prompt-engineering.html       # Hub: paradigms, coach, CoT, builder
│   ├── 03-context-engineering.html      # #prompting-context
│   ├── 03-image-generation.html         # #prompting-images
│   ├── 03-ux-design.html                # #prompting-ux
│   ├── 03-ui-development.html           # #prompting-ui
│   ├── 03-video-generation.html         # #prompting-video
│   ├── 03-custom-gpts-gems.html         # #prompting-gpts
│   ├── 04-one-page-app.html
│   ├── 05-agile-sprints.html      # PromptWizard methodology
│   ├── 06-cursor-antigravity.html
│   ├── 07-main-journey.html
│   ├── 08-responsible-ai.html
│   ├── 09-cheat-sheet.html
│   ├── 10-glossary.html
│   └── 11-frontend-roadmap.html
├── assets/
│   ├── css/styles.css
│   └── js/app.js           # Fetch chapters, hash routing, interactions
└── sprint-templates/       # From PromptWizard (parent repo)
    ├── context.md
    ├── tech.md
    ├── uiux.md
    ├── sprints.md
    └── README.md
```

**Run locally:** `python3 -m http.server 8000` → http://localhost:8000

---

## Digital Book Chapters

| # | File | Purpose |
|---|------|---------|
| — | `home.html` | Program intro, learning path, repo layout |
| 1 | `01-introduction-to-ai.html` | AI evolution, GenAI, agents, neural networks |
| 2 | `02-understanding-llms.html` | Tokens, context, platforms, limitations |
| 3 | `03-prompt-engineering.html` | **Hub:** paradigms, Prompt Coach, CoT, ReAct, S-T-C-C-F-E builder, specialized topics grid |
| 3a | `03-context-engineering.html` | `#prompting-context` — context vs prompt, agent components, Anthropic checklist |
| 3b | `03-image-generation.html` | `#prompting-images` — Gemini image prompts, branding portrait example |
| 3c | `03-ux-design.html` | `#prompting-ux` — UXPilot, one-shot vs step-by-step, dashboard brief |
| 3d | `03-ui-development.html` | `#prompting-ui` — Lovable workflow, copy-ready prompts (accordion) |
| 3e | `03-video-generation.html` | `#prompting-video` — Veo 3, narrative/camera/audio, corporate clip example |
| 3f | `03-custom-gpts-gems.html` | `#prompting-gpts` — Custom GPT + Gemini Gem step-by-step, copy-ready instructions |
| 4 | `04-one-page-app.html` | First build via ChatGPT / Claude / Gemini |
| 5 | `05-agile-sprints.html` | Agile + **PromptWizard** sprint system |
| 6 | `06-cursor-antigravity.html` | AI-native IDEs |
| 7 | `07-main-journey.html` | Full stack capstone, Git, deploy |
| 8–10 | `08`–`10` | Responsible AI, cheat sheet, glossary |
| 11 | `11-frontend-roadmap.html` | Complete frontend roadmap (beginner to pro) |

---

## PromptWizard — Sprint-Driven Development

**Source doc:** `context copy.md` (canonical PromptWizard context)  
**App repo:** `../promptwizard` · **Templates:** `sprint-templates/`  
**Ebook chapter:** `chapters/05-agile-sprints.html` (§5.5–5.15)

### Executive summary

PromptWizard is an internal AlrightTech platform that turns client requirement documents into standardized markdown artifacts and tracks intern delivery progress. It replaces ad-hoc copy-paste workflows with:

`upload requirements → generate context.md, tech.md, uiux.md, sprint.md → execute sprints in Cursor → mark progress on dashboard`

Built-in knowledge base covers Capacitor, FCM, OAuth, store publishing, subscriptions, and deployment.

### Platform goals

1. **Standardize onboarding** — same Cursor + sprint workflow for every intern
2. **Reduce setup time** — auto-generate foundation and sprint docs from raw requirements
3. **Improve visibility** — mentors see pipeline and per-sprint status without asking
4. **Centralize know-how** — KB for Capacitor, FCM, IAP, Vercel, EC2, Railway, etc.

### User roles

| Role | Permissions |
|------|-------------|
| **Intern** | Own projects, upload, generate, download artifacts, update sprint progress, read KB |
| **Admin / Mentor** | All intern capabilities + all projects, audit generation jobs, monitor stuck sprints |

### Features (in the app)

- **Requirement intake:** PDF, DOCX, MD, TXT (10 MB), paste text, project type + stack notes
- **Artifact pipeline:** context → tech → uiux → sprint (AI-generated, validated, ordered)
- **Dashboard:** stepper Upload → Context → Tech → UI/UX → Sprint → Build; preview, copy, ZIP
- **Sprint checklist:** parsed from sprint.md, status NOT_STARTED | IN_PROGRESS | DONE
- **Knowledge base:** 9 curated guides with search
- **Admin:** cross-intern metrics, failed jobs, stuck sprints (>7 days)

### Workflow for interns

1. **Upload** client requirements (PDF, DOCX, MD, TXT)
2. **Generate** four foundation markdown files:
   - `context.md` — goals, roles, features, scope, risks
   - `tech.md` — Next.js, PostgreSQL, Prisma, Auth.js, Tailwind, deployment
   - `uiux.md` — AlrightTech palette (navy/cyan/pink), components, a11y
   - `sprint.md` — phased sprints with Cursor **Sprint Execution Prompt** blocks
3. **Execute** one sprint at a time in Cursor Plan mode (attach foundation docs)
4. **Track** progress on dashboard; mentors see pipeline status

### Pipeline steps

`Upload → Context → Tech → UI/UX → Sprint doc → Build`

### Sprint file anatomy (each sprint)

- Goals, Tasks, Acceptance Criteria (checkboxes)
- Stack Touchpoints: **UI** / **API** / **DB**
- Dependencies (prior sprints)
- **Sprint Execution Prompt** — copy into Cursor Plan mode

### Default AlrightTech stack (from tech.md)

| Layer | Choice |
|-------|--------|
| Frontend | Next.js 15 App Router, React 19, Tailwind CSS 4 |
| Database | PostgreSQL + Prisma |
| Auth | Auth.js (credentials + optional Google OAuth) |
| AI | OpenAI / Anthropic for artifact generation |
| Deploy | Vercel + Neon/Railway Postgres |

### UI/UX defaults (from uiux.md)

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#111424` | Sidebar, inputs |
| Cyan (brand) | `#00A7E1` | CTAs, links, active states |
| Pink (accent) | `#EC66B7` | Sign up, pipeline highlights |
| Surface | `#1a2038` | Cards, panels |

### Reference sprint phases (PromptWizard v1)

| Phase | Theme | Example sprints |
|-------|-------|-----------------|
| 1 | Docs & scaffold | SRS, Prisma schema, seed |
| 2 | Auth & projects | Login, CRUD, file upload |
| 3 | AI pipeline | Generate 4 artifacts, ZIP export |
| 4 | Tracking & KB | Sprint checklist, admin dashboard |
| 5 | Hardening & deploy | Security, OAuth, Vercel smoke test |

Full 14-sprint plan: `sprint-templates/sprints.md`

### Assumptions & risks

- Default stack: Next.js App Router, PostgreSQL, Tailwind; mobile via Flutter or Capacitor
- Interns use Cursor **Plan mode** + foundation docs + **one sprint prompt at a time**
- Out of scope v1: Git integration in app, Cursor plugin, billing
- Risks: AI output quality (validators + retry), large docs (truncation), API cost (10 jobs/hour limit)

### Ready-made prompts (ebook §5.15)

Chapter 5 includes copy-ready Sprint Execution Prompts for: scaffold, auth, CRUD, upload, AI artifacts, sprint tracking, deploy, generic capstone, and generate-sprint.md. Full 14-sprint plan in `sprint-templates/sprints.md`.

### How interns execute (Cursor)

1. Complete foundation docs (PromptWizard or manual from templates)
2. Open **Cursor Plan mode**
3. Attach `@context.md` `@tech.md` `@uiux.md`
4. Paste **one** Sprint Execution Prompt from sprint.md
5. Review plan → apply → test against acceptance criteria
6. `git commit -m "feat: sprint X.Y description"`
7. Mark sprint done → next sprint

---

## Key Concepts

- **6-Step Prompt Framework:** Role → Task → Context → Constraints → Format → Examples
- **Four foundation files:** context → tech → uiux → sprint (order matters for AI generation)
- **One sprint per Cursor session** — never paste entire sprint.md at once
- **Agent Loop:** Perceive → Reason/Plan → Act/Execute
- **Dev loop:** Requirements → Docs → Sprint prompt → Build → Git → Deploy

---

## Status

- Multi-file chapter structure implemented
- Chapter 5 integrated with PromptWizard methodology
- `sprint-templates/` populated from PromptWizard repo
- Image assets still missing (`image.png`, etc. in chapter 1)
- `requirements.md` legacy — superseded by this structure

---

## Content To Add Next

- Deeper chapter content per intern feedback
- Capstone project brief with sample sprint.md for a client app
- Link/embed PromptWizard app URL when deployed
- Missing diagram images for chapter 1
