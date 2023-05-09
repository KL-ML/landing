import { createAction, createSlice } from '@reduxjs/toolkit';
import THEME_CONTEXT from 'context/ThemeContext';

const initialState = {
  theme: localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : THEME_CONTEXT.LIGHT,
};

export const toggleTheme = createAction('toggleTheme');

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(toggleTheme, (state, action) => {
        state.theme =
          state.theme === THEME_CONTEXT.LIGHT
            ? THEME_CONTEXT.DARK
            : THEME_CONTEXT.LIGHT;
        localStorage.setItem('theme', state.theme);
      });
  },
});

export const themeReducer = themeSlice.reducer;