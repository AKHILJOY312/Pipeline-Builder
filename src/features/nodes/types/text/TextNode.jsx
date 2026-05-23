import { Position } from "reactflow";
import { useStore } from "../../../../shared/store/store";
import { BaseNode } from "../../components/base/BaseNode";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const currText = data?.text || "{{input}}";

  return (
    <BaseNode
      id={id}
      nodeType="text"
      title="Text"
      outputs={[{ id: `${id}-output`, position: Position.Right }]}
    >
      <div>
        <label className="field-wrap">
          <span className="field-label">Text</span>
          <input
            className="field-input"
            type="text"
            value={currText}
            onChange={(e) => updateNodeField(id, "text", e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
