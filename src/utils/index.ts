import { DARK_MODE } from "../helpers/constants";
import { HOME_PAGE } from "../helpers/constants/routes";

export const setValue = (value: string) => {
  sessionStorage.setItem("page", value);
};

export const getValue = () => {
  const value = sessionStorage.getItem("page");

  return value ? value : HOME_PAGE;
};

export const setTheme = (value: string) => {
  sessionStorage.setItem("theme", value);
};

export const getTheme = () => {
  const theme = Boolean(sessionStorage.getItem("theme"));
  if (theme === true || theme === false) {
    return theme;
  }
  return DARK_MODE;
};
