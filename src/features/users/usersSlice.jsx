import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Lydia Ubi' },
  { id: '1', name: 'Nneka Oyetunji' },
  { id: '2', name: 'Dave Gray' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
