"use client";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <span onClick={toggleTheme}>
      {theme === "light" ? (
        <BsMoonFill
          size={28}
          className="text-gray-300 hover:text-white duration-300 cursor-pointer"
        />
      ) : (
        <BsSunFill
          size={28}
          className="text-gray-300 hover:text-yellow-400 duration-300 cursor-pointer"
        />
      )}
    </span>
  );
};

export default ThemeSwitcher;
