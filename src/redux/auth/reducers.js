export const registerSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const loginSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const logoutSuccessReducer = state => {
  state.user.name = null;
  state.user.email = null;
  state.token = null;
  state.isLoggedIn = false;
};

export const refreshUserPendingReducer = state => {
  state.isRefreshing = true;
};

export const refreshUserFailReducer = state => {
  state.isRefreshing = false;
};

export const refreshUserSuccessReducer = (state, action) => {
  state.isRefreshing = false;
  state.isLoggedIn = true;
  state.user = action.payload;
};
