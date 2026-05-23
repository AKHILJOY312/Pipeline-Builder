import { PipelineToolbar } from "./features/pipeline/components/Toolbar";
import { PipelineUI } from "./features/pipeline/canvas/PipelineUI";
import { SubmitButton } from "./features/pipeline/components/SubmitButton";
import { ReactFlowProvider } from "reactflow";
function App() {
  return (
    <ReactFlowProvider>
      <div className="app-shell">
        <div className="app-panel">
          <PipelineToolbar />
          <PipelineUI />
          <SubmitButton />
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default App;
