import axios from "axios";
import * as types from "./actionTypes";

const token = JSON.parse(localStorage.getItem("token")) || "";
export const getMyProfile = () => (dispatch) => {
  dispatch({
    type: types.GET_MYPROFILE_REQUEST,
  });
  axios("https://insta-moc-server1.herokuapp.com/feed/myProfile", {
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
  return axios("https://insta-moc-server1.herokuapp.com/feed/all", {
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
      console.log(err);
      dispatch({
        type: types.GET_ALL_USER_POSTS_FAILURE,
      });
    });
};

export const uploadPost = (payload) => (dispatch) => {
  dispatch({
    type: types.UPLOAD_POST_REQUEST,
  });
  fetch("https://insta-moc-server1.herokuapp.com/feed/upload", {
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
      console.log(err);
      dispatch({
        type: types.UPLOAD_POST_FAILURE,
      });
    });
};

export const likeThePost = (postId) => (dispatch) => {
  return fetch("https://insta-moc-server1.herokuapp.com/feed/like", {
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
  return fetch("https://insta-moc-server1.herokuapp.com/feed/unlike", {
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
  dispatch({
    type: types.POST_COMMENT_REQUEST,
  });
  return fetch("https://insta-moc-server1.herokuapp.com/feed/comment", {
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
      console.log(res, "comment");
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
  dispatch({
    type: types.GET_SEARCH_RESULTS_REQUEST,
  });
  return fetch(
    `https://insta-moc-server1.herokuapp.com/feed/search/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
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
  dispatch({
    type: types.GET_PROFILE_REQUEST,
  });
  return fetch(`https://insta-moc-server1.herokuapp.com/feed/profile/${id}`, {
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
  dispatch({
    type: types.FOLLOW_USER_REQUEST,
  });
  return fetch("https://insta-moc-server1.herokuapp.com/feed/follow", {
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
  dispatch({
    type: types.UNFOLLOW_USER_REQUEST,
  });
  return fetch("https://insta-moc-server1.herokuapp.com/feed/unfollow", {
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
  return fetch(
    `https://insta-moc-server1.herokuapp.com/feed/delete/${postId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: types.DELETE_POST,
      });
      dispatch(getAllposts());
    });
};

export const editProfile = (url) => (dispatch) => {
  dispatch({
    type: types.EDIT_PROFILE_REQUEST,
  });
  return fetch("https://insta-moc-server1.herokuapp.com/feed/edit", {
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
