import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const makeSore = () => {
  const store = configureStore({
    reducer: {},
    middleware: (getDefaultSettings) => getDefaultSettings(),
  });

  return store;
};

export const wrapper = createWrapper(makeSore);
export type AppStore = ReturnType<typeof makeSore>;
export type AppState = ReturnType<AppStore['getState']>;
