import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { StoreDispatch, StoreState } from "../store";

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;

export function useTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return time;
}
