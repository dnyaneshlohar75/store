'use client'
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  
  return (
    <button onClick={() => resolvedTheme == "dark" ? setTheme("light") : setTheme("dark")}>
      {resolvedTheme === "dark" ? <Sun size = {20} /> : <Moon size = {20} />}
    </button>
  );
};

export default ThemeButton;
