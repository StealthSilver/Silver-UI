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
            className="rounded-xl bg-neutral-900/90 p-5 overflow-x-auto shadow-lg"
            style={style}
          >
            {tokens.map((line: any, i: number) => {
              const lineProps = getLineProps({ line });
              return (
                <div key={i} {...lineProps} className="table-row">
                  {showLineNumbers && (
                    <span className="table-cell pr-4 text-muted-foreground/50 select-none text-right w-8">
                      {i + 1}
                    </span>
                  )}
                  <span className="table-cell">
                    {line.map((token: any, key: number) => {
                      const tokenProps = getTokenProps({ token });
                      return <span key={key} {...tokenProps} />;
                    })}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 rounded-md bg-white/10 hover:bg-white/20 text-neutral-100 border border-neutral-700 px-3 py-1.5 text-xs font-medium transition-all opacity-0 group-hover:opacity-100 backdrop-blur"
        aria-label="Copy code"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
