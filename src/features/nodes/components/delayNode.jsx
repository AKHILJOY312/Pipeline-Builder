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
        <label className="field-wrap">
          <span className="field-label">Timeout (ms)</span>
          <input
            className="field-input"
            type="number"
            value={delayTime}
            onChange={(e) => updateNodeField(id, "delayTime", e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
