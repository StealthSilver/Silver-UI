"use client";

import { useMemo, useState } from "react";
import { Check, ChevronDown, Copy, FileCode2 } from "lucide-react";
import { Highlight } from "prism-react-renderer";
import { deconstructPanelHeaderClass } from "@/app/deconstruct/lib/deconstructStyles";
import { deconstructCodeTheme } from "@/app/deconstruct/lib/deconstructCodeTheme";
import { cn } from "@/lib/utils";

export type DeconstructIdePanelProps = {
  source: string;
  language?: string;
  explorerFolder?: string;
  explorerFileName?: string;
  editorPath?: string;
};

export function DeconstructIdePanel({
  source,
  language = "tsx",
  explorerFolder = "Components",
  explorerFileName = "navbar.tsx",
  editorPath = "components/team-01.tsx",
}: DeconstructIdePanelProps) {
  const code = useMemo(() => source.trim(), [source]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="flex h-0 min-h-0 w-full flex-1 overflow-hidden bg-black"
      role="region"
      aria-label="Code editor"
    >
      <aside
        className="flex min-h-0 w-44 shrink-0 flex-col overflow-hidden border-r border-line bg-black sm:w-52"
        aria-label="File explorer"
      >
        <div className={deconstructPanelHeaderClass}>
          <span className="font-roboto text-xs font-normal uppercase tracking-widest text-white/50">
            Files
          </span>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden px-3 py-3">
          <div className="flex items-center gap-1.5 px-1 py-1.5 font-roboto text-xs text-white/55">
            <ChevronDown
              className="h-3 w-3 shrink-0 text-white/35"
              strokeWidth={2}
            />
            <span className="truncate">{explorerFolder}</span>
          </div>

          <button
            type="button"
            className={cn(
              "mt-0.5 flex w-full items-center gap-2 border border-line px-2.5 py-2 text-left",
              "bg-white/[0.04] font-mono text-xs text-white",
            )}
            aria-current="true"
          >
            <FileCode2
              className="h-3.5 w-3.5 shrink-0 text-white/35"
              strokeWidth={1.75}
            />
            <span className="truncate">{explorerFileName}</span>
          </button>
        </div>
      </aside>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <div className={cn(deconstructPanelHeaderClass, "gap-3")}>
          <div
            className="flex h-6 min-w-0 flex-1 items-center justify-between gap-3 bg-white/[0.04] pl-3 pr-2"
            aria-selected
          >
            <div className="flex min-w-0 items-center gap-2 font-mono text-xs leading-none text-white/90">
              <FileCode2
                className="h-3 w-3 shrink-0 text-white/35"
                strokeWidth={1.75}
              />
              <span className="truncate">{editorPath}</span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className={cn(
                "flex shrink-0 items-center gap-1.5 py-1 font-roboto text-[11px] font-medium transition-colors",
                copied
                  ? "text-[#9fd4c4]"
                  : "text-white/55 hover:bg-white/[0.04] hover:text-white/90",
              )}
              aria-label={copied ? "Copied" : "Copy code"}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" strokeWidth={2} />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" strokeWidth={2} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div
          className="h-0 min-h-0 flex-1 overflow-y-auto overflow-x-auto overscroll-contain bg-[#030303]"
          role="region"
          aria-label="Source code"
        >
          <Highlight code={code} language={language} theme={deconstructCodeTheme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={cn(
                  className,
                  "m-0 bg-[#030303] p-4 font-mono text-[13px] sm:p-5",
                )}
                style={{
                  ...style,
                  background: "#030303",
                  whiteSpace: "pre",
                  wordBreak: "normal",
                  margin: 0,
                }}
              >
                {tokens.map((line, lineIndex) => {
                  const lineProps = getLineProps({ line });
                  return (
                    <div
                      key={lineIndex}
                      {...lineProps}
                      className="table-row hover:bg-white/[0.02]"
                      style={{ whiteSpace: "pre" }}
                    >
                      <span
                        className="table-cell w-8 shrink-0 select-none pr-4 text-right text-white/25"
                        aria-hidden
                      >
                        {lineIndex + 1}
                      </span>
                      <span className="table-cell pr-4">
                        {line.map((token, tokenIndex) => {
                          const tokenProps = getTokenProps({ token });
                          return (
                            <span
                              key={tokenIndex}
                              {...tokenProps}
                              style={{
                                ...tokenProps.style,
                                whiteSpace: "pre",
                              }}
                            />
                          );
                        })}
                      </span>
                    </div>
                  );
                })}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
}
