import { Action } from '@ngrx/store';
import { createReducer, on, State, ActionReducer } from '@ngrx/store';
import * as AuthActions from '../Actions/auth-actions';
import { Auth } from '../AuthModel/auth-model';

// export type Action = AuthActions.ALLActions;

// Default auth state
const defaultState: Auth = {
  access_token: ''
};

// Helper function to create new state object
const newState = (state: any, newData: any) => {
  return Object.assign({}, state, newData);
};

const authReducer: ActionReducer<any> = createReducer(
  defaultState,
  on(AuthActions.login, (state, action: Auth): any => {
    return newState(state, action)
  })
);

export function loginReducer(state: State<Auth>, action: Action) {
  return authReducer(state, action);
}

export function logoutReducer(state: State<Auth>, action: Action) {
  return authReducer(state, action);
}


