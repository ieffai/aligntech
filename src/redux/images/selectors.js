import { createSelector } from '@reduxjs/toolkit';

const getImagesState = (state) => state.images;

export const getImagesSelector = createSelector(getImagesState, (images) => images.images);