export const extractVariables = (text) => {
  if (!text || typeof text !== "string") return [];

  const regex = /\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g;
  const uniqueVariables = new Set();
  let match;

  while ((match = regex.exec(text)) !== null) {
    uniqueVariables.add(match[1]);
  }

  return Array.from(uniqueVariables);
};
