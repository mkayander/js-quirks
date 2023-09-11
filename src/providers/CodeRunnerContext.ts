import React, { createContext } from "react";

export type CodeRunnerContextType = {
  setCodeTemplate?: React.Dispatch<React.SetStateAction<string>>;
};

export const CodeRunnerContext = createContext<CodeRunnerContextType>({});
