// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import sidebarReducer from '../features/sidebarSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
