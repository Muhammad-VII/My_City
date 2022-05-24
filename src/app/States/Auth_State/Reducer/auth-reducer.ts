import { Action } from '@ngrx/store';
import { createReducer, on, ActionReducer } from '@ngrx/store';
import * as AuthActions from '../Actions/auth-actions';
import { Auth } from '../AuthModel/auth-model';

export const authFeatureKey = 'auth';

export interface State {
  token: string | null;
  error: any;
}

// Default auth state
export const initialState: State = {
  token: null,
  error: null,
};

export const reducer: ActionReducer<State> = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      ...state,
      token: action.access_token,
      error: null
    };
  }));

// const defaultState: Auth = {
//   access_token: '',
// };

// Helper function to create new state object
// const newState = (state: any, newData: any) => {
//   return Object.assign({}, state, newData);
// };

// const authReducer: ActionReducer<any> = createReducer(
//   defaultState,
//   on(AuthActions.login, (state, action: Auth): any => {
//     return newState(state, action);
//   })
// );

// export function loginReducer(state: State<Auth>, action: Action) {
//   return authReducer(state, action);
// }
