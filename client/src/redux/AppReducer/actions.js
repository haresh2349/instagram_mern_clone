import axios from "axios";
import * as types from "./actionTypes";

const token = JSON.parse(localStorage.getItem("token")) || "";
// console.log(token);
export const getMyProfile = () => (dispatch) => {
  console.log("token", token);
  dispatch({
    type: types.GET_MYPROFILE_REQUEST,
  });
  axios("https://insta-moc-server1.herokuapp.com/feed/myProfile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_MYPROFILE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_MYPROFILE_FAILURE,
      });
    });
};
export const getAllposts = () => (dispatch) => {
  dispatch({
    type: types.GET_ALL_USER_POSTS_REQUEST,
  });
  return axios
    .get("https://insta-moc-server1.herokuapp.com/feed/all", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer" + token,
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_ALL_USER_POSTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_ALL_USER_POSTS_FAILURE,
      });
    });
};
