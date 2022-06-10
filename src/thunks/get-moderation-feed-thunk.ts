import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import { TAPIParamsObject, TAPIError } from '../services/api.types';
import { makeErrorObject } from '../services/helpers';
import { FeedTypes } from '../types/types';
import { fetchModerationFeed } from '../services/api';
import {
  moderationFeedRequested,
  setViewFeed,
  setFeedCount,
  setFeedType,
  moderationFeedSucceeded,
  moderationFeedFailed,
} from '../store';

const getModerationFeedThunk: AppThunk = (
  params: TAPIParamsObject,
) => async (dispatch) => {
  try {
    batch(() => {
      dispatch(moderationFeedRequested());
    });
    const
      { data: { articles, articlesCount } } = await fetchModerationFeed(params);
    batch(() => {
      dispatch(setViewFeed(articles));
      dispatch(setFeedCount(articlesCount));
      dispatch(moderationFeedSucceeded());
      dispatch(setFeedType(FeedTypes.moderation));
    });
  } catch (error) {
    dispatch(moderationFeedFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default getModerationFeedThunk;
