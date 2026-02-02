import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Slices} from '../Slices';

interface AuthSliceState {}

const initialState: AuthSliceState = {};

export const authSlice = createSlice({
  name: Slices.auth,
  initialState,
  reducers: {
    updateFirstStep: (state, action: PayloadAction<number>) => {},
    clearAuthSlice: () => initialState,
  },
});

export const {updateFirstStep, clearAuthSlice} = authSlice.actions;
export default authSlice.reducer;
