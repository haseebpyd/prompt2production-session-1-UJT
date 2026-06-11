# PromptWizard — Project Context

## Executive Summary

PromptWizard is an internal Alrighttech platform that turns client requirement documents into standardized markdown artifacts and tracks intern delivery progress. It replaces ad-hoc copy-paste workflows with a guided pipeline: upload requirements → generate `context.md`, `tech.md`, `uiux.md`, and `sprint.md` → execute sprints in Cursor using embedded sprint prompts → mark progress on a dashboard. A built-in knowledge base covers mobile conversion, notifications, OAuth, store publishing, subscriptions, and deployment.

## Goals

1. **Standardize onboarding** — Every intern follows the same Cursor + sprint workflow.
2. **Reduce setup time** — Auto-generate foundation and sprint docs from raw requirements.
3. **Improve visibility** — Mentors see pipeline and per-sprint status without asking for updates.
4. **Centralize know-how** — KB articles for Capacitor, FCM, IAP, Vercel, EC2, Railway, etc.

## User Roles

| Role | Permissions |
|------|-------------|
| **Intern** | Create own projects, upload docs, run generation, download artifacts, update sprint progress, read KB |
| **Admin / Mentor** | All intern capabilities plus view all projects, audit generation jobs, monitor stuck sprints |

## Features

### Requirement intake

- Drag-and-drop or file picker for PDF, DOCX, MD, TXT (max 10 MB)
- Paste requirements text directly
- Project metadata: title, type (web, mobile, full-stack, website), optional stack notes

### Artifact generation pipeline

1. **context.md** — Executive summary, goals, roles, features, scope
2. **tech.md** — Stack (default Next.js + PostgreSQL + Tailwind), API, database, auth, deployment
3. **uiux.md** — Tailwind palette (teal/sky by default), components, layout, accessibility
4. **sprint.md** — Phases and sprints with full-stack scope; each sprint includes a Cursor execution prompt block

### Project dashboard

- Pipeline stepper: Upload → Context → Tech → UI/UX → Sprint doc → Build sprints
- Artifact preview, copy, single download, ZIP export
- Sprint checklist parsed from `sprint.md` with status tracking

### Knowledge base

- Nine curated guides with search
- Linked from project UI for common implementation tasks

### Admin

- Cross-intern project list and completion metrics
- Generation job audit (success/failure, tokens)

## Scope

### In scope

- Standalone Next.js application with PostgreSQL
- OpenAI-powered artifact generation
- Email/password auth with role-based access

### Out of scope (v1)

- Git integration, Cursor plugin, billing, multi-org SaaS

## Assumptions

- Company default stack: Next.js App Router, PostgreSQL, Tailwind CSS
- Mobile: Flutter preferred for native; Capacitor for web-to-mobile conversion
- Interns use Cursor Plan mode with foundation docs + one sprint prompt at a time

## Risks

| Risk | Mitigation |
|------|------------|
| AI output quality varies | Section validators, retry, mentor review |
| Large requirement docs | Truncation + summary pre-pass |
| API cost | Rate limits, `gpt-4o-mini` default |

## Open Questions

- Google OAuth enablement per environment (optional v1)
- SSO integration with DRS-Tool (future)
