import React from "react";

interface SidebarProps {
  components: { name: string }[];
  activeName: string;
  setActiveName: (name: string) => void;
  filtered: { name: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({
  components,
  activeName,
  setActiveName,
  filtered,
}) => (
  <aside className="hidden md:flex md:flex-col w-72 border-r border-neutral-800 bg-neutral-950/90 backdrop-blur-xl">
    <div className="p-5 flex-1 flex flex-col">
      <h2 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-200 mb-3">
        Components ({filtered.length})
      </h2>
      <div className="space-y-1 overflow-y-auto pr-1 flex-1">
        {filtered.map((c) => (
          <button
            key={c.name}
            onClick={() => setActiveName(c.name)}
            className={`group w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors border ${
              c.name === activeName
                ? "bg-[--primary] border-[--primary] text-white shadow-sm"
                : "border-transparent text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900/60"
            }`}
          >
            {c.name}
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="text-xs text-neutral-400 px-2 py-4">No matches.</p>
        )}
      </div>
      <div className="pt-4 text-[10px] text-neutral-500">
        <p className="leading-relaxed">
          Tip: Use the search above to quickly filter the component list.
        </p>
      </div>
    </div>
  </aside>
);

export default Sidebar;
