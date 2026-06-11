# PromptWizard — Technical Stack

## Stack Overview

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router), TypeScript |
| UI | React 19, Tailwind CSS 4, custom components |
| Database | PostgreSQL via Prisma ORM |
| Auth | Auth.js v5 (NextAuth) — credentials + JWT sessions |
| AI | OpenAI Chat Completions API |
| Document parsing | `pdf-parse`, `mammoth` (DOCX) |
| Markdown | `react-markdown`, `remark-gfm` |
| ZIP export | `jszip` |
| Deployment | Vercel + managed PostgreSQL (Neon/Supabase/Railway) |

## Frontend

- **Routing:** App Router with route groups `(auth)`, `(dashboard)`
- **Styling:** Tailwind with teal/sky semantic tokens in `globals.css`
- **State:** Server Components + Server Actions; client components for stepper, dropzone, polling
- **Forms:** Native + Server Actions with `useFormStatus`

## Backend

- **API pattern:** Server Actions for mutations; Route Handlers for file upload and downloads
- **Validation:** Zod schemas in `src/lib/validations/`
- **Services:** `src/lib/ai/`, `src/lib/parsers/`, `src/lib/sprints/`

## Database (Prisma)

Models: `User`, `Project`, `Artifact`, `GenerationJob`, `SprintProgress`

- Artifacts versioned per type (latest wins for display)
- `GenerationJob` audit trail per pipeline step
- `SprintProgress` keyed by `sprintKey` parsed from markdown

## Authentication

- Credentials provider: email + bcrypt password
- JWT session with `role` claim
- Middleware protects `/projects`, `/admin`, `/kb` (read allowed when authenticated)
- Admin routes check `role === ADMIN`

## AI Pipeline

```
requirementsText
    → generateContext() → Artifact CONTEXT
    → generateTech(context) → Artifact TECH
    → generateUiux(context) → Artifact UIUX
    → generateSprint(context, tech, uiux) → Artifact SPRINT
```

- Templates in `src/lib/ai/templates.ts`
- Client in `src/lib/ai/claude.ts`
- Validators in `src/lib/ai/validators.ts`
- Rate limit: in-memory / DB count per user per hour (10)

## File Upload

- Route: `POST /api/upload`
- Max 10 MB; types: `application/pdf`, DOCX, text/plain, text/markdown
- Dev storage: `.uploads/` gitignored
- Extracted text stored on `Project.requirementsText`

## Environment Variables

```env
DATABASE_URL=
AUTH_SECRET=
ANTHROPIC_API_KEY=
ANTHROPIC_MODEL=claude-sonnet-4-6
ANTHROPIC_MAX_TOKENS=8192
NEXTAUTH_URL=http://localhost:3000
```

## Deployment Targets

- **Primary:** Vercel (Next.js)
- **Database:** Neon or Railway PostgreSQL
- **Docs:** `docs/DEPLOY.md`

## Security

- HTTPS in production
- `bcrypt` password hashing (12 rounds)
- Project ownership checks on every mutation
- No secrets in LLM output (prompt instruction)

## Testing (recommended)

- Unit: sprint parser, validators
- Integration: document parser fixtures
- E2E: optional Playwright for login → create project
