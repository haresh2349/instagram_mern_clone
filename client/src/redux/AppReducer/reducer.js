import * as types from "./actionTypes";

const initState = {
  postsLoading: false,
  myProfileLoading: false,
  profileLoading: false,
  searchLoading: false,
  isError: false,
  myProfile: {},
  profile: {},
  allPosts: [],
  searchResults: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_MYPROFILE_REQUEST:
      return {
        ...state,
        myProfileLoading: true,
      };
    case types.GET_MYPROFILE_SUCCESS:
      if (payload) {
        localStorage.setItem("user", JSON.stringify(payload.user));
      }
      return {
        ...state,
        myProfileLoading: false,
        myProfile: payload,
      };
    case types.GET_MYPROFILE_FAILURE:
      return {
        ...state,
        myProfileLoading: false,
        isError: true,
      };
    case types.GET_ALL_USER_POSTS_REQUEST:
      return {
        ...state,
        postsLoading: true,
      };
    case types.GET_ALL_USER_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        allPosts: payload && payload.allPosts,
      };
    case types.GET_ALL_USER_POSTS_FAILURE:
      return {
        ...state,
        postsLoading: false,
        isError: true,
      };
    case types.POST_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.POST_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        commentResponse: payload,
      };
    case types.POST_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_SEARCH_RESULTS_REQUEST:
      return {
        ...state,
        searchLoading: true,
      };
    case types.GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchResults: payload,
      };
    case types.GET_SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        searchLoading: false,
        isError: true,
      };
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        profileLoading: true,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileLoading: false,
        profile: payload,
      };
    case types.GET_PROFILE_FAILURE:
      return {
        ...state,
        profileLoading: false,
        isError: true,
      };
    case types.FOLLOW_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FOLLOW_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.FOLLOW_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UNFOLLOW_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UNFOLLOW_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.UNFOLLOW_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.EDIT_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
