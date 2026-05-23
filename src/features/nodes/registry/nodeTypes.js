import { nodeRegistry } from "./nodeRegistry";

export const nodeTypes = nodeRegistry.reduce((acc, node) => {
  acc[node.type] = node.component;
  return acc;
}, {});
