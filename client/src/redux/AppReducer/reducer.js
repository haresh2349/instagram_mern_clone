import * as types from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  myProfile: {},
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_MYPROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MYPROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myProfile: payload,
      };
    case types.GET_MYPROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
