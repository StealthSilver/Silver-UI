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
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative font-mono text-[13px]">
      <Highlight
        code={code.trim()}
        language={language as any}
        theme={themes.vsDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="rounded-lg border border-border bg-black/40 p-5 overflow-x-auto"
            style={style}
          >
            {tokens.map((line: any, i: number) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                className="table-row"
              >
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-muted-foreground/50 select-none text-right w-8">
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
        onClick={handleCopy}
        className="absolute top-3 right-3 rounded-md bg-muted hover:bg-muted/80 text-foreground px-3 py-1.5 text-xs font-medium transition-all opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
