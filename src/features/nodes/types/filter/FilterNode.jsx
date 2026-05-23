import { useStore } from "../../../../shared/store/store";
import { BaseNode } from "../../components/base/BaseNode";

export const FilterNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const condition = data?.condition || "==";

  return (
    <BaseNode
      id={id}
      nodeType="filterNode"
      title="Filter"
      inputs={[{ id: `${id}-data` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
    >
      <div>
        <label className="field-wrap">
          <span className="field-label">Condition</span>
          <select
            className="field-input"
            value={condition}
            onChange={(e) => updateNodeField(id, "condition", e.target.value)}
          >
            <option value="==">Equals</option>
            <option value="!=">Not Equals</option>
            <option value=">">Greater Than</option>
            <option value="<">Less Than</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
