// toolbar.jsx

import { DraggableNode } from "../../nodes/components/node-card/DraggableNode";
import { toolbarNodes } from "../../nodes/registry/toolbarNodes";

export const PipelineToolbar = () => {
  return (
    <div>
      <div className="toolbar-grid">
        {toolbarNodes.map((node) => (
          <DraggableNode key={node.type} type={node.type} label={node.label} />
        ))}
      </div>
    </div>
  );
};
