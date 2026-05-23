// toolbar.js

import { DraggableNode } from "../../nodes/components/draggableNode";

export const PipelineToolbar = () => {
  return (
    <div>
      <div className="toolbar-grid">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        <DraggableNode type="apiNode" label="API Request" />
        <DraggableNode type="delayNode" label="Delay" />
        <DraggableNode type="filterNode" label="Filter" />
        <DraggableNode type="loggerNode" label="Logger" />
        <DraggableNode type="databaseNode" label="Database" />
      </div>
    </div>
  );
};
