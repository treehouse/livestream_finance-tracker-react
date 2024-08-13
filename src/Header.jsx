import React, { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header>
      <h1>Personal Finance Tracker</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </header>
  );
};

export default Header;
