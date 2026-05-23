import { Handle, Position } from "reactflow";
import { X } from "lucide-react";
import { useStore } from "../../../../shared/store/store";
import { NodeIcon } from "./nodeIcons";

export const BaseNode = ({
  id,
  nodeType,
  title,
  children,
  inputs = [],
  outputs = [],
}) => {
  const removeNode = useStore((state) => state.removeNode);

  return (
    <div className="node-card">
      <div className="node-head">
        <span className="flex items-center gap-1.5">
          <NodeIcon nodeType={nodeType} title={title} size={14} /> {title}
        </span>
        <button
          type="button"
          onClick={() => removeNode(id)}
          className="rounded-sm px-1 text-xs leading-none text-muted transition hover:bg-slate-200 hover:text-slate-900"
          aria-label={`Close ${title} node`}
          title="Remove node"
        >
          <X size={12} />
        </button>
      </div>

      {inputs.map((input, idx) => {
        const topStyle =
          input.style?.top || `${((idx + 1) * 100) / (inputs.length + 1)}%`;
        return (
          <Handle
            key={`${id}-in-${input.id || idx}`}
            type="target"
            position={input.position || Position.Left}
            id={input.id || `${id}-input-${idx}`}
            style={{ ...input.style, top: topStyle }}
          />
        );
      })}

      <div className="node-body">{children}</div>

      {outputs.map((output, idx) => {
        const topStyle =
          output.style?.top || `${((idx + 1) * 100) / (outputs.length + 1)}%`;
        return (
          <Handle
            key={`${id}-out-${output.id || idx}`}
            type="source"
            position={output.position || Position.Right}
            id={output.id || `${id}-output-${idx}`}
            style={{ ...output.style, top: topStyle }}
          />
        );
      })}
    </div>
  );
};
