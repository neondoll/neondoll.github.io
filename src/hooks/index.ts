import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { StoreDispatch, StoreState } from "@/store";

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;

export { useDateFns as useDateFns } from "./date-fns";
export { useTime as useTime } from "./time";
