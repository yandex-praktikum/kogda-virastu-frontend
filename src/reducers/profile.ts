import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from '../constants/actionTypes';

type TInitialState = {
  username: string | null,
  email: string | null,
  token: string | null,
  bio: string | null,
  image: string | null
};

const initialState: TInitialState = {
  username: null,
  email: null,
  token: null,
  bio: null,
  image: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case PROFILE_PAGE_LOADED:
      return {
        ...action.payload[0].profile,
      };
    case PROFILE_PAGE_UNLOADED:
      return {};
    case FOLLOW_USER:
    case UNFOLLOW_USER:
      return {
        ...action.payload.profile,
      };
    default:
      return state;
  }
};
