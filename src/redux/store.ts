import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiServiceMiddlewares, apiServiceReducers } from '@redux/services';

import type { Action } from '@reduxjs/toolkit';

const combinedReducer = combineReducers({
  ...apiServiceReducers
});

type RootType = ReturnType<typeof combinedReducer>;

const rootReducer = (state: RootType | undefined, action: Action) => {
  if (action.type === 'logout') {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiServiceMiddlewares);
  }
});

setupListeners(store.dispatch);

export type Store = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {auth: AuthState, CredentialsState, etc...}
export type AppDispatch = typeof store.dispatch;

export default store;
