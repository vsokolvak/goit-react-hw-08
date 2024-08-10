
export const getName = state => state.auth.user.name
export const isLogined = state => state.auth.isLoggedIn
export const getToken = state => state.auth.token
export const isRefreshingUser = (state) => state.auth.isRefreshing;