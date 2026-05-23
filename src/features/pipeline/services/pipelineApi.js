import axios from "axios";
import { API_ROUTES } from "../../../shared/constants/apiRoutes";

export const submitPipelineTopology = async (nodes, edges) => {
  if (!nodes?.length) {
    throw new Error("Pipeline canvas is currently empty.");
  }

  // Pure data sanitization: Send only exactly what the backend demands
  const payload = {
    nodes: nodes.map(({ id, type, data }) => ({
      id,
      type: type || data?.nodeType || "custom",
    })),
    edges: edges.map(({ id, source, target }) => ({
      id,
      source,
      target,
    })),
  };

  const { data } = await axios.post(API_ROUTES.PIPELINES.PARSE, payload, {
    headers: { "Content-Type": "application/json" },
  });

  return data;
};
