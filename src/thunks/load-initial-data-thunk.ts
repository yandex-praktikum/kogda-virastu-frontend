import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { fetchPublicFeed, fetchTags } from '../services/api';
import {
  publicFeedFailed,
  publicFeedRequested,
  publicFeedSucceeded,
  setAllArticles, setAllTags, tagsFetchFailed,
  tagsFetchRequested,
  tagsFetchSucceeded,
} from '../store';
import { AppDispatch } from '../store/store.types';
import { TAPIError } from '../services/api.types';
import { makeErrorObject } from '../services/helpers';

export const loadInitialDataThunk = () => async (dispatch : AppDispatch) => {
  try {
    batch(() => {
      dispatch(publicFeedRequested());
      dispatch(tagsFetchRequested());
    });
    const [
      { data: { articles } },
      { data: { tags } }] = await Promise.all([fetchPublicFeed(), fetchTags()]);
    dispatch(setAllArticles(articles));
    dispatch(setAllTags(tags));
    batch(() => {
      dispatch(publicFeedSucceeded());
      dispatch(tagsFetchSucceeded());
    });
  } catch (error) {
    const err = makeErrorObject(error as AxiosError<TAPIError>);
    batch(() => {
      dispatch(publicFeedFailed(err));
      dispatch(tagsFetchFailed(err));
    });
  }
};

export default loadInitialDataThunk;
