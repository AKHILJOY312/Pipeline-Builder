import { useEffect, useRef, useMemo } from "react";
import { Position } from "reactflow";
import { useStore } from "../../../../shared/store/store";
import { BaseNode } from "../../components/base/BaseNode";
import { extractVariables } from "../../utils/extractVariables";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const textRef = useRef(null);

  // Fallback to a default template placeholder string if store state is empty
  const currentText = data?.text || "{{input}}";

  // Parse variables out of text string state (memoized to prevent handle flicker)
  const variables = useMemo(() => extractVariables(currentText), [currentText]);

  // Sizing Calculation Pass: Expand or contract the textarea based on content volume
  useEffect(() => {
    const textarea = textRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height calculation bounds
      textarea.style.height = `${textarea.scrollHeight}px`; // Bind calculated scrolling depth height
    }
  }, [currentText]);

  // Map extracted variables to clean input configs for BaseNode to map into handles
  const dynamicInputs = variables.map((varName) => ({
    id: `${id}-param-${varName}`,
    position: Position.Left,
  }));

  return (
    <BaseNode
      id={id}
      nodeType="text"
      title="Text Parser"
      inputs={dynamicInputs}
      outputs={[{ id: `${id}-output`, position: Position.Right }]}
    >
      <div className="w-full flex flex-col gap-1.5">
        <label className="flex flex-col text-[11px] text-slate-400 font-medium">
          Text Template
          <textarea
            ref={textRef}
            rows={1}
            className="w-full bg-slate-950 border border-slate-700 rounded text-slate-200 px-2 py-1.5 text-[11px] mt-1 outline-none focus:border-blue-500 font-mono resize-none transition-all duration-150"
            value={currentText}
            onChange={(e) => updateNodeField(id, "text", e.target.value)}
            placeholder="Type prompt... Use {{variable}}"
          />
        </label>

        {/* Informative parameter list UI below textarea */}
        {variables.length > 0 && (
          <div className="mt-1 text-[10px] text-slate-500 bg-slate-900/50 p-1.5 rounded border border-slate-700/40">
            <span className="font-bold text-slate-100 block mb-1 text-left uppercase tracking-wider text-[9px]">
              {" "}
              Generated Inputs:
            </span>
            <div className="flex flex-wrap gap-1">
              {variables.map((v) => (
                <span
                  key={v}
                  className="bg-slate-800 text-blue-400 px-1.5 py-0.5 rounded border border-slate-700 font-mono text-[9px]"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </BaseNode>
  );
};
