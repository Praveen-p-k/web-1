import { Moon, Sun } from "../assets/images";

const DarkMode = () => {
  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darksome-toggle" />
      <label className="dark_mode_label" htmlFor="darksome-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
