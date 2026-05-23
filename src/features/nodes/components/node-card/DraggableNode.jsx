// Import the component variant instead
import { NodeIcon } from "../base/nodeIcons";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`drag-node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      {/* Pass props straight to the custom Icon component */}
      <NodeIcon nodeType={type} title={label} size={16} />
      <span>{label}</span>
    </div>
  );
};
