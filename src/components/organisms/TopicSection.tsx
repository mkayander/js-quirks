"use client";

import defaultCodeTemplate from "@/assets/codeTemplates/defaultCodeTemplate.js.txt";
import { CodePanel, SplitPanelsLayout } from "@/components";
import { CodeRunnerContext } from "@/providers/CodeRunnerContext";
import React, { useState } from "react";

type TopicSectionProps = React.PropsWithChildren<{}>;

export const TopicSection: React.FC<TopicSectionProps> = ({ children }) => {
  const [codeTemplate, setCodeTemplate] = useState(defaultCodeTemplate);

  return (
    <CodeRunnerContext.Provider value={{ setCodeTemplate }}>
      <SplitPanelsLayout
        left={<CodePanel codeTemplate={codeTemplate} />}
        right={children}
      />
    </CodeRunnerContext.Provider>
  );
};
