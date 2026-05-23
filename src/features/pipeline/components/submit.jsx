// features/pipeline/components/Submit.js
import axios from "axios";
import { useReactFlow } from "reactflow";

/**
 * Pure JavaScript utility function to post the graph layout topology
 */
const submitPipelineData = async (nodes, edges) => {
  if (!nodes || nodes.length === 0) {
    alert("Pipeline canvas is currently empty.");
    return;
  }

  try {
    const payload = {
      nodes: nodes.map((node) => ({
        id: node.id,
        type: node.type || node.data?.type || "custom",
      })),
      edges: edges.map((edge) => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
      })),
    };

    const response = await axios.post(
      "http://localhost:8000/pipelines/parse",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const { num_nodes, num_edges, is_dag } = response.data;

    // Explicit browser structural alert loop
    alert(
      `Pipeline Topology Analysis Successfully Processed!\n\n` +
        `• Total Nodes Parsed: ${num_nodes}\n` +
        `• Total Connected Edges: ${num_edges}\n` +
        `• Valid Graph Topology (DAG): ${is_dag ? "✔️ TRUE" : "❌ FALSE (Cyclic Loop Detected)"}`,
    );
  } catch (error) {
    console.error("Pipeline processing crash:", error);
    const serverErrorMessage =
      error.response?.data?.detail ||
      "Could not establish connection with FastAPI engine.";
    alert(`Pipeline Processing Failed:\n${serverErrorMessage}`);
  }
};

/**
 * Capitalized Component definition safely exported to your App.jsx shell layout
 */
export const SubmitButton = () => {
  // Pull runtime node tracking methods from React Flow Context Hooks
  const { getNodes, getEdges } = useReactFlow();

  const handlePipelineSubmission = async () => {
    const activeNodes = getNodes();
    const activeEdges = getEdges();

    // Pass extracted topologies to operational logic block safely
    await submitPipelineData(activeNodes, activeEdges);
  };

  return (
    <div className="submit-shell flex items-center justify-center p-4">
      <button
        type="button"
        onClick={handlePipelineSubmission}
        className="btn-primary px-6 py-2 bg-brand hover:bg-brand-strong text-white text-xs font-semibold rounded shadow transition-all duration-150"
      >
        Submit Pipeline
      </button>
    </div>
  );
};
