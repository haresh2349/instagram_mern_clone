import * as types from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  authStatus: false,
  token: "",
  type: "",
  message: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: payload.type,
        message: payload.message,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        type: "error",
        message: "something went wrong",
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: payload.type,
        message: payload.message,
        token: payload.token,
        authStatus: true,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        authStatus: false,
        type: "error",
        message: "Please enter right details",
      };
    default:
      return state;
  }
};
