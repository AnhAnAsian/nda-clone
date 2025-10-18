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
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
      <Button
        onClick={switchTheme}
        size="lg"
        className="shadow-elegant hover:shadow-accent transition-all duration-300"
      >
        <Palette className="mr-2 h-5 w-5" />
        {themes[currentTheme].name}
      </Button>
      <span className="text-xs text-muted-foreground bg-background/90 px-2 py-1 rounded">
        Click to try different themes
      </span>
    </div>
  );
};
