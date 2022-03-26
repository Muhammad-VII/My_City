import { Auth } from './../../Auth_State/AuthModel/auth-model';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[User] LOGIN', props<Auth>());

export const login_complete = createAction('[User] LOGIN_COMPLETE', props<Auth>());

export const login_error = createAction('[User] LOGIN_ERROR', props<Auth>());
