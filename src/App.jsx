import { PipelineToolbar } from "./features/pipeline/components/toolbar";
import { PipelineUI } from "./features/pipeline/canvas/PipelineUI";
import { SubmitButton } from "./features/pipeline/components/submit";

function App() {
  return (
    <div className="app-shell">
      <div className="app-panel">
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
