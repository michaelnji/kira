AGENTS.md

AI Agent Operational Guidelines for Repository

This document summarizes all coding standards, architectural patterns, workflows, and rules for AI agents working in this repository. Agents must reference the full coding-standards/ folder for detailed instructions and examples. This file serves as a high-level summary and enforcement guide.

⸻

1. Project Initialization (Highest Priority)
	•	Install dependencies using Bun.
	•	Only add additional libraries/plugins if explicitly required by the feature/fix.
	•	For animation: use Anime.js (basic) or GSAP (complex).
	•	No project initialization beyond cloning the template.

Enforcement:
	•	Do not assume project structure; always use template structure.
	•	Do not introduce unrelated packages without user approval.

⸻

2. Feature/Fix Implementation Workflow
	1.	Receive user prompt.
	2.	Ask exactly 5 clarifying questions.
	3.	Wait for answers before proceeding.
	4.	Create a feature/fix plan including tasks, files affected, data flow, styling, and testing.
	5.	Execute plan following all rules.

Enforcement:
	•	Do not start coding before 5 questions answered.
	•	Do not assume any missing requirements.
	•	Reference coding-standards/09-feature-fix-implementation.md for full workflow details.

⸻

3. Component Architecture
	•	Components must be decomposed, typed, tested, and styled according to coding-standards/03-component-architecture.md.
	•	Use composables for reusable logic.

⸻

4. Page Architecture
	•	Pages are UI-only; extract logic into composables.
	•	Human-friendly names.
	•	Styling follows Tailwind rules.
	•	Reference coding-standards/05-page-architecture.md.

⸻

5. Server Architecture
	•	Minimal layers: api, services, utils, types.
	•	No repositories.
	•	Return Nexus-Req responses.
	•	Reference coding-standards/06-server-architecture.md and 07-server-response-standard.md.

⸻

6. Client Data Fetching
	•	Stores = main data layer.
	•	Composables = facade to consumers.
	•	Reference coding-standards/08-client-data-fetching-architecture.md.

⸻

7. Testing Policies
	•	Use Vitest and StepCI as per coding-standards/08-client-data-fetching-architecture.md and coding-standards/09-feature-fix-implementation.md.
	•	Follow endpoint testing rules.

⸻

8. Styling Rules
	•	Tailwind-first; custom CSS only in assets/css/.
	•	See coding-standards/04-styling-policy.md.

⸻

9. Utility Functions & Libraries
	•	Allowed libraries: VueUse, date-fns, nanoid.
	•	Any other library requires explicit user approval.
	•	Reference coding-standards/11-utility-functions.md.

⸻

10. Do’s and Don’ts
	•	Follow coding-standards/10-dos-and-donts.md strictly.
	•	All non-negotiable rules are documented there.

⸻

Enforcement Hierarchy
	1.	User prompt → 5 clarifying questions → plan → execution
	2.	Reference relevant coding-standards/ file for each layer and workflow
	3.	Always request user clarification if any ambiguity arises

Strict: This file is a summary. Full instructions, examples, and enforcement rules exist in the coding-standards/ folder. Agents must reference the folder for implementation.

