import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Slices} from '../Slices';

type LoginResponse = {};

interface AppSliceState {
  route: number;
  isFirstTime: boolean;
  user?: LoginResponse;
}

const initialState: AppSliceState = {
  route: 0,
  isFirstTime: true,
};

export const appSlice = createSlice({
  name: Slices.app,
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<LoginResponse | undefined>) => {
      state.user = action.payload;
    },
    changeNavigatorRoute: (state, action: PayloadAction<number>) => {
      state.route = action.payload;
      state.isFirstTime = false;
    },
    clearAppSlice: () => initialState,
  },
});

export const {changeNavigatorRoute, clearAppSlice, updateUser} =
  appSlice.actions;
export default appSlice.reducer;
