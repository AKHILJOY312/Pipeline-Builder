import { nodeRegistry } from "./nodeRegistry";

export const toolbarNodes = nodeRegistry.map(({ type, label }) => ({
  type,
  label,
}));
