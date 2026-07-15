**AI Engineering**

**From LLMs to Production-Grade Agentic Systems**

*A Comprehensive 8-Week (2-Month) Practical Curriculum*

**LLMs**   ·   **Generative AI**   ·   **Agentic AI**

Prepared for the AlrightTech Intern Engineering Program

14 modules  ·  14 mini-projects  ·  production capstone

Edition 2025–2026  ·  Version 1.0

# **Table of Contents**

# **1\. Course Overview**

**AI Engineering: From LLMs to Production-Grade Agentic Systems** is an intensive, eight-week (two-month) program that turns capable developers into AI engineers who can design, build, evaluate, and ship real AI applications. The curriculum is relentlessly practical: every module pairs essential fundamentals with hands-on labs and a mini project, and the course ends with a production-grade capstone that integrates the entire AI application lifecycle — from prompting and retrieval to autonomous agents, evaluation, guardrails, deployment, and observability. There is no filler. Every topic is here because working AI engineers use it to build production systems today.

## **Who This Course Is For**

* Developers, CS students, and graduates who can already code in Python and want to build AI products.

* Backend and full-stack engineers moving into AI engineering.

* AlrightTech interns continuing beyond the “Prompt to Production” foundation track.

* Not a data-science or ML-theory course — no deep mathematics or model-training background required.

## **Prerequisites**

* Comfortable programming in Python (functions, classes, and async basics).

* Familiarity with Git/GitHub and the command line.

* Understanding of REST APIs and JSON.

* Basic web/backend concepts (HTTP, environment variables).

* No prior AI/ML experience required.

## **What You’ll Be Able to Do**

* Build and ship production RAG systems over private data, with citations and measured quality.

* Design tool-using and multi-agent systems with memory, planning, and orchestration.

* Enforce structured outputs and integrate LLMs with external tools and APIs reliably.

* Evaluate LLM and agent quality with datasets, metrics, and LLM-as-judge — and catch regressions in CI.

* Add guardrails and defend against prompt injection and other LLM security risks.

* Deploy AI services with tracing, monitoring, cost control, and reliability patterns.

* Select the right models, frameworks, and vector stores for a given cost/latency/quality target.

## **How the Course Works**

* Rhythm: concept → live demo → guided lab → independent mini project. Roughly half of every module is hands-on building.

* Projects compound — each mini project feeds the next, and all of them converge into the capstone.

* Provider- and framework-aware: you will use multiple providers (Claude, GPT, Gemini) and open models rather than betting on one vendor.

* Cadence: five days per week for eight weeks; expect to ship working code most days.

## **Assessment & Completion**

* Weekly labs — pass/fail against explicit acceptance criteria.

* Mini projects — rubric-graded on correctness, code quality, and evaluation.

* Final capstone — a production-grade build, defended in a live demo.

* A full technology and tooling reference is provided in Appendix A.

# **2\. Curriculum Map & 8-Week Schedule**

The course is organized into four parts and fourteen modules that build from LLM fundamentals to production agentic systems, followed by a capstone week. Durations assume a five-day working week.

## **Module Map**

| Part | \# | Module | Duration | Mini Project |
| :---- | :---- | :---- | :---- | :---- |
| Part I — Foundations | M1 | LLM & AI Engineering Foundations | 3 days | Model Benchmark CLI |
|  | M2 | Prompt Engineering for Engineers | 3 days | Prompt-Powered Text Toolkit |
|  | M3 | Structured Outputs, Function & Tool Calling | 2 days | Structured Data Extraction Service |
| Part II — Knowledge & Retrieval | M4 | Embeddings & Semantic Search | 2 days | Semantic Search Engine |
|  | M5 | Vector Databases | 2 days | Production Vector Store Layer |
|  | M6 | Retrieval-Augmented Generation (RAG) | 3 days | “Chat With Your Docs” RAG App |
|  | M7 | Advanced RAG & Retrieval Optimization | 3 days | Advanced RAG Upgrade |
| Part III — Agentic AI | M8 | AI Agents — Fundamentals | 3 days | Research Assistant Agent |
|  | M9 | Agent Memory & Planning | 2 days | Personal Assistant with Memory |
|  | M10 | Agent Orchestration & Frameworks | 2 days | Orchestrated Workflow Agent |
|  | M11 | Multi-Agent Systems | 3 days | Multi-Agent Research & Content Pipeline |
| Part IV — Production AI | M12 | LLM & Agent Evaluation | 2 days | Evaluation Harness |
|  | M13 | Guardrails, Safety & Security | 2 days | Hardened AI Endpoint |
|  | M14 | Deployment, Observability & Production Best Practices | 3 days | Production Deployment |

## **Weekly Schedule**

| Week | Modules | Focus & Milestone |
| :---- | :---- | :---- |
| **Week 1** | Module 1 → Module 2 | Foundations locked in; first prompts under test. Deliverable: Model Benchmark CLI. |
| **Week 2** | Module 2 → 3 → Module 4 | Structured outputs, tool calling, and first embeddings. Deliverable: Structured Extraction Service. |
| **Week 3** | Module 5 → Module 6 | Vector store operational; first end-to-end RAG app with citations. |
| **Week 4** | Module 7 → Module 8 | Advanced RAG upgrade; first agent built from scratch. |
| **Week 5** | Module 8 → 9 → Module 10 | Agent memory, planning, and orchestration with LangGraph. |
| **Week 6** | Module 11 → Module 12 | Multi-agent pipeline; evaluation harness in CI. |
| **Week 7** | Module 13 → Module 14 | Guardrails and a fully deployed, traced, cost-monitored service. |
| **Week 8** | Capstone | Design, build, evaluate, harden, deploy, and demo a production-grade AI application. |

# **Part I — Foundations: LLMs, Prompting & Tool Use**

*Build a rock-solid mental model of how LLMs work and learn to control them precisely. By the end of Part I you can call any model, engineer reliable prompts, and force structured, tool-connected outputs — the primitives every later module depends on.*

## **Module 1: LLM & AI Engineering Foundations**

*Part I — Foundations      Duration:* **3 days**

**LEARNING OBJECTIVES**

* Explain how LLMs generate text — tokens, next-token prediction, and attention — at a working engineering level (no heavy math).

* Reason about tokenization and context windows and their direct impact on cost, latency, and quality.

* Control model behavior with inference parameters (temperature, top-p, max tokens, stop sequences, seed).

* Compare frontier vs open-weight models and select the right model for a task by cost, latency, and capability.

* Set up a professional AI engineering environment and call multiple LLM providers reliably.

**TOPICS COVERED**

* The AI engineer role vs ML engineer / data scientist; the modern GenAI application stack.

* LLM lifecycle: pretraining → supervised fine-tuning → RLHF/RLAIF; base vs instruct vs reasoning models.

* Transformer intuition: embeddings, self-attention, and next-token prediction as concepts, not equations.

* Tokenization (BPE): tokens vs words, prompt vs completion tokens, context windows and truncation.

* Decoding/inference parameters: temperature, top-p, top-k, max tokens, stop, seed, frequency/presence penalties, determinism.

* Model landscape (2025–26): Claude (Opus/Sonnet/Haiku), GPT & o-series, Gemini, Llama, Qwen, Mistral, DeepSeek; multimodal and reasoning models.

* Hosted APIs vs local inference (Ollama, LM Studio, vLLM); rate limits, pricing, latency/throughput trade-offs.

* Environment setup: Python 3.11+, uv/venv, secrets management, provider SDKs, and cost tracking basics.

**HANDS-ON LABS**

* Configure a reproducible Python project (uv/venv), .env secrets, and SDKs for OpenAI, Anthropic, and Gemini.

* Tokenizer lab: use tiktoken to count tokens and estimate the dollar cost of prompts before sending them.

* Multi-provider “hello world”: send one prompt to three providers and compare output, latency, and cost.

* Run a local model with Ollama and benchmark it against a frontier API on the same task.

* Sampling playground: sweep temperature and top-p and document effects on determinism and creativity.

| 🛠  Mini Project — Model Benchmark CLI A Python command-line tool that runs a fixed task suite (summarization, classification, code generation) across several models and emits a comparison report — latency, cost, token usage, and qualitative notes — in Markdown/CSV. Deliverable: a documented repo you reuse to pick models throughout the course. |
| :---- |

## **Module 2: Prompt Engineering for Engineers**

*Part I — Foundations      Duration:* **3 days**

**LEARNING OBJECTIVES**

* Write reliable, reproducible prompts using a structured, repeatable framework.

* Apply zero-shot, few-shot, role, and chain-of-thought techniques where each is actually appropriate.

* Design system prompts and message structures suitable for production applications.

* Diagnose and fix common failure modes: hallucination, format drift, refusals, and basic prompt injection.

* Treat prompts as versioned, tested engineering artifacts rather than throwaway text.

**TOPICS COVERED**

* Anatomy of a prompt: system / developer / user / assistant roles and message-based APIs.

* Structured prompting framework: Role → Task → Context → Constraints → Format → Examples.

* Core techniques: zero-shot, few-shot, role/persona, delimiters, and output priming.

* Reasoning techniques: chain-of-thought, self-consistency, and when reasoning models replace manual CoT.

* Controlling output: format specification, grounding, refusal handling, and hallucination reduction.

* Prompt robustness: prompt-injection and jailbreak awareness; defensive prompt design.

* Prompt management: templating (Jinja), versioning, parameterization, and prompt caching for cost.

* Prompt evaluation basics: golden sets and A/B comparison (bridge to the evaluation module).

**HANDS-ON LABS**

* Rebuild a weak prompt with the six-part framework and measure before/after quality on ten test inputs.

* Few-shot lab: force a strict output format using in-context examples and verify consistency.

* Chain-of-thought vs reasoning-model comparison on multi-step word problems.

* Prompt-injection red-team: override a system prompt, then harden it against the attack.

* Build a reusable, parameterized, version-controlled prompt template library.

| 🛠  Mini Project — Prompt-Powered Text Toolkit A small app exposing four reliable prompt “tools” — summarize, extract entities to a fixed schema, classify sentiment, and rewrite tone — each backed by a versioned prompt template and a golden test set proving it behaves consistently. |
| :---- |

## **Module 3: Structured Outputs, Function & Tool Calling**

*Part I — Foundations      Duration:* **2 days**

**LEARNING OBJECTIVES**

* Force LLMs to return valid, schema-constrained data reliably enough to power real pipelines.

* Implement function/tool calling to connect models to your code and external APIs.

* Validate, parse, and repair model output defensively.

* Understand the tool-call mechanics that later power agents.

**TOPICS COVERED**

* Why free-text output breaks pipelines; the engineering case for structured outputs.

* JSON mode, JSON Schema, and provider-native structured-output / response-format features.

* Pydantic models as the data contract; the Instructor library; validation and automatic retry on failure.

* Function/tool calling: tool schemas and the request → tool\_call → tool\_result → response loop.

* Parallel tool calls, tool-choice control, and streaming while using tools.

* Defensive handling: partial JSON, invalid values, retries, fallbacks, and guard validation.

* Cost and latency considerations of constrained generation.

**HANDS-ON LABS**

* Extract structured records (Pydantic) from messy invoices/emails with validation and retry.

* Define a tool schema (e.g., get\_weather, search) and implement the full tool-call loop by hand — no framework.

* Multi-tool routing: let the model choose among three tools and handle parallel calls.

* Build a defensive parser that repairs and re-validates malformed model JSON.

| 🛠  Mini Project — Structured Data Extraction Service A FastAPI endpoint that accepts raw documents and returns validated, typed JSON (enforced by Pydantic) with retry/repair, clean error responses, and a test suite covering malformed inputs. |
| :---- |

# **Part II — Knowledge & Retrieval: Embeddings, Vector DBs & RAG**

*Give models access to private, up-to-date knowledge. You will master embeddings and vector search, then build and optimize production Retrieval-Augmented Generation systems that answer from your own data with citations and measurable quality.*

## **Module 4: Embeddings & Semantic Search**

*Part II — Knowledge & Retrieval      Duration:* **2 days**

**LEARNING OBJECTIVES**

* Explain what embeddings are and why they enable semantic (meaning-based) search.

* Generate, store, and compare embeddings and choose an embedding model deliberately.

* Implement similarity search from scratch before adopting a vector database.

* Understand how chunking decisions drive retrieval quality.

**TOPICS COVERED**

* Vectors and embeddings: meaning as geometry; cosine similarity vs dot product vs Euclidean distance.

* Embedding models (2025–26): OpenAI text-embedding-3, Cohere, Voyage, and open models (BGE, E5, sentence-transformers); dimensions, cost, and the MTEB benchmark.

* Text preprocessing and chunking: fixed, recursive, semantic, and token-aware strategies; overlap and metadata.

* Building a naive in-memory semantic search (NumPy) to earn the intuition.

* Multilingual and domain-specific embeddings; when fine-tuning embeddings is worth it.

* Embedding pitfalls: normalization, model/version drift, and chunk-size sensitivity.

**HANDS-ON LABS**

* Compute cosine similarity by hand (NumPy) over a small corpus and visualize the clusters.

* Compare two or three embedding models on a retrieval task and measure hit rate.

* Chunking experiment: quantify how chunk size and overlap change retrieval quality.

* Build a “semantic search over my notes” script backed by an in-memory index.

| 🛠  Mini Project — Semantic Search Engine Index a document corpus, embed and store the vectors, and answer natural-language queries with ranked, scored results — then report how retrieval quality changes across chunking strategies. Built without a vector DB yet, to prove you understand the internals. |
| :---- |

## **Module 5: Vector Databases**

*Part II — Knowledge & Retrieval      Duration:* **2 days**

**LEARNING OBJECTIVES**

* Explain how vector databases index and search at scale using approximate nearest neighbors.

* Stand up and operate a production-capable vector store.

* Design collections, metadata filters, and hybrid search.

* Choose an appropriate vector database for a given use case.

**TOPICS COVERED**

* the recall-vs-latency trade-off.

* Vector DB landscape: pgvector (Postgres), Qdrant, Weaviate, Pinecone, Chroma; managed vs self-hosted.

* Collections, indexes, distance metrics, and metadata payloads.

* Metadata filtering, hybrid search (dense \+ sparse/BM25), and an introduction to reranking.

* Upserts, updates, deletes, namespaces, and multi-tenancy.

* Scaling, persistence, backups, and cost management.

**HANDS-ON LABS**

* Spin up Qdrant (Docker) and pgvector and load the Module 4 corpus into both.

* Implement metadata-filtered search (e.g., by source, date, or tag).

* Hybrid search: combine dense vectors with keyword/BM25 and compare against dense-only.

* Design a multi-tenant collection with namespace isolation.

| 🛠  Mini Project — Production Vector Store Layer A reusable Python module that abstracts a vector DB (create / upsert / query / filter / delete) with config-swappable backends (pgvector ↔ Qdrant). This layer is reused by every RAG lab that follows. |
| :---- |

## **Module 6: Retrieval-Augmented Generation (RAG)**

*Part II — Knowledge & Retrieval      Duration:* **3 days**

**LEARNING OBJECTIVES**

* Build an end-to-end RAG pipeline from ingestion to a grounded, cited answer.

* Reduce hallucination through grounding, source attribution, and honest “I don’t know” behavior.

* Evaluate RAG quality with the right metrics instead of eyeballing.

* Identify and fix the common failure points of naive RAG.

**TOPICS COVERED**

* RAG architecture end to end: ingest → chunk → embed → store → retrieve → augment → generate.

* Document loaders and parsing (PDF, HTML, DOCX, tables) and building ingestion pipelines.

* Prompt assembly with retrieved context; citations and source attribution.

* Working within context-window limits: top-k selection and context compression.

* RAG failure modes: poor retrieval, lost-in-the-middle, stale data, and conflicting sources.

* RAG evaluation: faithfulness, answer relevance, and context precision/recall with RAGAS.

* Frameworks: LangChain — and when to skip the framework.

**HANDS-ON LABS**

* Build a full RAG chatbot over a real document set (company docs / PDFs) with citations.

* Add source attribution and grounded “I don’t know” behavior for out-of-corpus questions.

* Deliberately break RAG (bad chunking/retrieval) and diagnose the failure from traces.

* Evaluate the pipeline with RAGAS across faithfulness, relevance, and context recall.

| 🛠  Mini Project — “Chat With Your Docs” RAG App A deployed RAG application that answers questions over an uploaded corpus with inline citations, a guardrail for out-of-scope questions, and a RAGAS evaluation report quantifying its quality. |
| :---- |

## **Module 7: Advanced RAG & Retrieval Optimization**

*Part II — Knowledge & Retrieval      Duration:* **3 days**

**LEARNING OBJECTIVES**

* Apply advanced retrieval techniques that measurably raise answer quality.

* Implement reranking, query transformation, and hybrid/fusion pipelines.

* Handle structured data, large corpora, and agentic retrieval.

* Optimize a RAG system systematically against a fixed test set.

**TOPICS COVERED**

* Query transformation: rewriting, HyDE, multi-query, and step-back prompting.

* Reranking: cross-encoders and Cohere Rerank; two-stage retrieval.

* Advanced chunking and indexing: parent-document, sentence-window, and hierarchical/summary indexes.

* Hybrid and fusion retrieval (reciprocal rank fusion) and metadata-aware routing.

* Agentic and multi-hop RAG; routing a query across multiple sources and tools.

* RAG over structured data: text-to-SQL and tabular retrieval.

* Contextual retrieval, long-context strategies, caching, and cost/latency tuning; overview of Graph RAG.

**HANDS-ON LABS**

* Add a cross-encoder / Cohere reranker and measure the quality lift over the baseline.

* Implement multi-query retrieval with reciprocal rank fusion.

* Compare parent-document and sentence-window retrieval on the same corpus.

* Build a router that sends a query to vector search, SQL, or web based on intent.

| 🛠  Mini Project — Advanced RAG Upgrade Take the Module 6 app and add reranking, query rewriting, and hybrid retrieval — then produce a before/after evaluation showing measurable gains on a fixed test set. This is the retrieval core of your capstone. |
| :---- |

# **Part III — Agentic AI: Agents, Memory, Orchestration & Multi-Agent Systems**

*Move from single calls to autonomous systems. You will build agents that reason, use tools, remember, plan, and collaborate — first from scratch to understand the control loop, then with the orchestration frameworks used in production.*

## **Module 8: AI Agents — Fundamentals**

*Part III — Agentic AI      Duration:* **3 days**

**LEARNING OBJECTIVES**

* Define what an agent is and judge when it is warranted versus a fixed pipeline.

* Build an agent that reasons, calls tools, and loops toward a goal.

* Implement the ReAct loop with robust tool-use error handling.

* Understand the agent control loop that frameworks later abstract away.

**TOPICS COVERED**

* Agents vs workflows vs chains; the autonomy spectrum and when NOT to use an agent.

* The agent loop: perceive → reason/plan → act (tool) → observe → repeat; termination conditions.

* The ReAct (reason \+ act) pattern: tool selection and the observation loop.

* Tools/actions: APIs, code execution, web search, and retrieval-as-a-tool.

* Building an agent from scratch (no framework) to internalize the loop.

* Failure modes: infinite loops, tool errors, hallucinated tool calls, and cost blow-ups; step and budget limits.

* Agent prompt design: system prompts and tool descriptions as interface contracts.

**HANDS-ON LABS**

* Build a minimal ReAct agent from scratch — just an LLM plus a tool loop, no framework.

* Give the agent three tools (search, calculator, retriever) and trace its decisions step by step.

* Add guardrails: max steps, a cost budget, tool-error recovery, and loop detection.

* Turn your Module 6 RAG pipeline into a “retriever tool” the agent can call.

| 🛠  Mini Project — Research Assistant Agent An agent that, given a question, plans, searches the web and a knowledge base, and returns a cited synthesis — with enforced step/cost limits and full, inspectable execution traces. |
| :---- |

## **Module 9: Agent Memory & Planning**

*Part III — Agentic AI      Duration:* **2 days**

**LEARNING OBJECTIVES**

* Give agents short-term and long-term memory.

* Implement planning and task decomposition for complex, multi-step goals.

* Manage context and state reliably across multi-turn interactions.

**TOPICS COVERED**

* Memory types: short-term (conversation), working, and long-term (semantic/episodic); memory vs the context window.

* Conversation memory strategies: buffering, summarization, and sliding windows.

* Long-term memory with vector stores: writing, retrieving, and user profiles.

* State management and context engineering; budgeting the context window.

* Planning strategies: task decomposition, plan-and-execute, reflection/self-critique, and an overview of tree-of-thought.

* Persistence: durable state, checkpoints, and resumable agents.

**HANDS-ON LABS**

* Add summarization-based conversation memory to an agent and test it on long dialogues.

* Implement long-term memory: store and retrieve facts about a user across sessions with a vector store.

* Build a plan-and-execute agent that decomposes a goal into ordered subtasks.

* Add a reflection step where the agent critiques and revises its own output.

| 🛠  Mini Project — Personal Assistant with Memory A multi-turn assistant that remembers user preferences and facts across sessions (persistent long-term memory), plans multi-step tasks, and exposes a memory-inspection view so you can see what it retained. |
| :---- |

## **Module 10: Agent Orchestration & Frameworks**

*Part III — Agentic AI      Duration:* **2 days**

**LEARNING OBJECTIVES**

* Build reliable agents using production orchestration frameworks.

* Model agent logic as explicit graphs / state machines.

* Choose the right framework and understand its trade-offs.

**TOPICS COVERED**

* Why frameworks exist: state, control flow, streaming, human-in-the-loop, and persistence.

* Framework landscape: LangGraph, OpenAI Agents SDK, CrewAI, AutoGen, LlamaIndex agents, and Pydantic AI — strengths and fit.

* Modeling agents as graphs / state machines: nodes, edges, conditional routing, and cycles.

* Human-in-the-loop: interrupts, approvals, and checkpointing.

* Streaming, tool integration, and durable execution.

* Deterministic workflows vs autonomous agents; hybrid designs that combine both.

**HANDS-ON LABS**

* Rebuild the Module 8 agent in LangGraph as an explicit state graph.

* Add a human-in-the-loop approval node before any write or external action.

* Add checkpointing so an interrupted run can resume from its last state.

| 🛠  Mini Project — Orchestrated Workflow Agent A LangGraph (or equivalent) agent with conditional branching, a human approval gate, checkpointed state, and streaming output — packaged behind an API. |
| :---- |

## **Module 11: Multi-Agent Systems**

*Part III — Agentic AI      Duration:* **3 days**

**LEARNING OBJECTIVES**

* Design systems where multiple specialized agents collaborate on a goal.

* Implement common multi-agent topologies and inter-agent communication.

* Judge when multi-agent genuinely beats single-agent — and when it doesn’t.

**TOPICS COVERED**

* Why and when to go multi-agent: specialization, separation of concerns, and parallelism — with the costs and risks.

* Topologies: supervisor/orchestrator-worker, hierarchical, sequential pipeline, network/collaborative, and debate.

* Roles and specialization: planner, researcher, coder, critic, and verifier.

* Inter-agent communication: shared state/scratchpad, handoffs, and message passing.

* Coordination pitfalls: cost explosion, error propagation, deadlocks, and context loss.

* Multi-agent frameworks: LangGraph, CrewAI, and OpenAI Agents SDK handoffs.

* Proven patterns: orchestrator-worker and evaluator-optimizer.

**HANDS-ON LABS**

* Build a supervisor \+ worker team (researcher \+ writer \+ editor) for content generation.

* Add an evaluator/critic agent that reviews work and sends it back for revision.

* Parallelize independent subtasks across worker agents and merge the results.

* Add cost/step budgets and a shared memory across the team.

| 🛠  Mini Project — Multi-Agent Research & Content Pipeline An orchestrated team (planner → researchers → writer → critic) that turns a single brief into a cited, reviewed deliverable, with per-agent tracing and a full cost report. |
| :---- |

# **Part IV — Production AI: Evaluation, Guardrails, Deployment & Observability**

*Turn prototypes into products. You will evaluate quality with real metrics, defend against prompt injection and unsafe output, then deploy AI services that are traced, monitored, cost-controlled, and reliable at scale.*

## **Module 12: LLM & Agent Evaluation**

*Part IV — Production AI      Duration:* **2 days**

**LEARNING OBJECTIVES**

* Make evaluation part of the development loop rather than an afterthought.

* Create datasets and metrics for LLM, RAG, and agent systems.

* Use LLM-as-judge responsibly and detect regressions before they ship.

**TOPICS COVERED**

* Why evaluation is the core skill of AI engineering; the eval-driven development loop.

* Types of evaluation: deterministic/rule-based, reference-based, LLM-as-judge, and human.

* Building golden datasets and test cases; capturing production traffic for evaluation.

* Metrics: task accuracy; RAG metrics (faithfulness, relevance, context recall); agent metrics (task success, tool accuracy, step count, cost).

* Tooling: promptfoo, RAGAS, DeepEval, LangSmith/Langfuse evals, and Braintrust.

* Regression testing and CI for prompts and agents; offline vs online evaluation and A/B testing.

* Pitfalls of LLM-as-judge (bias, position bias) and how to mitigate them.

**HANDS-ON LABS**

* Build a golden test set and run it with promptfoo across models and prompt versions.

* Implement an LLM-as-judge scorer with a rubric and validate it against human labels.

* Add RAGAS evaluation to the Module 7 app and track scores across versions.

* Wire evaluations into CI so a prompt change fails the build on regression.

| 🛠  Mini Project — Evaluation Harness A reusable evaluation suite — datasets, metrics, an LLM-judge, and a report — that scores any earlier project, runs in CI, and produces a scorecard comparing versions and models. |
| :---- |

## **Module 13: Guardrails, Safety & Security**

*Part IV — Production AI      Duration:* **2 days**

**LEARNING OBJECTIVES**

* Add input and output guardrails to AI applications.

* Defend against prompt injection and LLM-specific security risks.

* Handle PII, content safety, and responsible-AI requirements.

**TOPICS COVERED**

* Guardrail types: input validation, output filtering, topic/scope control, and format enforcement.

* Prompt injection and jailbreaks (direct and indirect); the OWASP Top 10 for LLM applications.

* Tooling: Guardrails AI, NeMo Guardrails, Llama Guard, and provider moderation APIs.

* PII detection and redaction; secrets handling; data-privacy and compliance basics.

* Content moderation, toxicity, and refusal design.

* Hallucination mitigation and grounding as a safety control.

* Security for tool-using agents: sandboxing, least privilege, and human approval for high-risk actions.

* Responsible AI: fairness, transparency, and usage policies.

**HANDS-ON LABS**

* Add input/output guardrails (topic restriction \+ PII redaction) to the RAG app.

* Red-team an agent with direct and indirect prompt injection, then mitigate the findings.

* Integrate a moderation / Llama Guard check into the response path.

* Sandbox a tool-using agent and require human approval for destructive actions.

| 🛠  Mini Project — Hardened AI Endpoint Take an earlier app and add a full guardrail layer — injection defense, PII redaction, moderation, and scope control — plus a red-team report documenting the attacks attempted and blocked. |
| :---- |

## **Module 14: Deployment, Observability & Production Best Practices**

*Part IV — Production AI      Duration:* **3 days**

**LEARNING OBJECTIVES**

* Ship an AI application as a reliable, observable, cost-controlled service.

* Instrument tracing, logging, monitoring, and cost tracking end to end.

* Apply production patterns for latency, reliability, and scale.

**TOPICS COVERED**

* Serving LLM apps: FastAPI, async, streaming (SSE), and background jobs/queues.

* Packaging and deployment: Docker, environment/secrets, cloud (Render/Railway/AWS/GCP), serverless; self-hosting open models (vLLM, Ollama) and when it pays off.

* Observability: tracing (LangSmith, Langfuse, Arize Phoenix, OpenTelemetry), structured logging, and spans for LLM/agent calls.

* Monitoring and cost control: token/cost dashboards, latency, error rates, rate-limit handling, and alerting.

* Reliability patterns: retries, timeouts, fallbacks, model routing, circuit breakers, and graceful degradation.

* Performance and cost optimization: prompt/semantic caching, batching, streaming, model right-sizing, and an overview of quantization.

* Scaling and concurrency; API-key and tenant management; CI/CD, staged rollout, and incident response.

**HANDS-ON LABS**

* Wrap an earlier project in FastAPI with streaming (SSE) and containerize it with Docker.

* Instrument full tracing with Langfuse or LangSmith and inspect a live agent trace.

* Add retries, timeouts, fallback model routing, and a semantic cache; measure the cost/latency impact.

* Build a cost-and-latency dashboard and add alerting on error-rate and cost thresholds.

* Deploy to a cloud host with secrets, health checks, and CI.

| 🛠  Mini Project — Production Deployment Deploy one prior project as a public, containerized, traced, cost-monitored service with retries/fallbacks, caching, a health endpoint, and a basic operations dashboard. |
| :---- |

# **Capstone Projects (Week 8\)**

The capstone is where every skill converges. Working solo or in a small team, you will ship one production-grade AI application that integrates the full lifecycle: LLM interaction, retrieval, agentic reasoning, evaluation, guardrails, deployment, and observability. You may pick from the options below or propose your own subject to mentor approval.

## **Every Capstone Must Include**

* A real, non-trivial problem with a genuine knowledge source or dataset.

* Retrieval (RAG) and/or one or more tool-using agents as the core logic.

* Structured outputs and robust, defensive error handling.

* An evaluation suite with metrics and a version-comparison scorecard.

* Guardrails appropriate to the domain (injection defense, PII redaction, moderation, scope control).

* Deployment as a containerized, traced, and cost-monitored service.

* Documentation, an architecture diagram, and a live demo.

## **Capstone Options**

| Option | Description |
| :---- | :---- |
| **1\. Enterprise Knowledge Assistant** | An agentic RAG system over a company’s docs, wikis, and tickets — with citations, access control, long-term memory, evaluation, and full observability. |
| **2\. Autonomous Research & Report Agent** | A multi-agent system that researches a topic across web and internal sources and produces a cited, reviewed report, with a human-in-the-loop approval gate. |
| **3\. AI Customer-Support Agent** | A tool-using agent wired to a mock CRM/order API, with RAG over help docs, guardrails, escalation to a human, memory, and end-to-end evaluation and monitoring. |
| **4\. Code & Data Analysis Agent** | An agent that answers questions over a database (text-to-SQL) and a codebase (RAG), executes code in a sandbox, and self-verifies its results. |
| **5\. Domain Vertical Copilot** | A legal, medical, or finance copilot combining RAG and agents with strict guardrails, citations, careful refusal behavior, and an evaluation harness tuned to domain risk. |

## **Deliverables & Grading**

* Source repository with a clear README and architecture document.

* Evaluation report / scorecard demonstrating measured quality.

* A deployed URL or reproducible demo.

* A short presentation walking through design decisions and trade-offs.

**Capstone Rubric**

# **Appendix A — Technology & Tooling Stack**

The course is tool-aware and current for 2025–2026. Students learn transferable concepts first, then apply them with the following industry-standard stack. Tools are illustrative; equivalent alternatives are acceptable.

| Category | Tools & Technologies |
| :---- | :---- |
| **Language & core** | Python 3.11+, uv/venv, Pydantic, FastAPI, async I/O |
| **LLM providers** | Anthropic (Claude Opus/Sonnet/Haiku), OpenAI (GPT & o-series), Google (Gemini) |
| **Open / local models** | Llama, Qwen, Mistral, DeepSeek via Ollama, LM Studio, and vLLM |
| **Structured output** | JSON Schema, native structured outputs, Instructor, Pydantic validation |
| **Embeddings** | OpenAI text-embedding-3, Cohere, Voyage, BGE/E5, sentence-transformers |
| **Vector databases** | pgvector, Qdrant, Weaviate, Pinecone, Chroma |
| **RAG & retrieval** | LangChain, Cohere Rerank, hybrid/BM25, RRF fusion |
| **Agents & orchestration** | LangGraph, OpenAI Agents SDK, CrewAI |
| **Evaluation** | promptfoo, RAGAS, DeepEval, LangSmith, Braintrust |
| **Guardrails & safety** | Guardrails AI, NeMo Guardrails, Llama Guard, provider moderation APIs |
| **Observability** | LangSmith, Langfuse, Arize Phoenix, OpenTelemetry |
| **Deployment** | Docker, FastAPI, Render/Railway/AWS/GCP, serverless, vLLM serving |

# **Appendix B — Continued Learning**

* Provider docs as primary sources: Anthropic, OpenAI, and Google AI cookbooks and prompting/tool-use guides.

* Framework docs: LangGraph, CrewAI, and the OpenAI Agents SDK.

* Evaluation & observability: RAGAS, LangSmith/Langfuse, and promptfoo guides.

* Security: the OWASP Top 10 for LLM Applications.

* Practice: reproduce each mini project against a new dataset to cement retention, then extend the capstone into a portfolio piece.

*End of Curriculum  ·  Prompt to Production — AlrightTech*