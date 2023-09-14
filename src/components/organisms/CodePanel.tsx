"use client";

import { Button } from "@/components/atoms/Button";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import React, { useCallback, useEffect, useState } from "react";
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

const customLog = (...args: any[]) => {
  console.log("custom log: ", ...args);
};

Object.assign(window, { customLog });

const codePrefix = `
const console = {...window.console, log: window.customLog};

`;

type CodePanelProps = {
  title?: string;
  codeTemplate?: string;
};

export const CodePanel: React.FC<CodePanelProps> = ({ codeTemplate = "" }) => {
  const [editor, setEditor] = useState<IStandaloneCodeEditor | null>(null);
  const [codeInput, setCodeInput] = useState(codeTemplate);

  useEffect(() => {
    setCodeInput(codeTemplate);
  }, [codeTemplate]);

  const handleRunCode = useCallback(() => {
    try {
      const prefixedCode = codePrefix + codeInput;
      const code = new Function(prefixedCode);
      console.time("runCode");
      console.log("Code result: ", code());
      console.timeEnd("runCode");
    } catch (e) {
      console.error(e);
    }
  }, [codeInput]);

  return (
    <div className="flex flex-col gap-4">
      <div className="mx-4 my-1 flex justify-end">
        <Button onClick={handleRunCode}>Run ▶</Button>
      </div>
      <Editor
        height="calc(100vh - 134px)"
        theme="vs-dark"
        language="javascript"
        options={{
          minimap: {
            enabled: false,
          },
        }}
        value={codeInput}
        onChange={(value) => setCodeInput(value || "")}
        onMount={(editor, monaco) => {
          setEditor(editor);
          monaco.editor.defineTheme("myCustomTheme", {
            base: "vs-dark",
            inherit: true,
            rules: [{ background: "000000", token: "" }],
            colors: {
              "editor.background": "#000000",
            },
          });
          monaco.editor.setTheme("myCustomTheme");
        }}
      />
    </div>
  );
};
