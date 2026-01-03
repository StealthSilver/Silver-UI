// Theme styling utilities for dynamic theme changes

export type Theme =
  | "minimalist"
  | "brutalist"
  | "maximalist"
  | "neumorphic"
  | "motion";

// Navbar Styles
export const getNavbarStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800/80 backdrop-blur-2xl shadow-sm";
    case "brutalist":
      return "bg-black border-b-[6px] border-white shadow-[0_6px_0_rgba(255,255,255,0.3)]";
    case "maximalist":
      return "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 border-b-4 border-white/40 shadow-[0_8px_30px_rgba(236,72,153,0.3)] animate-gradient-x";
    case "neumorphic":
      return "bg-gray-200 dark:bg-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2)] border-none";
    case "motion":
      return "bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800/80 backdrop-blur-2xl shadow-lg hover:shadow-xl transition-all duration-500";
    default:
      return "bg-white dark:bg-neutral-950/90 border-b border-neutral-800/80";
  }
};

export const getNavbarTextStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "text-gray-900 dark:text-white";
    case "brutalist":
      return "text-white font-black uppercase";
    case "maximalist":
      return "text-white font-bold";
    case "neumorphic":
      return "text-gray-700 dark:text-gray-200";
    case "motion":
      return "text-gray-900 dark:text-white transition-colors duration-300";
    default:
      return "text-gray-900 dark:text-white";
  }
};

// Sidebar Styles
export const getSidebarStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "bg-gray-50/80 dark:bg-neutral-950/80 border-r border-neutral-200 dark:border-neutral-800 backdrop-blur-xl";
    case "brutalist":
      return "bg-black border-r-[6px] border-white shadow-[6px_0_0_rgba(255,255,255,0.2)]";
    case "maximalist":
      return "bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 border-r-4 border-white/30 shadow-[-8px_0_30px_rgba(147,51,234,0.3)]";
    case "neumorphic":
      return "bg-gray-200 dark:bg-neutral-800 border-none shadow-[8px_0_32px_rgba(0,0,0,0.06)] dark:shadow-[8px_0_32px_rgba(0,0,0,0.3)]";
    case "motion":
      return "bg-gray-50/80 dark:bg-neutral-950/80 border-r border-neutral-100 dark:border-neutral-800 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl";
    default:
      return "bg-gray-50 dark:bg-neutral-950/90 border-r border-neutral-800";
  }
};

export const getSidebarItemStyles = (
  theme: Theme,
  isActive = false
): string => {
  switch (theme) {
    case "minimalist":
      return `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
        isActive
          ? "bg-gray-200 dark:bg-neutral-800 border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-white shadow-md"
          : "border-transparent text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-900/60 hover:border-gray-200 dark:hover:border-neutral-700 hover:shadow-sm"
      }`;
    case "brutalist":
      return `px-3 py-2 border-[3px] text-sm font-black uppercase transition-all duration-200 ${
        isActive
          ? "bg-white text-black border-white shadow-[4px_4px_0_rgba(255,255,255,0.5)]"
          : "text-white border-transparent hover:border-white hover:bg-white/10 hover:translate-x-1"
      }`;
    case "maximalist":
      return `px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
        isActive
          ? "bg-white/40 shadow-[0_0_20px_rgba(255,255,255,0.5)] text-white border-2 border-white/70 scale-105"
          : "text-white/90 hover:bg-white/20 border-2 border-transparent hover:border-white/40 hover:shadow-lg hover:scale-102"
      }`;
    case "neumorphic":
      return `mx-2 my-1 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${
        isActive
          ? "shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.1)] text-gray-900 dark:text-white font-semibold"
          : "shadow-[6px_6px_12px_rgba(0,0,0,0.12),-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.08)] hover:shadow-[3px_3px_8px_rgba(0,0,0,0.12),-3px_-3px_8px_rgba(255,255,255,0.8)] dark:hover:shadow-[3px_3px_8px_rgba(0,0,0,0.4),-3px_-3px_8px_rgba(255,255,255,0.08)] text-gray-700 dark:text-gray-200"
      }`;
    case "motion":
      return `w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 block relative group border-2 ${
        isActive
          ? "bg-blue-500/15 text-blue-400 shadow-lg border-blue-400/40 hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full before:group-hover:translate-x-full before:transition-transform before:duration-600 before:pointer-events-none after:absolute after:inset-0 after:bg-white/20 after:rounded-full after:blur-xl after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-400"
          : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-neutral-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:shadow-lg hover:scale-105 overflow-hidden"
      }`;
    default:
      return "px-3 py-2 rounded-md text-sm font-medium";
  }
};

export const getSidebarTextStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "text-gray-700 dark:text-neutral-200";
    case "brutalist":
      return "text-white";
    case "maximalist":
      return "text-white";
    case "neumorphic":
      return "text-gray-600 dark:text-gray-300";
    case "motion":
      return "text-gray-700 dark:text-neutral-200";
    default:
      return "text-gray-700 dark:text-neutral-200";
  }
};

export const getSidebarHeaderStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "text-[11px] font-normal uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500";
    case "brutalist":
      return "text-[11px] font-normal uppercase tracking-[0.15em] text-neutral-400 border-b-2 border-white pb-2";
    case "maximalist":
      return "text-[11px] font-normal uppercase tracking-[0.15em] text-neutral-400 bg-white/10 rounded px-2 py-1";
    case "neumorphic":
      return "text-[11px] font-normal uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500";
    case "motion":
      return "text-[11px] font-normal uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500 transition-all duration-300";
    default:
      return "text-[11px] font-normal uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500";
  }
};

// Main Content Background Styles
export const getMainBgStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#0a0a0a]";
    case "brutalist":
      return "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-300 dark:from-yellow-400 dark:via-yellow-500 dark:to-yellow-400";
    case "maximalist":
      return "bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 relative overflow-hidden animate-gradient-x bg-[length:200%_200%]";
    case "neumorphic":
      return "bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800";
    case "motion":
      return "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-[#0a0a0a] dark:via-[#0f1419] dark:to-[#1a232a] transition-all duration-500";
    default:
      return "bg-white dark:bg-[#0a0a0a]";
  }
};

// Dropdown Styles
export const getDropdownButtonStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/90 text-gray-900 dark:text-white text-sm font-medium hover:border-gray-400 dark:hover:border-neutral-600 hover:shadow-md transition-all duration-300";
    case "brutalist":
      return "px-4 py-2 border-[3px] border-white bg-black text-white font-black uppercase hover:bg-white hover:text-black hover:shadow-[4px_4px_0_rgba(255,255,255,0.5)] transition-all duration-200";
    case "maximalist":
      return "px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 border-2 border-white/50 hover:border-white/70 text-white font-bold shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300";
    case "neumorphic":
      return "px-4 py-2 rounded-xl shadow-[6px_6px_12px_rgba(0,0,0,0.12),-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.08)] hover:shadow-[3px_3px_8px_rgba(0,0,0,0.12),-3px_-3px_8px_rgba(255,255,255,0.8)] dark:hover:shadow-[3px_3px_8px_rgba(0,0,0,0.4),-3px_-3px_8px_rgba(255,255,255,0.08)] text-gray-700 dark:text-gray-200 text-sm font-medium transition-all duration-300";
    case "motion":
      return "px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-white dark:bg-neutral-900/90 text-gray-900 dark:text-white text-sm font-medium";
    default:
      return "px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded text-gray-900 dark:text-white";
  }
};

export const getDropdownMenuStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "bg-white dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-700 shadow-lg backdrop-blur-2xl rounded-lg";
    case "brutalist":
      return "bg-black border-[5px] border-white shadow-[10px_10px_0px_rgba(255,255,255,1)] animate-shadow-pulse";
    case "maximalist":
      return "bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 border-[3px] border-white shadow-[0_20px_60px_rgba(236,72,153,0.6)] backdrop-blur-xl rounded-xl";
    case "neumorphic":
      return "bg-gray-200 dark:bg-neutral-800 rounded-2xl shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.8)] dark:shadow-[12px_12px_24px_rgba(0,0,0,0.6),-12px_-12px_24px_rgba(255,255,255,0.08)]";
    case "motion":
      return "bg-white dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-700 shadow-2xl rounded-xl backdrop-blur-2xl transition-all duration-300 animate-slide-down";
    default:
      return "bg-white dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-700 shadow-sm";
  }
};

export const getDropdownItemStyles = (
  theme: Theme,
  isActive = false
): string => {
  switch (theme) {
    case "minimalist":
      return `px-4 py-3 text-left text-sm transition-colors ${
        isActive
          ? "bg-gray-200 dark:bg-neutral-800 text-gray-900 dark:text-white font-medium"
          : "text-gray-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800/80"
      }`;
    case "brutalist":
      return `px-4 py-3 text-left text-sm font-black uppercase transition-all duration-300 border-b-2 border-white/20 last:border-0 ${
        isActive
          ? "bg-white text-black"
          : "text-white hover:bg-white hover:text-black"
      }`;
    case "maximalist":
      return `px-4 py-3 text-left text-sm font-bold transition-all duration-300 ${
        isActive ? "bg-white text-purple-700" : "text-white hover:bg-white/30"
      }`;
    case "neumorphic":
      return `px-4 py-3 mx-2 my-1 rounded-lg text-left text-sm transition-all duration-300 ${
        isActive
          ? "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] text-gray-900 dark:text-white"
          : "text-gray-700 dark:text-gray-200 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] dark:hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]"
      }`;
    case "motion":
      return `px-4 py-3 text-left text-sm transition-all duration-200 hover:translate-x-1 ${
        isActive
          ? "bg-gray-50 dark:bg-neutral-800/80 text-gray-900 dark:text-white font-medium"
          : "text-gray-700 dark:text-neutral-200 hover:bg-gray-50 dark:hover:bg-neutral-800/80"
      }`;
    default:
      return "px-4 py-3 text-left text-sm hover:bg-gray-100";
  }
};

// Search Input Styles
export const getSearchInputStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/90 px-4 py-2 text-base text-gray-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md";
    case "brutalist":
      return "w-full border-[3px] border-white bg-black px-4 py-2 text-base text-white placeholder:text-white/60 outline-none font-bold uppercase focus:bg-white focus:text-black focus:shadow-[4px_4px_0_rgba(255,255,255,0.5)] transition-all duration-200";
    case "maximalist":
      return "w-full rounded-xl border-[3px] border-white/50 bg-white/20 backdrop-blur-md px-4 py-2 text-base text-white placeholder:text-white/70 outline-none focus:ring-4 focus:ring-white/30 focus:bg-white/30 focus:border-white/70 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]";
    case "neumorphic":
      return "w-full rounded-xl shadow-[inset_6px_6px_12px_rgba(0,0,0,0.12),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.4),inset_-6px_-6px_12px_rgba(255,255,255,0.08)] bg-gray-200 dark:bg-neutral-800 px-4 py-2 text-base text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none focus:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.15),inset_-3px_-3px_8px_rgba(255,255,255,0.8)] dark:focus:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.5),inset_-3px_-3px_8px_rgba(255,255,255,0.08)] transition-all duration-300";
    case "motion":
      return "w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/90 px-4 py-2 text-base text-gray-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 hover:shadow-xl focus:scale-105 focus:-translate-y-1 shadow-md";
    default:
      return "w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-4 py-2 text-base text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm";
  }
};

// Content Text Styles
export const getContentTextStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "text-gray-900 dark:text-white";
    case "brutalist":
      return "text-black font-black uppercase";
    case "maximalist":
      return "text-purple-900 dark:text-purple-100 font-bold";
    case "neumorphic":
      return "text-gray-700 dark:text-gray-200";
    case "motion":
      return "text-gray-900 dark:text-white transition-colors duration-300";
    default:
      return "text-gray-900 dark:text-white";
  }
};

// Section Title Styles
export const getSectionTitleStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "text-2xl font-bold text-gray-900 dark:text-white tracking-tight relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gray-900 dark:after:bg-white after:transition-all";
    case "brutalist":
      return "text-2xl font-black uppercase text-black dark:text-white tracking-tight border-b-[5px] border-black dark:border-white inline-block pb-1 shadow-[4px_4px_0_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)]";
    case "maximalist":
      return "text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-orange-400 text-transparent bg-clip-text tracking-tight animate-gradient-x bg-[length:200%_200%] drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]";
    case "neumorphic":
      return "text-2xl font-bold text-gray-700 dark:text-gray-200 tracking-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.1)] dark:drop-shadow-[2px_2px_4px_rgba(255,255,255,0.1)]";
    case "motion":
      return "text-2xl font-bold text-gray-900 dark:text-white tracking-tight transition-all duration-300 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400 inline-block";
    default:
      return "text-2xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight";
  }
};

// Logo Styles
export const getLogoStyles = (theme: Theme): string => {
  switch (theme) {
    case "minimalist":
      return "transition-opacity hover:opacity-80";
    case "brutalist":
      return "border-2 border-white hover:invert transition-all duration-200";
    case "maximalist":
      return "drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300";
    case "neumorphic":
      return "opacity-80 hover:opacity-100 transition-opacity";
    case "motion":
      return "transition-all duration-300 hover:scale-110 hover:rotate-3";
    default:
      return "";
  }
};
