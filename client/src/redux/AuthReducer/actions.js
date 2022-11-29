import * as types from "./actionTypes";
import axios from "axios";
export const signupUser = (payload) => (dispatch) => {
  dispatch({
    type: types.SIGNUP_REQUEST,
  });
  return axios
    .post("https://instagram-moc-server.onrender.com/auth/signup", payload)
    .then((res) => {
      console.log(res);
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
    .post("https://instagram-moc-server.onrender.com/auth/login", payload)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.LOGIN_FAILURE,
      });
    });
};
