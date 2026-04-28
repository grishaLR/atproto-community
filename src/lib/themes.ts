export interface Theme {
  id: string;
  name: string;
  scheme: "light" | "dark";
}

export const themes: Theme[] = [
  { id: "horizon", name: "Horizon", scheme: "light" },
  { id: "blacksky", name: "Blacksky", scheme: "dark" },
  { id: "ngerakines", name: "ngerakines", scheme: "light" },
  { id: "fujocoded", name: "Fujocoded", scheme: "light" },
];

export const defaultThemeId = "horizon";
export const storageKey = "atc-theme";
