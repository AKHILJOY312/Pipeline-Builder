// features/pipeline/components/SubmitButton.jsx
import { useState } from "react";
import { useReactFlow } from "reactflow";
import { toast } from "react-hot-toast";
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

      // Render a highly styled structural breakdown using inline JSX inside the toast
      toast.success(
        () => (
          <div className="flex flex-col gap-1 text-xs text-gray-700">
            <span className="font-bold text-emerald-600 text-sm mb-1">
              Pipeline Analysis Complete!
            </span>
            <div>
              • Total Nodes Parsed:{" "}
              <span className="font-semibold">{num_nodes}</span>
            </div>
            <div>
              • Total Connected Edges:{" "}
              <span className="font-semibold">{num_edges}</span>
            </div>
            <div className="mt-1 font-medium flex items-center gap-1">
              • Topology Check:
              {is_dag ? (
                <span className="text-emerald-600 font-bold">✔️ Valid DAG</span>
              ) : (
                <span className="text-red-500 font-bold">
                  ❌ Cyclic Loop Detected
                </span>
              )}
            </div>
          </div>
        ),
        { duration: 6000 },
      ); // Kept open longer so users can read metrics comfortably
    } catch (error) {
      console.error("Pipeline processing crash:", error);

      const errorMessage =
        error.response?.data?.detail ||
        error.message ||
        "Could not establish connection with FastAPI engine.";

      // Display clean error popup
      toast.error(`Submission Failed: ${errorMessage}`, { duration: 4000 });
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
