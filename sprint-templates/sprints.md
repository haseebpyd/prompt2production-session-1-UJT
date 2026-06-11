# PromptWizard — Delivery Sprints

**Product:** PromptWizard v1.0  
**Source:** [docs/SRS.md](docs/SRS.md)  
**Foundation docs:** [context.md](context.md), [tech.md](tech.md), [uiux.md](uiux.md)  
**Stack:** Next.js App Router, PostgreSQL, Prisma, Auth.js, Tailwind (teal/sky), OpenAI

Each sprint is independently deliverable across UI, API/server actions, and database. Execute in Cursor **Plan mode** using the sprint execution prompt; attach foundation docs for every sprint after Phase 1.

---

## Phase 1: Discovery & Foundation

Establish requirements, data model, and project scaffolding before feature work.

### Sprint 1.1: SRS & Foundation Documentation

**SRS mapping:** §1–2, §6 (data model draft), Appendix A  
**Goals**

- Lock v1 scope, roles, and success criteria per SRS.
- Produce `context.md`, `tech.md`, and `uiux.md` as canonical inputs for all later sprints.

**Tasks**

- Write `docs/SRS.md` with functional/non-functional requirements, API list, KB catalog, and acceptance criteria.
- Author `context.md` (executive summary, roles, features, scope, risks).
- Author `tech.md` (Next.js, Prisma, Auth.js, OpenAI, deployment targets).
- Author `uiux.md` (teal/sky palette, stepper, dashboard, KB layout, accessibility).

**Acceptance Criteria**

- [ ] SRS covers all FR-* and NFR-* IDs for v1.
- [ ] Foundation docs align with each other and SRS scope (no Git plugin, no billing in v1).
- [ ] Appendix A routes listed in SRS exist in implementation plan.

**Stack Touchpoints**

- **UI:** N/A (documentation)
- **API:** N/A
- **DB:** Entity diagram in SRS matches planned Prisma models

**Dependencies**

- None (first sprint).

**Sprint Execution Prompt**

```text
Read docs/SRS.md, context.md, tech.md, and uiux.md for PromptWizard.

Verify the SRS is complete for v1: auth, projects, parsing, AI pipeline, artifacts export, sprint tracking, KB, admin dashboard. Cross-check foundation docs for consistency.

If gaps exist, update only the doc files—do not change application code in this sprint.
```

---

### Sprint 1.2: Application Scaffold & Database Schema

**SRS mapping:** §6, §7 (skeleton), §11  
**Goals**

- Bootstrap Next.js app with Tailwind theme and Prisma schema for all v1 entities.
- Enable local dev with PostgreSQL migrations and seed users.

**Tasks**

- Initialize Next.js (App Router, TypeScript, `src/` layout).
- Define Prisma schema: `User`, `Project`, `Artifact`, `GenerationJob`, `SprintProgress` with enums from SRS §6.1.
- Add Prisma PostgreSQL adapter, `src/lib/db.ts`, initial migration, `migration_lock.toml`.
- Configure `.env.example`, `README.md`, `docs/DEPLOY.md` skeleton.
- Seed script: admin + employee (intern) users with bcrypt hashes.

**Acceptance Criteria**

- [ ] `npx prisma migrate deploy` applies cleanly on empty Postgres.
- [ ] `npm run db:seed` creates admin and employee accounts.
- [ ] `npm run build` succeeds with `DATABASE_URL` and `AUTH_SECRET` set.
- [ ] Teal/sky tokens applied in `globals.css` per `uiux.md`.

**Stack Touchpoints**

- **UI:** Root layout, landing `/`, placeholder dashboard shell
- **API:** N/A
- **DB:** All tables, indexes, FKs per SRS ER diagram

**Dependencies**

- Sprint 1.1 (foundation docs and SRS).

**Sprint Execution Prompt**

```text
Using context.md, tech.md, uiux.md, and docs/SRS.md §6:

Scaffold PromptWizard: Next.js App Router, Tailwind (teal/sky), Prisma 7 + PostgreSQL adapter, full schema for User/Project/Artifact/GenerationJob/SprintProgress. Add migration, seed (admin@alrighttech.com + employee@alrighttech.com), .env.example, README quick start, docs/DEPLOY.md.

Do not implement feature pages yet—only schema, db client, layout shell, and build passing.
```

---

## Phase 2: Authentication & Project Core

Intern and admin can sign in and manage projects with requirements intake.

### Sprint 2.1: Authentication & RBAC

**SRS mapping:** FR-AUTH-01–05, NFR-07, §10  
**Goals**

- Email/password login and registration for interns.
- JWT sessions with `ADMIN` | `INTERN` roles; middleware protects routes.

**Tasks**

- Auth.js credentials provider, `src/lib/auth.ts`, `auth.config.ts`, middleware matcher.
- `/login` page: sign-in + register forms (client handlers for errors).
- `requireUser()` / `requireAdmin()` helpers.
- Restrict `/projects`, `/kb`, `/admin` per SRS §10 and Appendix A.

**Acceptance Criteria**

- [ ] Intern can register and sign in (FR-AUTH-01).
- [ ] Admin seed user reaches `/admin`; intern cannot (FR-AUTH-03–05).
- [ ] Passwords stored as bcrypt hashes (NFR-07).
- [ ] Unauthenticated users redirect to `/login` for protected routes.

**Stack Touchpoints**

- **UI:** `/login`, home redirect when authenticated
- **API:** `registerAction`, `loginAction`, `/api/auth/[...nextauth]`
- **DB:** `User` role and passwordHash

**Dependencies**

- Sprint 1.2.

**Sprint Execution Prompt**

```text
Implement Auth.js (credentials) per docs/SRS.md FR-AUTH-* and tech.md.

Deliver: login/register UI (uiux.md), JWT sessions with role, middleware for /projects /kb /admin, server helpers requireUser/requireAdmin. Use existing Prisma User model and seed accounts.

Out of scope this sprint: Google OAuth (FR-AUTH-02 optional).
```

---

### Sprint 2.2: Projects CRUD & Dashboard List

**SRS mapping:** FR-PROJ-01–04, FR-PROJ-03, Appendix A `/projects`  
**Goals**

- Interns create projects and see pipeline status on a dashboard.
- Project metadata: title, type, stack notes, requirements text.

**Tasks**

- Server action `createProject` with Zod validation (min 50 chars requirements).
- `/projects` list page with project cards and `PipelineStepper` component.
- `/projects/new` form: title, projectType, stackNotes, requirements textarea.
- `deleteProject` (owner or admin).
- Dashboard layout: sidebar (Projects, KB, Admin link for role).

**Acceptance Criteria**

- [ ] FR-PROJ-01: Create project with type and stack notes.
- [ ] FR-PROJ-03: List shows own projects only for intern.
- [ ] FR-PROJ-04: Delete works for owner; admin can delete any.
- [ ] Pipeline stepper shows DRAFT on new project.

**Stack Touchpoints**

- **UI:** `/projects`, `/projects/new`, sidebar
- **API:** `createProjectAction`, `deleteProjectAction`
- **DB:** `Project` rows linked to `userId`

**Dependencies**

- Sprint 2.1.

**Sprint Execution Prompt**

```text
Build project management per SRS FR-PROJ-01–04.

Implement: projects list with pipeline stepper (uiux.md), new project page, create/delete server actions with ownership checks. Dashboard shell with sidebar navigation.

Requirements text is pasted on create; file upload comes next sprint.
```

---

### Sprint 2.3: Document Upload & Parsing

**SRS mapping:** FR-PARSE-01–04, FR-PROJ-02, NFR (10 MB cap)  
**Goals**

- Upload PDF, DOCX, MD, TXT; extract text into project requirements.
- Validate size and MIME; surface errors in UI.

**Tasks**

- `src/lib/parsers/document.ts`: mammoth (DOCX), pdf-parse v2 (PDF), plain text.
- `POST /api/upload` with session auth and 10 MB limit.
- `FileDropzone` on new project page; populate textarea + `sourceFilename`.
- Store `requirementsText` and filename on `Project`.

**Acceptance Criteria**

- [ ] FR-PARSE-01: All four formats extract readable text.
- [ ] FR-PARSE-02: Reject >10 MB and unsupported types with clear errors.
- [ ] FR-PARSE-03–04: Text persisted; filename shown on project detail.
- [ ] User story #1 (intern uploads PDF) satisfied end-to-end.

**Stack Touchpoints**

- **UI:** Dropzone on `/projects/new`, error alerts
- **API:** `/api/upload`
- **DB:** `requirementsText`, `sourceFilename` on `Project`

**Dependencies**

- Sprint 2.2.

**Sprint Execution Prompt**

```text
Implement document intake per SRS FR-PARSE-* and FR-PROJ-02.

Add parser library (PDF/DOCX/MD/TXT), authenticated upload API, drag-and-drop on new project form. Wire extracted text into createProject flow. Enforce 10MB and MIME validation.
```

---

## Phase 3: AI Pipeline & Artifacts

Generate four markdown artifacts and export them for Cursor workflows.

### Sprint 3.1: OpenAI Client & Generation Jobs Audit

**SRS mapping:** FR-AI-06–08, §8, NFR-02  
**Goals**

- Central OpenAI client and job records for every generation attempt.
- Rate limit: 10 successful/running jobs per user per hour.

**Tasks**

- `src/lib/ai/openai.ts`, env: `OPENAI_API_KEY`, `OPENAI_MODEL`, `OPENAI_MAX_TOKENS`.
- `GenerationJob` create/update: PENDING → RUNNING → SUCCESS | FAILED.
- `checkGenerationRateLimit` in `src/lib/ai/rate-limit.ts`.
- Display last 5 jobs on project detail (errors truncated).

**Acceptance Criteria**

- [ ] FR-AI-07: Every generation writes a job row with tokens and error.
- [ ] FR-AI-08: 11th request within hour returns user-visible rate limit message.
- [ ] Missing API key fails gracefully with clear error (no crash).

**Stack Touchpoints**

- **UI:** Error/rate-limit messages on generate actions
- **API:** Shared by `generateArtifactStep`
- **DB:** `GenerationJob` table

**Dependencies**

- Sprint 2.3 (projects with requirements text).

**Sprint Execution Prompt**

```text
Implement OpenAI integration foundation per SRS §8 and FR-AI-06–08.

Add chat completion client, generation job audit trail, hourly rate limit per user. Prepare templates module stub; do not wire all four artifact steps yet—prove one dry-run or CONTEXT-only path with job logging.
```

---

### Sprint 3.2: Context & Tech Artifact Generation

**SRS mapping:** FR-AI-01–02, FR-AI-05, §8.2  
**Goals**

- Generate and store `context.md` and `tech.md` with section validators and retry.

**Tasks**

- Prompt templates for CONTEXT and TECH in `src/lib/ai/templates.ts`.
- Validators for required H2 keywords in `validators.ts`.
- `generateArtifactStep` for CONTEXT → `CONTEXT_DONE`, TECH → `TECH_DONE`.
- `Artifact` upsert by `projectId` + type; strip markdown code fences.
- `GenerateButtons` on project detail; pipeline gating.

**Acceptance Criteria**

- [ ] FR-AI-01–02: Valid context and tech markdown stored in DB.
- [ ] FR-AI-05: Tech blocked until context complete.
- [ ] FR-AI-09: Retry once if required sections missing.
- [ ] `pipelineStatus` updates correctly after each step.

**Stack Touchpoints**

- **UI:** Generate buttons, loading state, pipeline stepper
- **API:** `generateArtifactAction` (CONTEXT, TECH)
- **DB:** `Artifact`, `Project.pipelineStatus`, `GenerationJob`

**Dependencies**

- Sprint 3.1.

**Sprint Execution Prompt**

```text
Implement AI steps 1–2 per SRS FR-AI-01–02 and §8.2.

Deliver: templates for context.md and tech.md (final markdown only), validators, generateArtifactStep for CONTEXT and TECH, Artifact storage, UI generate buttons with prerequisite gating. Use requirementsText + stack notes from Project.
```

---

### Sprint 3.3: UI/UX & Sprint Artifact Generation

**SRS mapping:** FR-AI-03–04, FR-AI-10, §8.2  
**Goals**

- Generate `uiux.md` and `sprint.md` (phases, sprints, execution prompt blocks).
- Sync sprint checklist rows from generated `sprint.md`.

**Tasks**

- Templates for UIUX and SPRINT; sprint prompt enforces `## Phase` / `### Sprint` structure.
- Pipeline: UIUX after TECH → `UIUX_DONE`; SPRINT after UIUX → `COMPLETE`.
- `parseSprintsFromMarkdown` + `syncSprintsFromMarkdown` → `SprintProgress` rows.
- Regenerate rules: disable completed steps unless product allows re-run (v1: show checkmarks).

**Acceptance Criteria**

- [ ] FR-AI-03–04: uiux.md and sprint.md stored; sprint uses all foundation artifacts.
- [ ] FR-AI-10: sprint.md includes Goals, Tasks, Acceptance Criteria, Stack Touchpoints, Dependencies, Sprint Execution Prompt per sprint.
- [ ] SRS §12.2: At least one phase with multiple full-stack sprints in output.
- [ ] Sprint progress rows created after SPRINT generation.

**Stack Touchpoints**

- **UI:** Generate UIUX/Sprint buttons; sprint checklist section (read-only until 4.1)
- **API:** `generateArtifactAction` (UIUX, SPRINT)
- **DB:** `Artifact` SPRINT/UIUX; `SprintProgress` seed records

**Dependencies**

- Sprint 3.2.

**Sprint Execution Prompt**

```text
Implement AI steps 3–4 per SRS FR-AI-03–04 and FR-AI-10.

Deliver: uiux.md and sprint.md generation with validators, full pipeline to COMPLETE, sprint parser syncing SprintProgress table. sprint.md must include per-sprint Cursor execution prompt blocks for client projects (meta: this sprints.md is the human plan for PromptWizard itself).
```

---

### Sprint 3.4: Artifact Preview, Copy & Export

**SRS mapping:** FR-EXP-01–04, FR-PROJ-05, NFR-01  
**Goals**

- Tabbed artifact viewer with markdown preview, copy, single download, ZIP.

**Tasks**

- `ArtifactPanel`: tabs Context | Tech | UI/UX | Sprint, `react-markdown` + GFM.
- Copy to clipboard; `/api/projects/[id]/download?type=`.
- `/api/projects/[id]/zip` with JSZip (all artifacts).
- Project detail page integrates panel + generate section.

**Acceptance Criteria**

- [ ] FR-EXP-01–04: Preview, copy, download, ZIP work for owner and admin.
- [ ] FR-PROJ-05: Project detail shows all artifact tabs.
- [ ] SRS §12.1: Intern can complete upload → four artifacts → ZIP in one session.
- [ ] Preview renders under 2s for typical artifact size (NFR-01).

**Stack Touchpoints**

- **UI:** `/projects/[id]`, ArtifactPanel
- **API:** download + zip route handlers
- **DB:** Read `Artifact.contentMd`

**Dependencies**

- Sprint 3.3.

**Sprint Execution Prompt**

```text
Implement artifact export per SRS FR-EXP-* and FR-PROJ-05.

Deliver: tabbed markdown preview (uiux.md prose styles), copy button, per-file download routes, ZIP bundle. Wire on project detail page. Enforce auth: owner or ADMIN only.
```

---

## Phase 4: Progress Tracking, Knowledge Base & Admin

Mentors observe intern progress; interns use internal guides.

### Sprint 4.1: Sprint Checklist & Dashboard Progress

**SRS mapping:** FR-SPRINT-01–04, FR-PROJ-03  
**Goals**

- Interns update per-sprint status; project cards show completion %.

**Tasks**

- `SprintChecklist` component with status select: NOT_STARTED | IN_PROGRESS | DONE.
- `updateSprintProgressAction`; set `completedAt` when DONE.
- `sprintCompletionPercent` on project list cards when pipeline COMPLETE.
- Pipeline stepper “Build” step reflects sprint %.

**Acceptance Criteria**

- [ ] FR-SPRINT-01–03: Checklist matches parsed sprints; status persists per user/project.
- [ ] FR-SPRINT-04: % shown on project card.
- [ ] User story #3 (mark sprint done) works.
- [ ] SRS §12.3: Dashboard reflects pipeline and checklist accurately.

**Stack Touchpoints**

- **UI:** Sprint checklist on `/projects/[id]`, cards on `/projects`
- **API:** `updateSprintProgressAction`
- **DB:** `SprintProgress`

**Dependencies**

- Sprint 3.3 (sprint rows exist).

**Sprint Execution Prompt**

```text
Implement sprint progress tracking per SRS FR-SPRINT-*.

Deliver: interactive checklist on project detail, server action for status updates, completion percentage on project list and pipeline stepper Build step.
```

---

### Sprint 4.2: Knowledge Base (Browse & Search)

**SRS mapping:** FR-KB-01–04, §9  
**Goals**

- Nine curated articles; category browse and search on index.

**Tasks**

- `content/kb/*.md` for all slugs in SRS §9.
- `src/lib/kb/articles.ts` metadata; `loadKbMarkdown` for body.
- `/kb` index with `KbSearch`, category grouping.
- `/kb/[slug]` article page with markdown render.

**Acceptance Criteria**

- [ ] FR-KB-01–03: All nine articles readable; search filters by title/description/category.
- [ ] FR-KB-04: Topics match catalog (Capacitor, FCM, OAuth, stores, IAP, Vercel, EC2, Railway, Flutter).
- [ ] SRS §12.4 satisfied.
- [ ] User story #5 (search FCM) works.

**Stack Touchpoints**

- **UI:** `/kb`, `/kb/[slug]`
- **API:** Server components + optional `?q=` on index
- **DB:** Static files (no KB table in v1)

**Dependencies**

- Sprint 2.1 (auth to access KB).

**Sprint Execution Prompt**

```text
Implement knowledge base per SRS FR-KB-* and §9 catalog.

Seed nine markdown guides under content/kb/. Build index with category sections and client search (?q=). Article pages render markdown. Follow uiux.md for readable article layout.
```

---

### Sprint 4.3: Admin Dashboard & Mentor Visibility

**SRS mapping:** FR-ADMIN-01–03, FR-SPRINT-05, FR-AUTH-05  
**Goals**

- Admins see all users, projects, failed jobs, and stuck sprints.

**Tasks**

- `/admin` page: users table, all projects with owner email and artifact count.
- Failed `GenerationJob` list (latest 20).
- Stuck sprints: IN_PROGRESS >7 days (amber highlight).
- `getAdminStats` server action; sidebar Admin link for ADMIN only.

**Acceptance Criteria**

- [ ] FR-ADMIN-01–03: Team table, project aggregate, failed jobs visible.
- [ ] FR-SPRINT-05: Stuck sprints surfaced.
- [ ] User stories #4 and #6 satisfied.
- [ ] SRS §12.5: Admin lists all projects and failed jobs.

**Stack Touchpoints**

- **UI:** `/admin`
- **API:** `getAdminStats`, admin bypass on project read
- **DB:** Aggregations across User, Project, GenerationJob, SprintProgress

**Dependencies**

- Sprint 4.1, Sprint 3.1.

**Sprint Execution Prompt**

```text
Implement admin dashboard per SRS FR-ADMIN-* and FR-SPRINT-05.

Deliver: /admin with users/projects tables, failed generation jobs, stuck sprint warnings (>7 days in progress). Restrict to ADMIN role. Admins can view any project detail.
```

---

## Phase 5: Hardening, Optional Auth & Production Launch

Polish, security, optional OAuth, and production deployment.

### Sprint 5.1: Security, Accessibility & Error UX

**SRS mapping:** NFR-05–10, §10, FR-AI-09  
**Goals**

- Harden uploads, secrets, and error surfaces; improve a11y and dark mode.

**Tasks**

- Audit env usage: no secrets in client bundle or LLM prompts (NFR-06).
- Form labels, focus rings, `role="alert"` on errors (NFR-09).
- Dark mode via `prefers-color-scheme` + optional toggle (NFR-10).
- Consistent error messages for OpenAI failures and validation.
- Document 90-day retention note for `GenerationJob` in DEPLOY.md.

**Acceptance Criteria**

- [ ] NFR-05: All secrets in env only.
- [ ] NFR-08: Mutations via server actions (no unsafe public writes).
- [ ] NFR-09–10: Core flows keyboard-accessible; dark mode readable.
- [ ] Upload path cannot write executable files to public dir.

**Stack Touchpoints**

- **UI:** Login, forms, alerts, theme
- **API:** Error handling pass on upload + generate
- **DB:** N/A

**Dependencies**

- Phase 4 complete.

**Sprint Execution Prompt**

```text
Harden PromptWizard per SRS §10 and NFR-05–10.

Review: env secrets, upload validation, server action auth checks, accessibility on login/projects/admin, dark mode. Improve user-facing errors for AI and rate limits. Update docs/DEPLOY.md with audit log retention guidance.
```

---

### Sprint 5.2: Google OAuth (Optional v1)

**SRS mapping:** FR-AUTH-02  
**Goals**

- Optional company Google sign-in alongside credentials.

**Tasks**

- Google provider in Auth.js; env `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`.
- “Continue with Google” on login page.
- Map OAuth user to `User` (create INTERN if new email).
- Update `.env.example` and `content/kb/auth-google-apple.md` cross-link.

**Acceptance Criteria**

- [ ] FR-AUTH-02: Google login works when env configured.
- [ ] Credentials login still works when Google disabled.
- [ ] New Google users default to INTERN role.

**Stack Touchpoints**

- **UI:** Login page OAuth button
- **API:** Auth.js Google provider callback
- **DB:** `User` upsert on first OAuth sign-in

**Dependencies**

- Sprint 2.1.

**Sprint Execution Prompt**

```text
Add optional Google OAuth per SRS FR-AUTH-02 and tech.md.

Implement Auth.js Google provider, login UI button, user provisioning for new emails. Document env vars in .env.example. Keep credentials provider as fallback.
```

---

### Sprint 5.3: Production Deploy & Smoke Test

**SRS mapping:** §11–12, NFR-03–04, Appendix A  
**Goals**

- Deploy to Vercel + managed Postgres; verify SRS acceptance criteria in production.

**Tasks**

- Run `prisma migrate deploy` on production DB; `npm run db:seed` (rotate passwords).
- Vercel env: `DATABASE_URL`, `AUTH_SECRET`, `NEXTAUTH_URL`, `OPENAI_API_KEY`.
- Smoke test script or checklist in `docs/DEPLOY.md`.
- Verify routes: `/`, `/login`, `/projects`, `/projects/new`, `/projects/[id]`, `/kb`, `/kb/[slug]`, `/admin`.

**Acceptance Criteria**

- [ ] NFR-03–04: HTTPS production URL; app reachable.
- [ ] SRS §12 (all five product acceptance criteria) pass on staging/production.
- [ ] Seeded admin and employee can sign in; intern cannot access `/admin`.
- [ ] README and DEPLOY.md accurate for onboarding new interns.

**Stack Touchpoints**

- **UI:** Full regression on production URL
- **API:** All route handlers behind HTTPS
- **DB:** Migrations applied; seed users exist

**Dependencies**

- Sprints 3.4, 4.1–4.3, 5.1 (5.2 optional).

**Sprint Execution Prompt**

```text
Deploy PromptWizard per docs/DEPLOY.md and SRS §11–12.

Configure Vercel + Neon/Railway Postgres, run migrations and seed, set all env vars. Execute smoke test against Appendix A routes and §12 acceptance criteria. Document any production-only config in DEPLOY.md.
```

---

## Phase 6: Post-v1 Backlog (Out of SRS v1 Scope)

Track for future phases; **do not implement in v1** unless scope changes.

| Item | SRS reference |
|------|----------------|
| Git auto-commit of artifacts | Out of scope §1.2 |
| Cursor IDE extension | Out of scope §1.2 |
| Multi-tenant orgs / billing | Out of scope §1.2 |
| Real-time collaborative editing | Out of scope §1.2 |
| KB stored in Postgres with `tsvector` | FR-KB enhancement |
| SSE/polling UI for long AI jobs | NFR-02 enhancement |
| S3/R2 presigned uploads | tech.md production storage |
| DRS-Tool SSO integration | Plan § Relationship to drs-tool |

---

## Sprint Summary

| Phase | Sprints | Theme |
|-------|---------|--------|
| 1 | 1.1 – 1.2 | Docs & scaffold |
| 2 | 2.1 – 2.3 | Auth & projects & upload |
| 3 | 3.1 – 3.4 | AI pipeline & export |
| 4 | 4.1 – 4.3 | Tracking, KB, admin |
| 5 | 5.1 – 5.3 | Hardening, OAuth, deploy |
| 6 | — | Backlog only |

**Total v1 sprints:** 14 deliverable sprints across 5 phases.

---

## How Interns Use This File

1. Complete Phase 1–2 before any client project work on PromptWizard itself.
2. For each sprint: open **Plan mode** in Cursor, paste the **Sprint Execution Prompt**, attach `context.md`, `tech.md`, `uiux.md`, and `docs/SRS.md`.
3. Mark progress in the app sprint checklist (generated from client `sprint.md` artifacts) or track manually against checkboxes above.
4. After Sprint 5.3, dogfood the product by uploading a real client SRS and generating that project’s four artifacts.
