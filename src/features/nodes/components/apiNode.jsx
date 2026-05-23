// import { Position } from "reactflow";
import { useStore } from "../../../shared/store/store";
import { BaseNode } from "./BaseNode";

export const APINode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const method = data?.method || "GET";
  const url = data?.url || "https://api.service.com/v1";

  return (
    <BaseNode
      id={id}
      title="API Request"
      inputs={[{ id: `${id}-trigger` }, { id: `${id}-payload` }]}
      outputs={[{ id: `${id}-response` }, { id: `${id}-error` }]}
    >
      <div>
        <label style={{ display: "block", marginBottom: "4px" }}>
          Method:
          <select
            value={method}
            onChange={(e) => updateNodeField(id, "method", e.target.value)}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        <label style={{ display: "block" }}>
          Endpoint:
          <input
            type="text"
            value={url}
            onChange={(e) => updateNodeField(id, "url", e.target.value)}
            style={{ width: "100%", boxSizing: "border-box" }}
          />
        </label>
      </div>
    </BaseNode>
  );
};
