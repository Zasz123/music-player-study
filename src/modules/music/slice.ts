import { createSlice } from '@reduxjs/toolkit';

export interface IMusicState {
  playInfo: {
    isPlaying: boolean;
    progress: number;
    duration: number;
  };
}

const initialState: IMusicState = {
  playInfo: {
    isPlaying: false,
    progress: 0,
    duration: 0,
  },
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {},
});

export default musicSlice;
