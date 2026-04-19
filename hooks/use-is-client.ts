"use client";

import * as React from "react";

/** True after hydration; false on server and during SSR. */
export function useIsClient() {
  return React.useSyncExternalStore(
    () => () => {
      // no-op subscription
    },
    () => true,
    () => false
  );
}
