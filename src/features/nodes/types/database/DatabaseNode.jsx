import { useStore } from "../../../../shared/store/store";
import { BaseNode } from "../../components/base/BaseNode";

export const DatabaseNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const operation = data?.operation || "insert";

  return (
    <BaseNode
      id={id}
      nodeType="databaseNode"
      title="Database"
      inputs={[{ id: `${id}-document` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <div>
        <label className="field-wrap">
          <span className="field-label">Operation</span>
          <select
            className="field-input"
            value={operation}
            onChange={(e) => updateNodeField(id, "operation", e.target.value)}
          >
            <option value="insert">Insert</option>
            <option value="update">Update One</option>
            <option value="find">Find Match</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
