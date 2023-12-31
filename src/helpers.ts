import { useState, useEffect } from "react";

type ThemeType = "light" | "dark";

const getTheme = (): ThemeType => {
  let appTheme = localStorage.getItem("appTheme") as ThemeType;
  console.log(appTheme);
  const isSystemDarkmode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (!appTheme) {
    console.log("inhere", appTheme, isSystemDarkmode);
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
