// features/pipeline/components/SubmitButton.jsx
import { useState } from "react";
import { useReactFlow } from "reactflow";
import { submitPipelineTopology } from "../services/pipelineApi";

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePipelineSubmission = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const activeNodes = getNodes();
      const activeEdges = getEdges();

      const { num_nodes, num_edges, is_dag } = await submitPipelineTopology(
        activeNodes,
        activeEdges,
      );

      alert(
        `Pipeline Topology Analysis Successfully Processed!\n\n` +
          `• Total Nodes Parsed: ${num_nodes}\n` +
          `• Total Connected Edges: ${num_edges}\n` +
          `• Valid Graph Topology (DAG): ${is_dag ? "✔️ TRUE" : "❌ FALSE (Cyclic Loop Detected)"}`,
      );
    } catch (error) {
      console.error("Pipeline processing crash:", error);

      const errorMessage =
        error.response?.data?.detail ||
        error.message ||
        "Could not establish connection with FastAPI engine.";

      alert(`Pipeline Processing Failed:\n${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="submit-shell flex items-center justify-center p-4">
      <button
        type="button"
        disabled={isSubmitting}
        onClick={handlePipelineSubmission}
        className={`px-6 py-2 text-white text-xs font-semibold rounded shadow transition-all duration-150
          ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed opacity-70"
              : "bg-brand hover:bg-brand-strong active:scale-95"
          }`}
      >
        {isSubmitting ? "Processing Graph..." : "Submit Pipeline"}
      </button>
    </div>
  );
};
