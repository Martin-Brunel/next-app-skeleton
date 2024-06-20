"use client";

import store from "@/interfaceAdapters/state/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

type Props = {
  children: ReactNode;
};

export const ReduxProvider: React.FC<Props> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
