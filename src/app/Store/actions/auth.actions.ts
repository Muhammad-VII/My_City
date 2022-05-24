import { createAction, props } from '@ngrx/store';

export const loginPage = createAction(
  '[Login Component] Login User',
  props<{ email: string; password: string }>()
);

export const loginModel = createAction(
  '[Login Modal Component] Login User',
  props<{ token: string }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: any }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);
