// draggableNode.js

import { getNodeIcon } from "./nodeIcons";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
    event.dataTransfer.effectAllowed = "move";
  };
  const Icon = getNodeIcon(type, label);

  return (
    <div
      className={`drag-node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      <Icon size={16} />
      <span>{label}</span>
    </div>
  );
};
