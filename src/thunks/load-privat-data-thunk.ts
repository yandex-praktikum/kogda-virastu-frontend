import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { fetchPrivateFeed, fetchTags } from '../services/api';
import {
    privateFeedFailed,
    privateFeedRequested,
  privateFeedSucceeded,
  setAllArticles, setAllTags, tagsFetchFailed,
  tagsFetchRequested,
  tagsFetchSucceeded,
} from '../store';
import { AppDispatch } from '../store/store.types';
import makeErrorMessage from '../services/helpers/make-error-message';
import { TAPIError } from '../services/api.types';

const loadPrivatFeedThunk:any = () => async (dispatch : AppDispatch) => {
  try {
    batch(() => {
      dispatch(privateFeedRequested());
      dispatch(tagsFetchRequested());
    });
    const [
      { data: { articles } },
      { data: { tags } }] = await Promise.all([fetchPrivateFeed(), fetchTags()]);
    dispatch(setAllArticles(articles));
    dispatch(setAllTags(tags));
    batch(() => {
      dispatch(privateFeedSucceeded());
      dispatch(tagsFetchSucceeded());
    });
  } catch (error) {
    const msg = makeErrorMessage(error as AxiosError<TAPIError>);
    batch(() => {
      dispatch(privateFeedFailed(msg));
      dispatch(tagsFetchFailed(msg));
    });
  }
};

export default loadPrivatFeedThunk;
