"use client";

import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useState } from "react";
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

const defaultCode = `import { useQuery } from "@trpc/react";
import { ssr } from "client/trpc";

export default function Home() {
    const query = useQuery(["hello"]);
    return (
        <div>
            <h1>hello world</h1>
            <pre>{JSON.stringify(query.data, null, 4)}</pre>
        </div>
    );
}

export const getStaticProps = async () => {
    const result = await ssr.query("hello");
    return {
        props: {
            trpcState: ssr.getStaticPropsHelper(result),
        },
    };
};
`;

type CodePanelProps = {
  title?: string;
};

export const CodePanel: React.FC<CodePanelProps> = () => {
  const [editor, setEditor] = useState<IStandaloneCodeEditor | null>(null);
  const [codeInput, setCodeInput] = useState(defaultCode);

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
