import { Position } from "reactflow";
import { useStore } from "../../../shared/store/store";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const currName = data?.outputName || id.replace("customOutput-", "output_");
  const outputType = data?.outputType || "Text";

  return (
    <BaseNode
      id={id}
      nodeType="customOutput"
      title="Output"
      inputs={[{ id: `${id}-value`, position: Position.Left }]}
    >
      <div>
        <label className="field-wrap">
          <span className="field-label">Name</span>
          <input
            className="field-input"
            type="text"
            value={currName}
            onChange={(e) => updateNodeField(id, "outputName", e.target.value)}
          />
        </label>
        <label className="field-wrap">
          <span className="field-label">Type</span>
          <select
            className="field-input"
            value={outputType}
            onChange={(e) => updateNodeField(id, "outputType", e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
