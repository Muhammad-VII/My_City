import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';
import * as AuthActions from '../../Store/actions/auth.actions';

export const loginFeatureKey = 'login';

export interface State {
  user: User,
  error: any
}

export const initialState: State = {
  user: {
    data: {
      name: null,
      email: null,
      phone: null
    },
    token: null
  },
  error: null
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loginPage, (state, action: any) => {
    return {
      ...state,
      user: action,
      error: null,
    }
  })
);
