import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants/actionTypes';

type TInitialState = {
  tags: string[]
};

const initialState: TInitialState = {
  tags: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0]?.tags
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
