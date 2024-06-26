import axios from "axios";
import * as types from "./actionTypes";
import { configURL } from "../../config/config";

export const getMyProfile = () => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  dispatch({
    type: types.GET_MYPROFILE_REQUEST,
  });
  return axios(`${configURL.url}/feed/myProfile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch({
        type: types.GET_MYPROFILE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_MYPROFILE_FAILURE,
      });
    });
};
export const getAllposts = () => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  dispatch({
    type: types.GET_ALL_USER_POSTS_REQUEST,
  });
  return axios
    .get(`${configURL.url}/feed/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
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

export const uploadPost = (payload) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  dispatch({
    type: types.UPLOAD_POST_REQUEST,
  });
  fetch(`${configURL.url}/feed/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      dispatch({
        type: types.UPLOAD_POST_SUCCESS,
        payload: res,
      });
      dispatch(getMyProfile());
      dispatch(getAllposts());
    })
    .catch((err) => {
      dispatch({
        type: types.UPLOAD_POST_FAILURE,
      });
    });
};

export const likeThePost = (postId) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  return fetch(`${configURL.url}/feed/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ postId }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: types.LIKE_POST,
      });
      dispatch(getAllposts());
    });
};
export const disLikeThePost = (postId) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  return fetch(`${configURL.url}/feed/unlike`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ postId }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: types.DISLIKE_POST,
      });
      dispatch(getAllposts());
    });
};

export const commentToPost = (payload) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  dispatch({
    type: types.POST_COMMENT_REQUEST,
  });
  return fetch(`${configURL.url}/feed/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return dispatch({
        type: types.POST_COMMENT_SUCCESS,
        payload: res,
      });
      // dispatch(getAllposts());
    })
    .catch((err) => {
      dispatch({
        type: types.POST_COMMENT_FAILURE,
      });
    });
};

export const searchUsers = (username) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  dispatch({
    type: types.GET_SEARCH_RESULTS_REQUEST,
  });
  return fetch(`${configURL.url}/feed/search/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: types.GET_SEARCH_RESULTS_SUCCESS,
      });
      return res;
    })
    .catch((err) => {
      dispatch({
        type: types.GET_SEARCH_RESULTS_FAILURE,
      });
    });
};

export const getProfile = (id) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  dispatch({
    type: types.GET_PROFILE_REQUEST,
  });
  return fetch(`${configURL.url}/feed/profile/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: types.GET_PROFILE_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_MYPROFILE_SUCCESS,
      });
    });
};

export const followTheUser = (id) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  dispatch({
    type: types.FOLLOW_USER_REQUEST,
  });
  return fetch(`${configURL.url}/feed/follow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ followId: id }),
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      dispatch({
        type: types.FOLLOW_USER_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.FOLLOW_USER_FAILURE,
      });
    });
};
export const unFollowTheUser = (id) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  dispatch({
    type: types.UNFOLLOW_USER_REQUEST,
  });
  return fetch(`${configURL.url}/feed/unfollow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ unfollowId: id }),
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      dispatch({
        type: types.UNFOLLOW_USER_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.UNFOLLOW_USER_FAILURE,
      });
    });
};

export const delteThePost = (postId) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  return fetch(`${configURL.url}/feed/delete/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: types.DELETE_POST,
      });
      dispatch(getAllposts());
    });
};

export const editProfile = (url) => (dispatch) => {
  const token = localStorage.getItem("token") || "";
  dispatch({
    type: types.EDIT_PROFILE_REQUEST,
  });
  return fetch(`${configURL.url}/feed/edit`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ profilePhoto: url }),
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      dispatch({
        type: types.EDIT_PROFILE_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.EDIT_PROFILE_FAILURE,
      });
    });
};
