import { AppThunk } from "../store/store.types"
import { articleDeleteRequested, articleDeleteSucceeded, articleDeleteFailed, setAllArticles } from '../store'
import { deleteArticle } from "../services/api"
import { batch } from "react-redux"

export const deleteArticleThunk: AppThunk = (slug: string) => {
    return function (dispatch, getState) {
        dispatch(articleDeleteRequested())
        deleteArticle(slug).then(res => {
            if (res.status === 200) {
                const { all } = getState()
                const newArray = all.articles?.filter(item => {
                    item.slug !== slug
                })
                batch(() => {
                    dispatch(setAllArticles(newArray!));
                    dispatch(articleDeleteSucceeded());
                })
            }
        })
            .catch((error: any) => {
                dispatch(articleDeleteFailed(error))
            })
    }
}