import { PipelineToolbar } from "./features/pipeline/components/toolbar";
import { PipelineUI } from "./features/pipeline/canvas/ui";
import { SubmitButton } from "./features/pipeline/components/submit";

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
