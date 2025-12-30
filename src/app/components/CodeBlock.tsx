import React from "react";
import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  isInstallation?: boolean;
}

const MAX_HEIGHT_INSTALLATION = 200; // Max height for installation code blocks in pixels

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  showLineNumbers = true,
  isInstallation = false,
}) => {
  const [copied, setCopied] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const preRef = React.useRef<HTMLPreElement>(null);
  const [shouldShowExpandButton, setShouldShowExpandButton] =
    React.useState(false);

  React.useEffect(() => {
    if (isInstallation && preRef.current) {
      setTimeout(() => {
        if (preRef.current) {
          const height = preRef.current.scrollHeight;
          setShouldShowExpandButton(height > MAX_HEIGHT_INSTALLATION);
        }
      }, 0);
    }
  }, [isInstallation, code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative font-mono text-[13px]">
      <Highlight
        code={code.trim()}
        language={language as any}
        theme={themes.vsDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="relative">
            <pre
              ref={preRef}
              className={`rounded-xl bg-neutral-900/90 p-5 shadow-lg overflow-hidden ${
                isInstallation && !isExpanded
                  ? "overflow-y-auto"
                  : "overflow-x-hidden"
              }`}
              style={{
                ...style,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                paddingTop: isInstallation ? "2.5rem" : "1.25rem",
                maxHeight:
                  isInstallation && !isExpanded
                    ? MAX_HEIGHT_INSTALLATION
                    : "auto",
              }}
            >
              {tokens.map((line: any, i: number) => {
                const lineProps = getLineProps({ line });
                return (
                  <div
                    key={i}
                    {...lineProps}
                    className="table-row"
                    style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                  >
                    {showLineNumbers && (
                      <span className="table-cell pr-4 text-muted-foreground/50 select-none text-right w-8 shrink-0">
                        {i + 1}
                      </span>
                    )}
                    <span
                      className="table-cell"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {line.map((token: any, key: number) => {
                        const tokenProps = getTokenProps({ token });
                        return (
                          <span
                            key={key}
                            {...tokenProps}
                            style={{
                              ...tokenProps.style,
                              whiteSpace: "pre-wrap",
                              wordBreak: "break-word",
                            }}
                          />
                        );
                      })}
                    </span>
                  </div>
                );
              })}
            </pre>
            {isInstallation && shouldShowExpandButton && !isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-neutral-900/90 to-transparent flex items-end justify-center pb-2" />
            )}
            {/* Copy and Expand buttons at top right */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={handleCopy}
                className="rounded-md bg-white/10 hover:bg-white/20 text-neutral-100 border border-neutral-700 px-3 py-1.5 text-xs font-medium transition-all backdrop-blur"
                aria-label="Copy code"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
              {isInstallation && shouldShowExpandButton && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="rounded-md bg-white/10 hover:bg-white/20 text-neutral-100 border border-neutral-700 px-3 py-1.5 text-xs font-medium transition-all backdrop-blur"
                >
                  {isExpanded ? "Collapse" : "Expand"}
                </button>
              )}
            </div>
          </div>
        )}
      </Highlight>
    </div>
  );
};
