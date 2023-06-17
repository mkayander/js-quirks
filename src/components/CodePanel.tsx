"use client";

import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useState } from "react";
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

type CodePanelProps = {
  title?: string;
};

export const CodePanel: React.FC<CodePanelProps> = () => {
  const [editor, setEditor] = useState<IStandaloneCodeEditor | null>(null);
  return (
    <div>
      <Editor
        height="calc(100vh - 134px)"
        theme="vs-dark"
        language="javascript"
        options={{
          minimap: {
            enabled: false,
          },
        }}
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
