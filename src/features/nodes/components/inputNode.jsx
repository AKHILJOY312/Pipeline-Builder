import { Position } from "reactflow";
import { useStore } from "../../../shared/store/store";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  // Read clean defaults or live data directly from global store
  const currName = data?.inputName || id.replace("customInput-", "input_");
  const inputType = data?.inputType || "Text";

  return (
    <BaseNode
      id={id}
      title="Input"
      outputs={[{ id: `${id}-value`, position: Position.Right }]}
    >
      <div>
        <label style={{ display: "block", marginBottom: "4px" }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={(e) => updateNodeField(id, "inputName", e.target.value)}
          />
        </label>
        <label style={{ display: "block" }}>
          Type:
          <select
            value={inputType}
            onChange={(e) => updateNodeField(id, "inputType", e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
