import ArticleList from '../ArticleList';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import { changePositionFeed } from '../../store'
import { getPrivateFeedThunk } from '../../thunks/get-private-feed-thunk';
import  getAllTagsThunk  from '../../thunks/get-all-tags-thunk';
const YourFeedTab = () => {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector((state) => state.system);
    const { positionFeed } = useSelector((state) => state.view)

    const clickHandler = (e: any) => {
        dispatch(loadPrivateFeedThunk())
        dispatch(changePositionFeed('privat'))
        e.preventDefault()

    }
    if (isLoggedIn) {
        return (
            <li className="nav-item">
                <a href=""
                    className={positionFeed === 'privat' ? 'nav-link active' : 'nav-link'}
                    onClick={clickHandler}>
                    Your Feed
                </a>
            </li>
        )
    }
    else return null
}
const GlobalFeedTab = () => {
    const dispatch = useDispatch();
    const { positionFeed } = useSelector((state) => state.view)
    const clickHandler = (e: any) => {
        e.preventDefault();
        dispatch(getAllTagsThunk())
        dispatch(changePositionFeed('global'))
    }
    return (
        <li className="nav-item">
            <a
                href=""
                className={positionFeed === 'global' ? 'nav-link active' : 'nav-link'}
                onClick={clickHandler}>
                Global Feed
            </a>
        </li>
    )
}
const TagFilterTab = (props: any) => {

    if (!props.tag) {
        return null;
    }
    else {
        return (
            <li className="nav-item">
                <a href="" className="nav-link active">
                    <i className="ion-pound"></i>
                </a>
            </li>

        )
    }
}
export const MainView = () => {

    const { articles } = useSelector((state) => state.all)

    useEffect(() => {
        console.log(articles)
    }, [articles])


    const onTabClick = () => {

    }
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <YourFeedTab />
                    <GlobalFeedTab />
                </ul>
            </div>
            {/*<ArticleList/>*/}
        </div>
    )
}
export default MainView
