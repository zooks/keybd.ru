import "./DarkMode.scss";
import { ChangeEventHandler } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from '@fortawesome/free-regular-svg-icons';
import {faMoon} from '@fortawesome/free-regular-svg-icons';
// import {faSun} from '@fortawesome/free-solid-svg-icons';
// import {faMoon} from '@fortawesome/free-solid-svg-icons';

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span><FontAwesomeIcon icon={faSun} title="Light" /></span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span><FontAwesomeIcon icon={faMoon} title="Dark" /></span>
    </div>
  );
};

export default DarkMode;