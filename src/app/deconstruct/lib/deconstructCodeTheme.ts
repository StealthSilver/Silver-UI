import type { PrismTheme } from "prism-react-renderer";

/** Cool pastel syntax theme for TSX on near-black Silver UI code panels. */
export const deconstructCodeTheme: PrismTheme = {
  plain: {
    color: "#d4dae8",
    backgroundColor: "#030303",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#6b7d94", fontStyle: "italic" },
    },
    { types: ["namespace"], style: { opacity: 0.8 } },
    {
      types: ["string", "char", "regex", "attr-value"],
      style: { color: "#9fd4c4" },
    },
    {
      types: ["punctuation", "operator", "entity", "url", "script-punctuation"],
      style: { color: "#8892a6" },
    },
    {
      types: ["number", "boolean", "constant", "symbol", "inserted"],
      style: { color: "#9ec5e8" },
    },
    {
      types: ["keyword", "atrule", "important", "imports"],
      style: { color: "#b8c0ff", fontWeight: "500" },
    },
    {
      types: ["function", "method", "selector"],
      style: { color: "#c9b6e4" },
    },
    {
      types: ["class-name", "maybe-class-name", "builtin"],
      style: { color: "#a5c4e8" },
    },
    {
      types: ["tag", "script"],
      style: { color: "#a3d9c9" },
    },
    {
      types: ["attr-name"],
      style: { color: "#8ecae6" },
    },
    {
      types: ["property", "variable", "parameter"],
      style: { color: "#dce3f0" },
    },
    { types: ["deleted"], style: { color: "#e8b4c8" } },
    { types: ["bold"], style: { fontWeight: "bold" } },
    { types: ["italic"], style: { fontStyle: "italic" } },
  ],
};
