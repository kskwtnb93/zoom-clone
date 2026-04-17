import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

type WithRouterProps = {
  children: ReactNode;
};

/** アプリ全体のルーティングコンテキスト（FSD: app / providers） */
export function WithRouter({ children }: WithRouterProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
