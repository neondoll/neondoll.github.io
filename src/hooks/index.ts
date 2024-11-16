import { useDispatch, useSelector } from "react-redux";
import type { StoreDispatch, StoreState } from "../store";
import type { TypedUseSelectorHook } from "react-redux";

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
