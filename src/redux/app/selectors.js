import { createSelector } from '@reduxjs/toolkit';

const getAppState = (state) => state.app;

export const isLoadingSelector = createSelector(getAppState, (app) => app.isLoading);