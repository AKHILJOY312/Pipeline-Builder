import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  const inputs = [
    { id: `${id}-system`, position: Position.Left, style: { top: "33%" } },
    { id: `${id}-prompt`, position: Position.Left, style: { top: "66%" } },
  ];

  const outputs = [{ id: `${id}-response`, position: Position.Right }];

  return (
    <BaseNode id={id} title="LLM" inputs={inputs} outputs={outputs}>
      <div className="text-[11px] leading-4 text-[var(--color-muted)]">
        <span>
          This is an LLM block. Handles system configs and context prompts.
        </span>
      </div>
    </BaseNode>
  );
};
