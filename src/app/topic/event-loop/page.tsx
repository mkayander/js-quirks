"use client";

import eventLoopCodeTemplate from "@/assets/codeTemplates/eventLoopCodeTemplate.js.txt";
import { CodeRunnerContext } from "@/providers/CodeRunnerContext";
import { NextPage } from "next";
import { useContext, useEffect } from "react";

type TopicPageProps = {};

const HashingPage: NextPage<TopicPageProps> = () => {
  const { setCodeTemplate } = useContext(CodeRunnerContext);

  useEffect(() => {
    setCodeTemplate?.(eventLoopCodeTemplate);
  }, [setCodeTemplate]);

  return (
    <div className="flex flex-col items-center px-6">
      <h1 className="mb-12 text-center text-5xl">Event Loop</h1>
    </div>
  );
};

export default HashingPage;
