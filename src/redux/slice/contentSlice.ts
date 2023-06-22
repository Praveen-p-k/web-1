import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../config/store";
import { setValue, getValue, getTheme, setTheme } from "../../utils";

interface ContentState {
  currentPage: string;
  theme: boolean;
}
const initialState: ContentState = {
  currentPage: getValue(),
  theme: getTheme(),
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    fetchContentState: (state) => {
      return state = { theme: getTheme(), currentPage: getValue() };
    },
    updateContent: (state, action) => {
      setValue(action.payload);
      return state = { ...state, currentPage: action.payload };
    },
    changeMode: (state, action) => {
      setTheme(action.payload);
      return state = { ...state, theme: action.payload };
    },
  },
});

export type contentSlice = {
  [contentSlice.name]: ReturnType<(typeof contentSlice)["reducer"]>;
};

export const contentSelectors = (state: RootState) => state[contentSlice.name];

export const { fetchContentState, updateContent, changeMode } =
  contentSlice.actions;

export default contentSlice.reducer;
