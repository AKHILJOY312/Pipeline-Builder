import {
  Bot,
  Braces,
  Clock3,
  Database,
  FileInput,
  FileOutput,
  Filter,
  Globe,
  Logs,
  Type,
} from "lucide-react";

const iconByType = {
  customInput: FileInput,
  llm: Bot,
  customOutput: FileOutput,
  text: Type,
  apiNode: Globe,
  delayNode: Clock3,
  filterNode: Filter,
  loggerNode: Logs,
  databaseNode: Database,
};

const iconByTitle = {
  Input: FileInput,
  LLM: Bot,
  Output: FileOutput,
  Text: Type,
  "API Request": Globe,
  Delay: Clock3,
  Filter: Filter,
  Logger: Logs,
  Database: Database,
};

// Turn this into a proper, PascalCase React Component
export const NodeIcon = ({ nodeType, title, size = 14 }) => {
  const IconComponent = iconByType[nodeType] || iconByTitle[title] || Braces;
  return <IconComponent size={size} />;
};
