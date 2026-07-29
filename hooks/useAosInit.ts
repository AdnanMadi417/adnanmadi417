"use client";

import { useEffect } from "react";
import AOS from "aos";

type AosOptions = Parameters<typeof AOS.init>[0];

const DEFAULT_OPTIONS: AosOptions = {
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 80,
};

export function useAosInit(options: AosOptions = DEFAULT_OPTIONS) {
  useEffect(() => {
    AOS.init(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
