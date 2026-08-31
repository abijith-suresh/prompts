import type { MdastPluginDefinition } from "satteri";

export const removeLeadingHeading = {
  name: "remove-leading-heading",
  before(root, context) {
    const firstNode = root.children[0];
    if (firstNode?.type === "heading" && firstNode.depth === 1) {
      context.removeNode(firstNode);
    }
  },
} satisfies MdastPluginDefinition;
