import { APINode } from "../types/api/APINode";
import { DatabaseNode } from "../types/database/DatabaseNode";
import { DelayNode } from "../types/delay/DelayNode";
import { FilterNode } from "../types/filter/FilterNode";
import { InputNode } from "../types/input/InputNode";
import { LLMNode } from "../types/llm/LLMNode";
import { LoggerNode } from "../types/logger/LoggerNode";
import { OutputNode } from "../types/output/OutputNode";
import { TextNode } from "../types/text/TextNode";

export const nodeRegistry = [
  { type: "customInput", label: "Input", component: InputNode },
  { type: "llm", label: "LLM", component: LLMNode },
  { type: "customOutput", label: "Output", component: OutputNode },
  { type: "text", label: "Text", component: TextNode },
  { type: "apiNode", label: "API Request", component: APINode },
  { type: "delayNode", label: "Delay", component: DelayNode },
  { type: "filterNode", label: "Filter", component: FilterNode },
  { type: "loggerNode", label: "Logger", component: LoggerNode },
  { type: "databaseNode", label: "Database", component: DatabaseNode },
];
