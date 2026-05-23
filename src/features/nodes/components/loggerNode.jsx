import { useStore } from "../../../shared/store/store";
import { BaseNode } from "./BaseNode";

export const LoggerNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const logLevel = data?.logLevel || "info";

  return (
    <BaseNode
      id={id}
      title="Logger"
      inputs={[{ id: `${id}-log-data` }]}
      outputs={[{ id: `${id}-passthrough` }]}
    >
      <div>
        <label>
          Severity:
          <select
            value={logLevel}
            onChange={(e) => updateNodeField(id, "logLevel", e.target.value)}
          >
            <option value="info">INFO</option>
            <option value="warn">WARN</option>
            <option value="error">ERROR</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
