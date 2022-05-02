import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { fetchPrivateFeed } from '../services/api';
import {
  privateFeedFailed,
  privateFeedRequested,
  privateFeedSucceeded,
  setFeedCount,
  setViewFeed,
} from '../store';
import { AppDispatch, AppThunk } from '../store/store.types';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';

const loadPrivateFeedThunk: AppThunk = () => async (dispatch : AppDispatch) => {
  try {
    batch(() => {
      dispatch(privateFeedRequested());
    });
    const
      { data: { articles, articlesCount } } = await fetchPrivateFeed();
    batch(() => {
      dispatch(setViewFeed(articles));
      dispatch(setFeedCount(articlesCount));
      dispatch(privateFeedSucceeded());
    });
  } catch (error) {
    dispatch(privateFeedFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default loadPrivateFeedThunk;
