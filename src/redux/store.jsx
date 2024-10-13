import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootReducer from './root-recducer'; // Importe seu rootReducer aqui
import userSlice from './user/userSlice';
import themeSlice from './theme/themeSlice';
import homeSlice from './Pages/Home/homeSlice';

const logger = createLogger({
  collapsed: false // Opcional: para ocultar logs por padrão
});

const store = configureStore({
  //reducer: rootReducer,
  reducer:{
    user: userSlice, 
    theme: themeSlice,
    home: homeSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
});

export default store;

