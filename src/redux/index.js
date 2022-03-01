import { configureStore, combineReducers } from '@reduxjs/toolkit';
import app from './app/slice';
import images from './images/slice';


const rootReducer = combineReducers({
    app: app,
    images: images
});

export const store = configureStore({
  reducer: rootReducer,
});
