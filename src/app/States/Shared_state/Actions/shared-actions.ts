import { Action, createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Main page] load items', props<{ username: string; password: string }>()
);
