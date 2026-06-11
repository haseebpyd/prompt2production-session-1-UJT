# PromptWizard — UI/UX Guidelines

## Design Principles

1. **Clarity over density** — Interns should see the next action immediately.
2. **Progressive disclosure** — Pipeline stepper shows current step; artifacts in tabs.
3. **Copy-first workflow** — Prominent copy/download for every artifact and sprint prompt.
4. **Accessible defaults** — Keyboard navigation, focus rings, sufficient contrast in light and dark mode.

## Color Palette (Alrighttech)

Aligned with [alrighttech.com](https://alrighttech.com/) — dark navy base, cyan primary, pink accent.

| Token | Hex | Tailwind token | Usage |
|-------|-----|----------------|-------|
| Navy | `#111424` | `navy` | Sidebar, inputs |
| Surface | `#1a2038` | `surface` | Cards, panels |
| Border | `#2a3352` | `surface-border` | Borders |
| Primary (cyan) | `#00A7E1` | `brand` | CTAs, active stepper, links |
| Primary dark | `#00749C` | `brand-dark` | Hover states |
| Accent (pink) | `#EC66B7` | `accent` | Sign up, active pipeline |
| Accent blue | `#2D5887` | — | Gradient depth |
| Text | `#f1f5f9` | `foreground` | Body on dark UI |
| Muted | `#94a3b8` | `muted` | Hints, labels |
| Success | `emerald-600` | `emerald-400` | Done sprints, success alerts |
| Warning | `amber-600` | `amber-400` | In progress, rate limit |
| Error | `rose-600` | `rose-400` | Failed generation |

CSS variables in `globals.css`: `--primary`, `--secondary`, `--background`, `--foreground`, `--card`, `--muted`.

## Typography

- **Font:** Geist Sans (Next.js default) for UI; Geist Mono for code/artifacts preview
- **Page title:** `text-2xl font-bold tracking-tight`
- **Section:** `text-lg font-semibold`
- **Body:** `text-sm` base, `text-base` on marketing/login
- **Artifact preview:** `prose prose-invert max-w-none text-sm` (dark theme)

## Layout

- **Max width:** `max-w-6xl` for dashboard content
- **Sidebar:** Fixed left nav on `lg+` (Projects, Knowledge Base, Admin if role)
- **Mobile:** Bottom-safe padding; hamburger or stacked nav

## Components

### Pipeline stepper

Horizontal on desktop, vertical on mobile. States: `pending`, `active`, `complete`, `error`.

Steps: Upload → Context → Tech → UI/UX → Sprint → Build

### Project card

- Title, type badge, pipeline mini-bar, sprint % complete
- Cyan (`brand`) border on hover; click → project detail

### File dropzone

- Dashed `border-2 border-dashed border-brand/40`
- Icon + “Drop requirements or click to browse”
- Supported formats listed below zone

### Artifact tabs

Tabs: Context | Tech | UI/UX | Sprint  
Actions row: Copy | Download | Regenerate (if prior step done)

### Sprint checklist

- Checkbox-style status control: Not started → In progress → Done
- Sprint title from parsed markdown; phase group headers

### Knowledge base

- Left category filter; search input with brand focus ring
- Article: readable width `max-w-3xl`, table of contents from H2

## Dark Mode

- `class` strategy on `html`
- Toggle in header (persist `localStorage` key `pw-theme`)
- All cards use `dark:bg-slate-900 dark:border-slate-800`

## Accessibility

- Focus visible: `ring-2 ring-brand ring-offset-2`
- Form labels associated with inputs
- Alert regions for generation errors (`role="alert"`)
- Minimum touch target 44px on mobile actions

## Empty & Loading States

- **No projects:** Illustration + “Create your first project” CTA
- **Generating:** Spinner on active step + “This may take up to 2 minutes”
- **No artifact yet:** Muted message + “Generate” button enabled when prerequisites met

## Admin Dashboard

- Table: Intern name, email, projects count, avg completion
- Stuck sprints highlighted with `amber` badge (>7 days in progress)
