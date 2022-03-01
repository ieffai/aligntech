import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'images',
  initialState: {
      images: []
  },
  reducers: {
    setImages(state, action) {
      state.images = action.payload;
    }
  },
});

export default slice.reducer;
export const { setImages } = slice.actions;