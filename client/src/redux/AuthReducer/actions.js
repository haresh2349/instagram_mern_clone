import * as types from "./actionTypes";
import axios from "axios";
export const signupUser = (payload) => (dispatch) => {
  dispatch({
    type: types.SIGNUP_REQUEST,
  });
  return axios
    .post("https://web-production-7804.up.railway.app/auth/signup", payload)
    .then((res) => {
      dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.SIGNUP_FAILURE,
      });
    });
};
export const loginUser = (payload) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  return axios
    .post("https://web-production-7804.up.railway.app/auth/login", payload)
    .then((res) => {
      if (res.data.type === "success") {
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: types.LOGIN_FAILURE,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err.response.data,
      });
      return err;
    });
};

export const resetAuth = () => (dispatch) => {
  return dispatch({
    type: types.RESET_AUTH,
  });
};
