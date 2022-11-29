import { createSelector } from '@reduxjs/toolkit';

const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuth = createSelector(
  [selectIsLoggedIn, selectUser, selectIsRefreshing],
  (isLoggedIn, user, isRefreshing) => ({ isLoggedIn, user, isRefreshing })
);
