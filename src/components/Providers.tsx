// import { SceneProvider } from "@web333/lib/SceneManager";
import { Provider as JotaiProvider } from "jotai";

import { appStore } from "@web333/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <JotaiProvider store={appStore}>{children}</JotaiProvider>;
}
