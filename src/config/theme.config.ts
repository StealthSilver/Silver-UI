// Theme configuration for different UI styles

export interface ThemeStyles {
  container: string;
  header: string;
  title: string;
  description: string;
  accent: string;
  sectionTitle: string;
  previewCard: string;
  propsTable: string;
}

export const themes = {
  minimalist: {
    name: "Minimalist",
    container: "minimalist-theme",
    header: "",
    title: "animate-gradient",
    description: "",
    accent: "",
    sectionTitle: "",
    previewCard: "",
    propsTable: "",
  },
  brutalist: {
    name: "Brutalist",
    container: "brutalist-theme",
    header: "brutalist-header",
    title: "brutalist-title font-black uppercase",
    description: "brutalist-description",
    accent: "brutalist-accent",
    sectionTitle: "brutalist-section uppercase",
    previewCard:
      "brutalist-card border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]",
    propsTable: "brutalist-table border-4 border-black dark:border-white",
  },
  maximalist: {
    name: "Maximalist",
    container: "maximalist-theme",
    header: "maximalist-header",
    title:
      "maximalist-title animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
    description: "maximalist-description",
    accent: "maximalist-accent",
    sectionTitle:
      "maximalist-section bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text",
    previewCard:
      "maximalist-card border-4 border-gradient shadow-2xl shadow-purple-500/50",
    propsTable: "maximalist-table border-4 border-purple-500",
  },
  neumorphic: {
    name: "Neumorphic",
    container: "neumorphic-theme",
    header: "neumorphic-header",
    title: "neumorphic-title text-neutral-700 dark:text-neutral-200",
    description: "neumorphic-description",
    accent: "neumorphic-accent",
    sectionTitle: "neumorphic-section",
    previewCard:
      "neumorphic-card rounded-3xl shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] dark:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.5),inset_-5px_-5px_10px_rgba(255,255,255,0.05)]",
    propsTable:
      "neumorphic-table rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.7)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.5),-5px_-5px_15px_rgba(255,255,255,0.05)]",
  },
  motion: {
    name: "Motion",
    container: "motion-theme",
    header: "motion-header",
    title:
      "motion-title animate-gradient transition-all duration-500 hover:scale-105",
    description: "motion-description transition-all duration-300",
    accent: "motion-accent animate-pulse",
    sectionTitle: "motion-section transition-all duration-300 hover:scale-110",
    previewCard:
      "motion-card transition-all duration-500 hover:scale-[1.02] hover:rotate-1",
    propsTable: "motion-table transition-all duration-300 hover:shadow-3xl",
  },
};

export function getThemeStyles(theme: string): ThemeStyles {
  return themes[theme as keyof typeof themes] || themes.minimalist;
}

export function getThemeName(theme: string): string {
  return themes[theme as keyof typeof themes]?.name || "Minimalist";
}
