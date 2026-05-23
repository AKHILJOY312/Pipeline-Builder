import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  children,
  inputs = [],
  outputs = [],
}) => {
  return (
    <div
      style={{
        width: 200,
        minHeight: 80,
        border: "1px solid black",
        backgroundColor: "#fff",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      {/* Node Header Layout */}
      <div
        style={{
          borderBottom: "1px solid #ccc",
          padding: "5px",
          fontWeight: "bold",
          backgroundColor: "#f3f4f6",
        }}
      >
        <span>{title}</span>
      </div>

      {/* Target/Input Handles (Left Side Defaults) */}
      {inputs.map((input, idx) => {
        // Fallback calculation handles vertical distribution if top isn't explicitly configured
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

      {/* Node Core Body */}
      <div style={{ padding: "10px" }}>{children}</div>

      {/* Source/Output Handles (Right Side Defaults) */}
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
