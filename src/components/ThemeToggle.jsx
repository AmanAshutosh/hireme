import { Sun, Moon } from "lucide-react";

// 🔹 Ye component theme switch karne ke liye hai (light ↔ dark)
// 🔹 theme = current theme ("light" ya "dark")
// 🔹 toggle = function jo theme change karta hai

export default function ThemeToggle({ theme, toggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      // 🔹 click karte hi toggle function run hoga (theme change karega)

      aria-label="Toggle theme"
      // 🔹 accessibility ke liye (screen readers ko batata hai button kya karta hai)

      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
      // 🔹 hover pe tooltip show karega (current theme ke hisaab se)
    >
      {/* 🔹 Agar current theme dark hai → Sun icon dikhao (light mode pe switch karne ke liye)
          🔹 Agar light hai → Moon icon dikhao (dark mode pe switch karne ke liye) */}
      {theme === "dark" ? (
        <Sun size={14} strokeWidth={1.8} />
      ) : (
        <Moon size={14} strokeWidth={1.8} />
      )}

      {/* 🔹 Button ke andar text bhi change hota hai theme ke hisaab se */}
      <span className="theme-toggle-label">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
