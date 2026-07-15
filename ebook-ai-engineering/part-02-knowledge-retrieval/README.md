# Part II — Knowledge & Retrieval

**Course:** AI Engineering: From LLMs to Production-Grade Agentic Systems  
**Audience:** AlrightTech Intern Engineering Program · Edition 2025–2026  
**Prerequisite:** Part I — Foundations (Modules M1–M3)

This volume expands curriculum Modules **M4–M7** into a teaching ebook: mental models, production judgment, worked Python examples, labs, and mini-project rubrics.

## How to read

| Order | File | Module | Duration |
| :---- | :---- | :---- | :---- |
| 0 | [00-part-ii-overview.md](00-part-ii-overview.md) | Part thesis & map | — |
| 1 | [04-embeddings-semantic-search.md](04-embeddings-semantic-search.md) | M4 | 2 days |
| 2 | [05-vector-databases.md](05-vector-databases.md) | M5 | 2 days |
| 3 | [06-retrieval-augmented-generation.md](06-retrieval-augmented-generation.md) | M6 | 3 days |
| 4 | [07-advanced-rag-optimization.md](07-advanced-rag-optimization.md) | M7 | 3 days |

Read in order. Projects compound: M4’s corpus and chunking experiments feed M5’s vector store layer; M5’s store powers M6’s RAG app; M7 upgrades that app with measured gains on a fixed test set.

## Running thread: AlrightTech Internal Docs

All examples assume a fictional corpus — **AlrightTech Internal Docs** (engineering handbooks, onboarding PDFs, runbooks, and ticket excerpts). You may substitute your own documents; keep metadata fields (`source`, `doc_type`, `updated_at`, `tenant_id`) consistent across modules.

## Rhythm

Each module chapter follows: production why → objectives → concepts → worked examples → decision guides → failure modes → labs → mini project → bridge.

Day markers (`Day 1`, `Day 2`, …) are pacing hints aligned to the curriculum, not calendar locks.

## Tooling (Appendix A)

Embeddings · OpenAI / Cohere / Voyage / BGE–E5 · Vector DBs · Qdrant & pgvector · Eval · RAGAS · Rerank · Cohere Rerank / cross-encoders · Optional · LangChain when it accelerates, not when it obscures.

## Curriculum coverage (M4–M7)

Each chapter expands the matching module in `Applied AI-Engineering-Course-Curriculum.docx.md`: learning objectives, all listed topics, hands-on labs with acceptance checks, and the mini project with rubric.

| Curriculum artifact | Continuity across chapters |
| :---- | :---- |
| Corpus | AlrightTech Internal Docs (`source`, `doc_type`, `updated_at`, `tenant_id`, `chunk_id`) |
| Embedder | Pin in M4 (e.g. `text-embedding-3-small`); reuse through M7 |
| Store | M4 NumPy → M5 `VectorStore` (pgvector ↔ Qdrant) → M6/M7 RAG |
| Evals | M4 hit rate → M6 RAGAS baseline → M7 before/after on **frozen** golden set |
