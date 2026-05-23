import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  children,
  inputs = [],
  outputs = [],
}) => {
  return (
    <div className="node-card">
      <div className="node-head">
        <span>{title}</span>
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
