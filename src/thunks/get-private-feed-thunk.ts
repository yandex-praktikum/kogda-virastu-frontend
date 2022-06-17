import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { fetchPrivateFeed } from '../services/api';
import {
  privateFeedFailed,
  privateFeedRequested,
  privateFeedSucceeded,
  setFeedCount,
  setFeedType,
  setViewFeed,
} from '../store';
import { AppThunk } from '../store/store.types';
import { makeErrorObject } from '../services/helpers';
import { TAPIError, TAPIParamsObject } from '../services/api.types';
import { FeedTypes, TArticle } from '../types/types';

const getPrivateFeedThunk: AppThunk = (
  params: TAPIParamsObject,
) => async (dispatch) => {
  try {
    batch(() => {
      dispatch(privateFeedRequested());
    });
    const
      { data: { articles, articlesCount } } = await fetchPrivateFeed(params);
    batch(() => {
      const publishedArticles : Array<TArticle> = articles.filter((art) => art.state === 'published');
      dispatch(setViewFeed(publishedArticles));
      dispatch(setFeedCount(articlesCount));
      dispatch(privateFeedSucceeded());
      dispatch(setFeedType(FeedTypes.private));
    });
  } catch (error) {
    dispatch(privateFeedFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default getPrivateFeedThunk;
