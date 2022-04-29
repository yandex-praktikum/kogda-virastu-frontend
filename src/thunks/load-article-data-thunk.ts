import { AppThunk, AppDispatch } from "../store/store.types";
import { fetchArticle } from "../services/api";
import { articleFetchRequested, articleFetchSucceeded, articleFetchFailed } from "../store";
import { setArticle } from "../store";

export const articleDataThunk: any = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(articleFetchRequested());
    const response = await fetchArticle(slug);
    dispatch(setArticle(response.data.article));
    dispatch(articleFetchSucceeded());
  } catch (error: any) {
    dispatch(articleFetchFailed(error));
  }
}