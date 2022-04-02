import { createSelector } from '@ngrx/store';

export interface DefaultAuthState {
  JWT: string;
  User: object;
}

export interface AppState {
  Auth: DefaultAuthState;
}

export const selectUser = (state: AppState) => state.Auth;

export const selectUserData = createSelector(
  selectUser,
  (state: DefaultAuthState) => state.User
);