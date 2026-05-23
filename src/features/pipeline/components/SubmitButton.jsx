// features/pipeline/components/SubmitButton.jsx
import { useState } from "react";
import { useReactFlow } from "reactflow";
import { toast } from "react-hot-toast";
import { submitPipelineTopology } from "../services/pipelineApi";

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePipelineSubmission = async () => {
    if (isSubmitting) return;

    setErrorMessage("");
    setStatusMessage("Analyzing graph topology...");
    setIsSubmitting(true);
    try {
      const activeNodes = getNodes();
      const activeEdges = getEdges();

      const { num_nodes, num_edges, is_dag } = await submitPipelineTopology(
        activeNodes,
        activeEdges,
      );

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
      );
      setStatusMessage("Analysis complete.");
    } catch (error) {
      console.error("Pipeline processing crash:", error);

      const message =
        error.message || "Could not establish connection with FastAPI engine.";
      setErrorMessage(message);
      setStatusMessage("Analysis failed.");
      toast.error(`Submission Failed: ${message}`, { duration: 4000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="submit-shell flex flex-col items-center justify-center p-4">
      <button
        type="button"
        disabled={isSubmitting}
        onClick={handlePipelineSubmission}
        /* 
          UPDATED HOVER UTILITIES: 
          - hover:-translate-y-0.5 & hover:scale-105: Gives tactile 3D movement
          - hover:shadow-lg: Enhances depth contrast
          - duration-200 ease-out: Smooths the transition framework
        */
        className={`px-6 py-2.5 text-white text-xs font-semibold rounded shadow-md transform transition-all duration-200 ease-out
          ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed opacity-70 pointer-events-none shadow-none translate-y-0 scale-100"
              : "bg-slate-900 hover:bg-slate-800 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg active:scale-95 active:translate-y-0"
          }`}
      >
        {isSubmitting ? "Processing Graph..." : "Submit Pipeline"}
      </button>

      <div className="text-center min-h-5 mt-2">
        {statusMessage && (
          <p
            className="text-xs text-slate-600 animate-pulse"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-xs font-medium text-red-600" aria-live="polite">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};
