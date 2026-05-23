import { create } from "zustand";
import { createActionsSlice } from "./slices/actionsSlice";
import { createEdgesSlice } from "./slices/edgesSlice";
import { createNodesSlice } from "./slices/nodesSlice";

export const useStore = create((set, get) => ({
  ...createNodesSlice(set, get),
  ...createEdgesSlice(set, get),
  ...createActionsSlice(set, get),
}));
