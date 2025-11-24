"use client";
import React from "react";
import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  showLineNumbers = true,
}) => {
  return (
    <div className="group relative font-mono text-xs">
      <Highlight
        code={code.trim()}
        language={language as any}
        theme={themes.vsDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={
              className +
              " rounded-xl border border-neutral-800 bg-neutral-950/90 backdrop-blur p-4 overflow-x-auto shadow-md"
            }
            style={style}
          >
            {tokens.map((line: any, i: number) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                className="table-row"
              >
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-neutral-600 select-none text-right w-6">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">
                  {line.map((token: any, key: number) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="absolute top-2 right-2 rounded-md bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 px-2 py-1 text-[10px] uppercase tracking-wide transition"
        aria-label="Copy code"
      >
        Copy
      </button>
    </div>
  );
};
