import { AppThunk, AppDispatch, RootState } from '../store/store.types';

import { setTopFeed } from '../store';

import { compareLikesForTop, makeTopFeed } from '../services/helpers';

const setTopLikedThunk: AppThunk = (qty = 5) => (
  dispatch : AppDispatch,
  getState : () => RootState,
) => {
  const articles = getState().all.articles ?? [];
  dispatch(setTopFeed(makeTopFeed(articles, compareLikesForTop, qty as number)));
};

export default setTopLikedThunk;
