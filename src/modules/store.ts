import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import musicSlice from 'modules/music/slice';

import baseApi from 'services/baseApi';

const makeSore = () => {
  const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      [musicSlice.name]: musicSlice.reducer,
    },
    middleware: (getDefaultSettings) =>
      getDefaultSettings().concat(baseApi.middleware),
  });

  return store;
};

export const wrapper = createWrapper(makeSore);
export type AppStore = ReturnType<typeof makeSore>;
export type AppState = ReturnType<AppStore['getState']>;
