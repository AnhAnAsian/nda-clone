import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

const themes = [
  { name: "Elegant Forest", class: "" },
  { name: "Ocean Breeze", class: "theme-ocean" },
  { name: "Royal Purple", class: "theme-purple" },
  { name: "Burgundy Luxe", class: "theme-burgundy" },
  { name: "Midnight Gold", class: "theme-midnight" },
  { name: "Sunset Coral", class: "theme-sunset" },
];

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(0);

  const switchTheme = () => {
    const root = document.documentElement;
    const currentClass = themes[currentTheme].class;
    
    if (currentClass) {
      root.classList.remove(currentClass);
    }

    const nextTheme = (currentTheme + 1) % themes.length;
    const nextClass = themes[nextTheme].class;
    
    if (nextClass) {
      root.classList.add(nextClass);
    }

    setCurrentTheme(nextTheme);
  };

  return (
    <Button
      onClick={switchTheme}
      size="sm"
      variant="outline"
      className="transition-all duration-300"
    >
      <Palette className="h-4 w-4" />
    </Button>
  );
};
