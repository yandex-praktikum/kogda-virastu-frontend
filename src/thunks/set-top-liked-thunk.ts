import { AppThunk, AppDispatch, RootState } from '../store/store.types';

import { setTopFeed } from '../store';

import { compareLikesForTop, makeTopFeed } from '../services/helpers';

const setTopLikedThunk: AppThunk = (qty: number) => (
  dispatch : AppDispatch,
  getState : () => RootState,
) => {
  const articles = getState().all.articles ?? [];
  dispatch(setTopFeed(makeTopFeed(articles, compareLikesForTop, qty ?? 5)));
};

export default setTopLikedThunk;
