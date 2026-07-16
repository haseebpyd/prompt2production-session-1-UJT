/**
 * Agentic AI Engineer — weekly lecture decks (Week 1–8).
 * Curriculum source: Applied AI Engineering Course (M1–M14 + Capstone).
 */
const LECTURES = {
    'lecture-1': {
        title: 'Week 1 — Foundations & Prompts',
        slides: [
            {
                title: 'Meet Your Trainers',
                bullets: [
                    'Mr. Haseeb — COO at AlrightTech · Full Stack AI Engineer',
                    'Aftab Ahmad — Full Stack Agentic AI Engineer at AlrightTech',
                    'AlrightTech Intern Engineering Program — Agentic AI track',
                    'Ebook for depth · Lecture slides for weekly focus',
                ],
                links: [
                    { label: 'Course Home', url: '#home' },
                ],
            },
            {
                title: 'Week 1 Agenda',
                bullets: [
                    'Modules: M1 LLM Foundations → M2 Prompt Engineering',
                    'Lock the mental model of how LLMs work and how you control them',
                    'Treat prompts as versioned engineering artifacts',
                    'Milestone: Model Benchmark CLI',
                ],
            },
            {
                title: 'The AI Engineer Role',
                bullets: [
                    'You ship products that use models as components — not research papers',
                    'Stack: APIs, prompts/tools, knowledge, evals, guardrails, ops',
                    'Neighboring roles: ML engineer trains models; you integrate and qualify them',
                    'Success = latency, cost, quality gates, and reliability',
                ],
            },
            {
                title: 'Tokens, Context & Cost',
                bullets: [
                    'Models predict the next token; you pay for prompt + completion tokens',
                    'Context windows truncate — long prompts are a cost and quality risk',
                    'Count tokens before shipping (e.g. tiktoken) and estimate dollars',
                    'Right-size models: Haiku/mini for glue; frontier for hard reasoning',
                ],
            },
            {
                title: 'Decoding Parameters',
                bullets: [
                    'Temperature / top-p: creativity vs determinism',
                    'Max tokens & stop sequences: hard bounds on length and format',
                    'Seed where available for reproducible demos and tests',
                    'Production defaults: low temperature for JSON and tools',
                ],
            },
            {
                title: 'Prompt Framework (S-T-C-C-F-E)',
                bullets: [
                    'Role → Task → Context → Constraints → Format → Examples',
                    'Zero-shot when the task is clear; few-shot when format must lock',
                    'System / developer messages are the interface contract',
                    'Version prompts in git — never “whatever was in the chat”',
                ],
            },
            {
                title: 'When Prompts Fail',
                bullets: [
                    'Hallucination → constrain + ground (retrieval comes in Part II)',
                    'Format drift → few-shot + structured outputs (Week 2)',
                    'Injection / jailbreaks → defensive delimiters; deepen in M13',
                    'Skip fancy CoT when a reasoning model already plans internally',
                ],
            },
            {
                title: 'Milestone — Model Benchmark CLI',
                bullets: [
                    'Fixed task suite: summarize, classify, generate code',
                    'Report latency, cost, tokens, and qualitative notes (Markdown/CSV)',
                    'Reuse this repo whenever you pick models later in the course',
                ],
                links: [
                    { label: 'M1 Ebook', url: '#m1' },
                    { label: 'M2 Ebook', url: '#m2' },
                ],
            },
        ],
    },

    'lecture-2': {
        title: 'Week 2 — Structure, Tools & Embeddings',
        slides: [
            {
                title: 'Week 2 Agenda',
                bullets: [
                    'Modules: finish M2 → M3 Structured Outputs → start M4 Embeddings',
                    'Force valid data out of models; connect tools by hand',
                    'First contact with meaning-as-geometry (semantic search)',
                    'Milestone: Structured Data Extraction Service',
                ],
            },
            {
                title: 'Prompt Robustness (Close M2)',
                bullets: [
                    'Golden sets beat hallway demos — A/B prompts on the same inputs',
                    'Delimit untrusted user text; don’t let it rewrite the system role',
                    'Template + parameterize prompts (Jinja-style) for production',
                    'Bridge: evaluation formalizes this in M12',
                ],
            },
            {
                title: 'Structured Outputs',
                bullets: [
                    'Free text breaks pipelines — use JSON Schema / native structured mode',
                    'Pydantic is the data contract; validate and retry on failure',
                    'Instructor (or equivalent) automates repair loops',
                    'Cost note: constrained generation can trade latency for reliability',
                ],
            },
            {
                title: 'Function & Tool Calling',
                bullets: [
                    'Loop: request → tool_call → tool_result → final answer',
                    'Tool schemas are interface contracts — name, args, description',
                    'Handle parallel calls, tool_choice, and malformed arguments',
                    'This loop is the heart of agents (Week 4+) — earn it without a framework',
                ],
            },
            {
                title: 'Embeddings & Semantic Search',
                bullets: [
                    'Embeddings place text in a space where similar meanings cluster',
                    'Cosine similarity ranks neighbors; pin one model version',
                    'Chunking is product design: size, overlap, metadata for citations',
                    'Build NumPy search first — vector DBs come next week',
                ],
            },
            {
                title: 'Failure Modes',
                bullets: [
                    'Skipping validation → silent bad JSON in production',
                    'Hallucinated tool names → allowlist tools + retries',
                    'Mixing embedding models/versions → recall collapse',
                    'Huge chunks → diluted vectors; tiny chunks → no answerable context',
                ],
            },
            {
                title: 'Milestone — Extraction Service (+ Embeddings)',
                bullets: [
                    'FastAPI endpoint → validated Pydantic JSON with repair/retry',
                    'Tests for malformed and adversarial inputs',
                    'Start semantic search experiments that feed Week 3’s store',
                ],
                links: [
                    { label: 'M3 Ebook', url: '#m3' },
                    { label: 'M4 Ebook', url: '#m4' },
                ],
            },
        ],
    },

    'lecture-3': {
        title: 'Week 3 — Vector Stores & RAG',
        slides: [
            {
                title: 'Week 3 Agenda',
                bullets: [
                    'Modules: M5 Vector Databases → M6 Retrieval-Augmented Generation',
                    'Operate search at scale; ground generation on private docs',
                    'Citations + honest refusals beat confident guessing',
                    'Milestone: vector store layer + Chat With Your Docs',
                ],
            },
            {
                title: 'ANN & Vector DB Reality',
                bullets: [
                    'Exact search is O(n); ANN (e.g. HNSW) trades a little recall for speed',
                    'Tune recall vs latency with index/query params — measure on your gold set',
                    'Landscape: pgvector, Qdrant, Weaviate, Pinecone, Chroma',
                    'Abstract behind create / upsert / query / filter / delete',
                ],
            },
            {
                title: 'Filters, Hybrid & Tenancy',
                bullets: [
                    'Metadata filters (doc_type, date, tenant_id) prevent wrong-neighborhood answers',
                    'Hybrid = dense semantics + BM25 for IDs and error codes',
                    'Multi-tenancy: never forget tenant filters on the public API',
                    'Swap pgvector ↔ Qdrant via config — apps should not care',
                ],
            },
            {
                title: 'RAG Architecture',
                bullets: [
                    'Ingest → chunk → embed → store → retrieve → augment → generate → evaluate',
                    'Prompt packing: top-k, token budget, source attribution',
                    'Grounded contract: answer only from evidence; say “I don’t know” otherwise',
                    'Parsers (PDF/HTML) fail silently — print raw extract before blaming the LLM',
                ],
            },
            {
                title: 'RAG Failure Modes',
                bullets: [
                    'Poor retrieval → fix chunks/embeddings before rewriting prompts',
                    'Lost-in-the-middle → reorder / reduce k / prepare for rerank (Week 4)',
                    'Stale or conflicting sources → show updated_at; prefer newest',
                    'Hallucinated citations → allowlist chunk_ids from retrieved context',
                ],
            },
            {
                title: 'Measure with RAGAS',
                bullets: [
                    'Faithfulness, answer relevance, context precision / recall',
                    'Freeze a golden set — scores are relative (before/after), not gospel',
                    'Commit eval reports next to the app (baseline for Week 4 upgrades)',
                ],
            },
            {
                title: 'Milestone — Store + Chat With Docs',
                bullets: [
                    'Reusable VectorStore (pgvector ↔ Qdrant)',
                    'Cited answers + out-of-scope guard',
                    'RAGAS scorecard checked in',
                ],
                links: [
                    { label: 'M5 Ebook', url: '#m5' },
                    { label: 'M6 Ebook', url: '#m6' },
                ],
            },
        ],
    },

    'lecture-4': {
        title: 'Week 4 — Advanced RAG & Agents',
        slides: [
            {
                title: 'Week 4 Agenda',
                bullets: [
                    'Modules: M7 Advanced RAG → start M8 Agents',
                    'Raise retrieval quality with measured upgrades',
                    'Build the agent control loop from scratch (no framework yet)',
                    'Milestones: Advanced RAG Upgrade + Research Assistant underway',
                ],
            },
            {
                title: 'Query Transformation & Fusion',
                bullets: [
                    'Rewrite, multi-query, HyDE, step-back — each has a use-when',
                    'Reciprocal Rank Fusion merges ranked lists without mixing score scales',
                    'Hybrid dense + sparse remains essential for identifiers',
                    'Change one lever at a time against the frozen Week 3 golden set',
                ],
            },
            {
                title: 'Reranking & Index Patterns',
                bullets: [
                    'Two-stage: ANN retrieves 50–100 → cross-encoder / Cohere Rerank → top-k',
                    'Parent-document & sentence-window: precise retrieve, richer generate',
                    'Routers: vector vs SQL vs web by intent',
                    'Prove lift with before/after RAGAS + latency notes',
                ],
            },
            {
                title: 'What Is an Agent?',
                bullets: [
                    'Goal-directed loop: perceive → reason → act (tool) → observe → repeat',
                    'Spectrum: chain → workflow → agent → multi-agent',
                    'Use agents when tool choice cannot be fully pre-sequenced',
                    'Skip agents when a fixed RAG/pipeline already meets the SLA',
                ],
            },
            {
                title: 'ReAct From Scratch',
                bullets: [
                    'LLM + tools + observation packing — no LangGraph yet',
                    'Tools: web search, calculator, RAG retriever (your M6/M7 service)',
                    'Rails: max steps, cost budget, loop detection, tool-error recovery',
                    'System + tool descriptions are contracts — vagueness causes bad calls',
                ],
            },
            {
                title: 'Failure Modes',
                bullets: [
                    'Upgrade without baseline → ship vibes, not quality',
                    'Infinite agent loops → enforced budgets',
                    'Hallucinated tools → validate names against the registry',
                    'Cost blow-ups → log $/run next to answer quality',
                ],
            },
            {
                title: 'Milestones This Week',
                bullets: [
                    'Advanced RAG Upgrade: rewrite + hybrid + rerank with before/after report',
                    'Start Research Assistant Agent: cited synthesis + inspectable traces',
                ],
                links: [
                    { label: 'M7 Ebook', url: '#m7' },
                    { label: 'M8 Ebook', url: '#m8' },
                ],
            },
        ],
    },

    'lecture-5': {
        title: 'Week 5 — Memory, Planning & LangGraph',
        slides: [
            {
                title: 'Week 5 Agenda',
                bullets: [
                    'Modules: finish M8 → M9 Memory & Planning → M10 Orchestration',
                    'Persistent memory and deliberate multi-step plans',
                    'Model agents as explicit graphs with HITL and checkpoints',
                    'Path: Research Assistant → Personal Assistant → Orchestrated Workflow',
                ],
            },
            {
                title: 'Agent Memory Types',
                bullets: [
                    'Short-term: conversation buffer / summarize / sliding window',
                    'Working memory: scratchpad for the current goal',
                    'Long-term: vector store facts & preferences across sessions (reuse VectorStore)',
                    'Memory ≠ infinite context — budget tokens ruthlessly',
                ],
            },
            {
                title: 'Planning & Reflection',
                bullets: [
                    'Plan-and-execute: decompose → ordered subtasks → run',
                    'Reflection: critique and revise before final delivery',
                    'Tree-of-thought: overview only — cost vs benefit',
                    'Persist checkpoints so interrupted runs can resume',
                ],
            },
            {
                title: 'Why Orchestration Frameworks',
                bullets: [
                    'They own state, branching, streaming, HITL, and durable execution',
                    'Landscape: LangGraph (primary), Agents SDK, CrewAI, AutoGen, Pydantic AI…',
                    'Learn the loop first (M8) — then express it as a graph',
                    'Hybrid designs: deterministic workflow edges + autonomous nodes',
                ],
            },
            {
                title: 'LangGraph Essentials',
                bullets: [
                    'Nodes, edges, conditional routing, cycles',
                    'Human-in-the-loop: approval before writes / external side effects',
                    'Checkpoints: resume from last state after interrupt',
                    'Stream tokens / events behind a FastAPI (or similar) API',
                ],
            },
            {
                title: 'Failure Modes',
                bullets: [
                    'Stuffing full chat history forever → summary memory',
                    'Plans that never execute → enforce step budgets',
                    'HITL without timeout → ops deadlock',
                    'Framework magic hiding prompt bugs → keep traces readable',
                ],
            },
            {
                title: 'Milestones — Memory + Orchestration',
                bullets: [
                    'Personal Assistant with Memory: inspect retained facts',
                    'Orchestrated Workflow Agent: branching, approval, checkpoint, streaming API',
                ],
                links: [
                    { label: 'M9 Ebook', url: '#m9' },
                    { label: 'M10 Ebook', url: '#m10' },
                ],
            },
        ],
    },

    'lecture-6': {
        title: 'Week 6 — Multi-Agent & Evaluation',
        slides: [
            {
                title: 'Week 6 Agenda',
                bullets: [
                    'Modules: M11 Multi-Agent Systems → M12 Evaluation',
                    'Specialize roles; measure quality like any other product metric',
                    'CI fails when prompts/agents regress',
                    'Milestones: multi-agent pipeline + Evaluation Harness',
                ],
            },
            {
                title: 'When Multi-Agent Wins',
                bullets: [
                    'Specialization, separation of concerns, and parallelism',
                    'Not “more agents = smarter” — each agent multiplies cost and failure surface',
                    'Prefer single agent + tools until handoffs clearly help',
                    'Always: shared budgets and a clear termination condition',
                ],
            },
            {
                title: 'Topologies & Patterns',
                bullets: [
                    'Supervisor / orchestrator-worker; sequential pipeline; debate',
                    'Roles: planner, researcher, writer, critic, verifier',
                    'Proven: orchestrator-worker and evaluator-optimizer loops',
                    'Handoffs via shared state / artifacts — not chat soup',
                ],
            },
            {
                title: 'Eval-Driven Development',
                bullets: [
                    'Change → run golden set → compare scorecard → ship or revert',
                    'Reuse M2/M6/M7 goldens and agent traces as datasets',
                    'RAG metrics + agent metrics (success, tool accuracy, steps, cost)',
                    'Tooling: promptfoo, RAGAS, DeepEval, LangSmith/Langfuse, Braintrust',
                ],
            },
            {
                title: 'LLM-as-Judge & CI',
                bullets: [
                    'Judges have bias and position bias — calibrate against human samples',
                    'Pin judge model versions; treat scores relatively',
                    'Wire evals into CI: prompt/agent change fails the build on regression',
                    'Offline regression + optional online / A/B later',
                ],
            },
            {
                title: 'Failure Modes',
                bullets: [
                    'Cost explosion & error cascading across agents',
                    'Deadlocks and lost context on handoffs',
                    'Eval theater: metrics that don’t match user pain',
                    'Unfrozen goldens mid-experiment — never move the goalposts',
                ],
            },
            {
                title: 'Milestones — Pipeline + Harness',
                bullets: [
                    'Multi-Agent Research & Content Pipeline with per-agent cost report',
                    'Evaluation Harness: datasets, judges, CI scorecard across projects',
                ],
                links: [
                    { label: 'M11 Ebook', url: '#m11' },
                    { label: 'M12 Ebook', url: '#m12' },
                ],
            },
        ],
    },

    'lecture-7': {
        title: 'Week 7 — Guardrails & Deploy',
        slides: [
            {
                title: 'Week 7 Agenda',
                bullets: [
                    'Modules: M13 Guardrails → M14 Deployment & Observability',
                    'Defend inputs/outputs; ship a traced, cost-monitored service',
                    'Harden RAG or Research Assistant — then containerize it',
                    'Milestones: Hardened AI Endpoint + Production Deployment',
                ],
            },
            {
                title: 'Guardrail Layers',
                bullets: [
                    'Input validation, topic/scope control, output filtering, format enforcement',
                    'PII detection/redaction; secrets never in logs or prompts casually',
                    'Moderation / Llama Guard / provider APIs on the response path',
                    'Grounding and refusals are safety controls, not UX polish',
                ],
            },
            {
                title: 'Injection & OWASP LLM',
                bullets: [
                    'Direct vs indirect prompt injection (poisoned docs/tools)',
                    'OWASP Top 10 for LLM apps = red-team checklist',
                    'Agents: sandbox tools, least privilege, HITL for destructive actions',
                    'Ship a red-team report: attacks attempted and blocked',
                ],
            },
            {
                title: 'Serving & Packaging',
                bullets: [
                    'FastAPI + async + SSE streaming; queues for long jobs',
                    'Docker, env/secrets, health checks',
                    'Hosts: Render / Railway / AWS / GCP; serverless when it fits',
                    'Self-host (vLLM/Ollama) only when privacy/cost math works',
                ],
            },
            {
                title: 'Observability & Reliability',
                bullets: [
                    'Trace LLM/agent spans (Langfuse or LangSmith + OTel concepts)',
                    'Dashboards: tokens, $, latency, error rate, rate-limit hits',
                    'Retries, timeouts, fallbacks, model routing, circuit breakers',
                    'Prompt/semantic cache — measure $ and p95 impact',
                ],
            },
            {
                title: 'Failure Modes',
                bullets: [
                    'Security as a system prompt only → bypassed easily',
                    'Deploy without traces → un-debuggable incidents',
                    'No cost alerts → surprise invoices',
                    'Caching stale policy answers → pair cache with doc versioning',
                ],
            },
            {
                title: 'Milestones — Harden & Ship',
                bullets: [
                    'Hardened endpoint + red-team report',
                    'Public/containerized service: traces, cache, retries, health, ops dashboard',
                ],
                links: [
                    { label: 'M13 Ebook', url: '#m13' },
                    { label: 'M14 Ebook', url: '#m14' },
                ],
            },
        ],
    },

    'lecture-8': {
        title: 'Week 8 — Capstone',
        slides: [
            {
                title: 'Week 8 Agenda',
                bullets: [
                    'Design, build, evaluate, harden, deploy, and demo one production-grade app',
                    'Compose skills from M1–M14 — no greenfield reinventing foundations',
                    'Solo or small team; mentor approval if proposing a custom vertical',
                    'Milestone: live demo + defense of trade-offs',
                ],
            },
            {
                title: 'Capstone Must Include',
                bullets: [
                    'Real problem + genuine knowledge source or dataset',
                    'RAG and/or tool-using agent(s) at the core',
                    'Structured outputs + defensive error handling',
                    'Eval suite with version scorecard; guardrails; containerized traced deploy',
                    'Docs, architecture diagram, live demonstration',
                ],
            },
            {
                title: 'How M1–M14 Compose',
                bullets: [
                    'M1–M3: model I/O, prompts, tools/schemas',
                    'M4–M7: retrieval core with measured quality',
                    'M8–M11: agent loop / memory / graph / multi-agent as needed',
                    'M12–M14: eval harness, hardening, observability, deploy',
                ],
            },
            {
                title: 'Option Sketches (1–3)',
                bullets: [
                    'Enterprise Knowledge Assistant — agentic RAG + ACL + memory + eval + ops',
                    'Autonomous Research & Report — multi-agent, citations, HITL gate',
                    'AI Customer-Support — CRM tools + help-doc RAG + escalation',
                ],
            },
            {
                title: 'Option Sketches (4–5)',
                bullets: [
                    'Code & Data Analysis — text-to-SQL + codebase RAG + sandboxed code',
                    'Domain Vertical Copilot — legal/medical/finance with strict refusals',
                    'Pick one lane and go deep — shallow multi-feature demos lose',
                ],
            },
            {
                title: 'Rubric & Defense',
                bullets: [
                    'Repo + README + architecture document',
                    'Evaluation report / scorecard with measured quality',
                    'Deployed URL or reproducible demo',
                    'Short talk: decisions, trade-offs, what you would fix next',
                ],
            },
            {
                title: 'Demo Day — Ship It',
                bullets: [
                    'Tell a story: problem → architecture → live path → eval evidence → ops',
                    'Show a failure you fixed (retrieval, agent loop, or security)',
                    'Know your $/query and p95 latency',
                    'You are ready — build like a production AI engineer',
                ],
                links: [
                    { label: 'Capstone Ebook', url: '#m15' },
                    { label: 'Course Home', url: '#home' },
                ],
            },
        ],
    },
};
