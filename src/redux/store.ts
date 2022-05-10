import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import { countriesAPI } from './countriesAPI/countriesAPI';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [countriesAPI.reducerPath]: countriesAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(countriesAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
