// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`drag-node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      <span>{label}</span>
    </div>
  );
};
