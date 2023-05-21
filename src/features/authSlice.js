import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logoutUser: (state) => {
      state.token = null;
      // reset other auth-related state properties
    },
  },
});

export const { setToken, logoutUser } = authSlice.actions;
export default authSlice.reducer;
