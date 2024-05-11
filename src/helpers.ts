import { useState } from "react";

export type ThemeType = "light" | "dark";

const getTheme = (): ThemeType => {
  let appTheme = localStorage.getItem("appTheme") as ThemeType;
  const isSystemDarkmode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (!appTheme) {
    if (isSystemDarkmode) {
      appTheme = "dark";
      localStorage.setItem("appTheme", "dark");
    } else {
      appTheme = "light";
      localStorage.setItem("appTheme", "light");
    }
  }
  return appTheme;
};

export const useTheme = () => {
  const [appTheme, setAppTheme] = useState(getTheme());
  const updateTheme = (theme: ThemeType) => {
    localStorage.setItem("appTheme", theme);
    setAppTheme(theme);
  };
  return { appTheme, updateTheme };
};
