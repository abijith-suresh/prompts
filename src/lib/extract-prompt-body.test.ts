import { describe, expect, it } from "vitest";
import { extractPromptBody } from "./extract-prompt-body";

const clarifyPrompt = `---
name: Clarify
description: Rewrite rough user prompts into clear, precise prompts for a coding agent using terminology compression.
---

# Clarify

Copy the following into your agent's chat:

---

You rewrite rough, plain-language user prompts into clear, precise prompts for a coding agent.

Your job is terminology compression and clarity, not invention.
---
`;

const helloWorldPrompt = `---
name: Hello World
description: A sample prompt to verify the docs site builds and renders correctly.
---

# Hello World

Copy the following into your agent's chat:

---

Hello! Please introduce yourself and describe what you can help me with today.
---
`;

describe("extractPromptBody", () => {
  it("extracts the copyable prompt body from clarify", () => {
    expect(extractPromptBody(clarifyPrompt)).toBe(
      "You rewrite rough, plain-language user prompts into clear, precise prompts for a coding agent.\n\nYour job is terminology compression and clarity, not invention."
    );
  });

  it("extracts the copyable prompt body from hello-world", () => {
    expect(extractPromptBody(helloWorldPrompt)).toBe(
      "Hello! Please introduce yourself and describe what you can help me with today."
    );
  });

  it("returns null when no delimited body is present", () => {
    expect(
      extractPromptBody("---\nname: Test\ndescription: Test\n---\n\n# Test\n\nNo copy block.")
    ).toBeNull();
  });
});
