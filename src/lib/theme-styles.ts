export type Theme =
  | "minimalist"
  | "brutalist"
  | "maximalist"
  | "neumorphic"
  | "motion";

export const getNavbarStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "bg-white dark:bg-neutral-950/90 border-b border-gray-200 dark:border-neutral-800/80";
    case "brutalist":
      return "bg-black border-b-4 border-white";
    case "maximalist":
      return "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 border-b-2 border-white/30";
    case "neumorphic":
      return "bg-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)]";
    case "motion":
      return "bg-white dark:bg-neutral-950/90 border-b border-gray-200 dark:border-neutral-800/80 backdrop-blur-xl";
    default:
      return "bg-white dark:bg-neutral-950/90 border-b border-gray-200 dark:border-neutral-800/80";
  }
};

export const getNavbarTextStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "text-gray-900 dark:text-white";
    case "brutalist":
      return "text-white font-black uppercase tracking-tight";
    case "maximalist":
      return "text-white font-extrabold";
    case "neumorphic":
      return "text-gray-700 font-semibold";
    case "motion":
      return "text-gray-900 dark:text-white";
    default:
      return "text-gray-900 dark:text-white";
  }
};

export const getSidebarStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "bg-gray-50 dark:bg-neutral-950/90 border-r border-gray-200 dark:border-neutral-800";
    case "brutalist":
      return "bg-black border-r-4 border-white";
    case "maximalist":
      return "bg-gradient-to-b from-indigo-600 to-purple-700";
    case "neumorphic":
      return "bg-gray-200";
    case "motion":
      return "bg-gray-50 dark:bg-neutral-950/90 border-r border-gray-100 dark:border-neutral-800";
    default:
      return "bg-gray-50 dark:bg-neutral-950/90 border-r border-gray-200 dark:border-neutral-800";
  }
};

export const getSidebarItemStyles = (theme: Theme, isActive = false) => {
  switch (theme) {
    case "minimalist":
      return `px-3 py-2 rounded-md transition-all duration-300 ${
        isActive
          ? "bg-gray-200 dark:bg-neutral-800"
          : "hover:bg-gray-100 dark:hover:bg-neutral-900/60"
      }`;
    case "brutalist":
      return `px-3 py-2 border-2 transition-all duration-300 font-bold uppercase text-sm ${
        isActive
          ? "bg-white text-black border-white"
          : "border-transparent hover:border-white"
      }`;
    case "maximalist":
      return `px-3 py-2 rounded-lg transition-all duration-300 font-semibold ${
        isActive
          ? "bg-white/30 shadow-lg backdrop-blur-sm"
          : "hover:bg-white/20"
      }`;
    case "neumorphic":
      return `px-3 py-2 rounded-xl transition-all duration-300 ${
        isActive
          ? "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]"
          : "shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.1),-2px_-2px_6px_rgba(255,255,255,0.7)]"
      }`;
    case "motion":
      return `px-3 py-2 rounded-md transition-all duration-300 hover:translate-x-2 ${
        isActive
          ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500"
          : ""
      }`;
    default:
      return `px-3 py-2 rounded-md transition-all duration-300 ${
        isActive
          ? "bg-gray-200 dark:bg-neutral-800"
          : "hover:bg-gray-100 dark:hover:bg-neutral-900/60"
      }`;
  }
};

export const getSidebarTextStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "text-gray-700 dark:text-neutral-200";
    case "brutalist":
      return "text-white";
    case "maximalist":
      return "text-white";
    case "neumorphic":
      return "text-gray-600";
    case "motion":
      return "text-gray-700 dark:text-neutral-200";
    default:
      return "text-gray-700 dark:text-neutral-200";
  }
};

export const getMainBgStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "bg-white dark:bg-[#0a0a0a]";
    case "brutalist":
      return "bg-yellow-300";
    case "maximalist":
      return "bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden";
    case "neumorphic":
      return "bg-gray-200";
    case "motion":
      return "bg-gradient-to-br from-gray-50 to-blue-50 dark:from-[#0a0a0a] dark:to-[#1a232a]";
    default:
      return "bg-white dark:bg-[#0a0a0a]";
  }
};

export const getDropdownButtonStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900/90 hover:bg-gray-50 dark:hover:bg-neutral-800";
    case "brutalist":
      return "px-4 py-2 border-3 border-white bg-black hover:bg-white hover:text-black font-bold uppercase text-sm";
    case "maximalist":
      return "px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 border-2 border-white/50 font-semibold";
    case "neumorphic":
      return "px-4 py-2 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.1),-2px_-2px_6px_rgba(255,255,255,0.7)] bg-gray-200";
    case "motion":
      return "px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900/90 hover:shadow-lg transition-all duration-300 hover:scale-105";
    default:
      return "px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900/90 hover:bg-gray-50 dark:hover:bg-neutral-800";
  }
};

export const getDropdownMenuStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "bg-white dark:bg-neutral-900/95 border border-gray-200 dark:border-neutral-700 shadow-sm rounded-lg";
    case "brutalist":
      return "bg-black border-4 border-white shadow-[8px_8px_0px_rgba(255,255,255,1)]";
    case "maximalist":
      return "bg-gradient-to-b from-purple-500 to-pink-500 border-2 border-white shadow-2xl backdrop-blur-xl rounded-lg";
    case "neumorphic":
      return "bg-gray-200 rounded-xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.7)]";
    case "motion":
      return "bg-white dark:bg-neutral-900/95 border border-gray-200 dark:border-neutral-700 shadow-xl rounded-lg backdrop-blur-xl";
    default:
      return "bg-white dark:bg-neutral-900/95 border border-gray-200 dark:border-neutral-700 shadow-sm rounded-lg";
  }
};

export const getDropdownItemStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "px-4 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800/80 text-gray-700 dark:text-neutral-200 transition-colors";
    case "brutalist":
      return "px-4 py-3 hover:bg-white hover:text-black text-white border-b-2 border-white/20 last:border-0 font-bold uppercase text-sm transition-all";
    case "maximalist":
      return "px-4 py-3 hover:bg-white/30 text-white font-semibold transition-all";
    case "neumorphic":
      return "px-4 py-3 mx-2 my-1 rounded-lg hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] text-gray-700 transition-all";
    case "motion":
      return "px-4 py-3 hover:bg-gray-50 dark:hover:bg-neutral-800/80 text-gray-700 dark:text-neutral-200 hover:translate-x-1 transition-all duration-200";
    default:
      return "px-4 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800/80 text-gray-700 dark:text-neutral-200 transition-colors";
  }
};

export const getSearchInputStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/90 px-4 py-2 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm";
    case "brutalist":
      return "w-full border-3 border-white bg-black px-4 py-2 text-base text-white placeholder:text-gray-400 outline-none focus:bg-white focus:text-black font-bold transition-all";
    case "maximalist":
      return "w-full rounded-lg border-2 border-white/50 bg-white/20 backdrop-blur-sm px-4 py-2 text-base text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/50 transition shadow-lg";
    case "neumorphic":
      return "w-full rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-200 px-4 py-2 text-base text-gray-700 placeholder:text-gray-400 outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] transition";
    case "motion":
      return "w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/90 px-4 py-2 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-all duration-300 shadow-sm";
    default:
      return "w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/90 px-4 py-2 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm";
  }
};

export const getSidebarHeaderStyles = (theme: Theme) => {
  switch (theme) {
    case "minimalist":
      return "text-[11px] font-semibold uppercase tracking-wider text-gray-600 dark:text-neutral-400";
    case "brutalist":
      return "text-[11px] font-black uppercase tracking-widest text-white";
    case "maximalist":
      return "text-[11px] font-extrabold uppercase tracking-wider text-white/90";
    case "neumorphic":
      return "text-[11px] font-semibold uppercase tracking-wider text-gray-500";
    case "motion":
      return "text-[11px] font-semibold uppercase tracking-wider text-gray-600 dark:text-neutral-400";
    default:
      return "text-[11px] font-semibold uppercase tracking-wider text-gray-600 dark:text-neutral-400";
  }
};
