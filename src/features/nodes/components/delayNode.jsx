import { useStore } from "../../../shared/store/store";
import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const delayTime = data?.delayTime || "1000";

  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <div>
        <label>
          Timeout (ms):
          <input
            type="number"
            value={delayTime}
            onChange={(e) => updateNodeField(id, "delayTime", e.target.value)}
            style={{ width: "100%", boxSizing: "border-box" }}
          />
        </label>
      </div>
    </BaseNode>
  );
};
