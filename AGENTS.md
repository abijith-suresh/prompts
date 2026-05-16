# AGENTS.md

## What this repo is

This is a personal collection of reusable AI prompts for coding agents (pi,
Claude Code, Codex, etc.) and chat applications (ChatGPT, Claude.ai,
Perplexity, etc.). Each prompt is a standalone file or directory that can be
copied and pasted into the target tool.

---

## Prompt structure

Prompts live in top-level directories organised by tool or category:

```
<tool-or-category>/
  <prompt-name>.md         ← the prompt definition (required)
  README.md                ← usage notes, example prompts (optional)
  references/              ← optional supporting docs
```

When a tool has a single prompt, it may live directly at the root level as
`<tool-name>.md`. When it has multiple prompts, group them in a directory.

### Prompt file format

Each prompt file should start with a header comment or a brief description
block explaining:

- **Purpose** — what this prompt does and when to use it
- **Target** — which tool/agent it is designed for
- **Instructions** — how to use it (copy-paste, variable substitution, etc.)

Example:

```markdown
# Prompt: Summarise a PR

Target: pi, Claude Code, Codex
Purpose: Generate a concise summary of a pull request's changes.

Copy the following into the agent's chat:

---
Review the changes in this PR and provide:
1. A one-line summary
2. Key files changed and why
3. Any risks or concerns
---
```

---

## Design principles

- **Self-contained**: each prompt should work on its own without requiring other
  prompts from this collection.
- **Tool-aware**: prompts should note which tool/agent they're designed for,
  especially when they use tool-specific features or syntax.
- **Copy-paste friendly**: prompts should be easy to copy verbatim. Avoid
  complex variable substitution unless necessary for the prompt to work.
- **Iterate over perfect**: start with a working prompt and refine over time.
  Version history is tracked in CHANGELOG.md.

---

## Adding or updating a prompt

1. Create or edit the prompt file in the appropriate category directory
2. Update the catalog table in the root `README.md` if needed
3. Add an entry to `CHANGELOG.md` under `[Unreleased]`. If a
   `### Added — YYYY-MM-DD` or `### Changed — YYYY-MM-DD` section with
   today's date already exists, add the entry there instead of creating a
   duplicate section.

---

## Committing and pushing

Use the `commit` skill to create clean conventional commits. Push to a
feature branch and open a PR — never push directly to `main`.
