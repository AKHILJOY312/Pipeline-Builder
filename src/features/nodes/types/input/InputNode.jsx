import { Position } from "reactflow";
import { useStore } from "../../../../shared/store/store";
import { BaseNode } from "../../components/base/BaseNode";

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  // Read clean defaults or live data directly from global store
  const currName = data?.inputName || id.replace("customInput-", "input_");
  const inputType = data?.inputType || "Text";

  return (
    <BaseNode
      id={id}
      nodeType="customInput"
      title="Input"
      outputs={[{ id: `${id}-value`, position: Position.Right }]}
    >
      <div>
        <label className="field-wrap">
          <span className="field-label">Name</span>
          <input
            className="field-input"
            type="text"
            value={currName}
            onChange={(e) => updateNodeField(id, "inputName", e.target.value)}
          />
        </label>
        <label className="field-wrap">
          <span className="field-label">Type</span>
          <select
            className="field-input"
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
