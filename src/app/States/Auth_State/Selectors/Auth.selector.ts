import { createSelector } from '@ngrx/store';

export interface DefaultAuthState {
  access_token: string;
}

export interface AppState {
  Auth: DefaultAuthState;
}

export const selectUser = (state: AppState) => state.Auth;

export const selectUserData = createSelector(
  selectUser,
  (state: DefaultAuthState) => state.access_token
);