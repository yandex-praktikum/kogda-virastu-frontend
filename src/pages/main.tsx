import React, {
    useEffect,
    FC,
  } from 'react';
import {TopAnnounceWidget} from '../widgets/top-announce-widget';
import PopularTags from '../widgets/PopularTags';
import { useSelector, useDispatch } from '../services/hooks';
import { batch } from 'react-redux';
import { getAllTagsThunk, getAllPostsThunk, setTopLikedThunk, setNewPostsThunk, getPublicFeedThunk} from '../thunks/';
import {FeedRibbon} from '../widgets';
import styled from 'styled-components';
import { mobileViewThreshold } from '../constants';
const MainSection = styled.section`
    display: flex;
    padding-top:292px;
    margin: auto;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (max-width:768px) {
    gap: 0 40px ;
  }
  @media screen and (max-width:768px) {
    gap: 0 ;
  } 
  @media screen and (max-width: ${mobileViewThreshold}px) {
    flex-direction: column-reverse;
    }
`

const RightColunm = styled.div`
    display: flex;
    flex-direction: column;
`
export const Main = () => {
    const dispatch = useDispatch();
    const topArticles = useSelector((state) => state.view.topFeed)
    const { articles } = useSelector((state) => state.all);
    useEffect(() => {
        batch(() => {
          dispatch(getPublicFeedThunk())
         dispatch(getAllPostsThunk());
         dispatch(getAllTagsThunk());
         dispatch(setNewPostsThunk())
        })
      }, [dispatch]);
      
      useEffect(() => {
        if (articles && articles.length > 0) {
          dispatch(setTopLikedThunk());
        };
      }, [dispatch, articles]);
    return(
        <MainSection>
          <FeedRibbon />
            <RightColunm>
        <PopularTags />
        <TopAnnounceWidget caption="Популярные материалы" />
        </RightColunm>
        </MainSection>
    )
}
export default Main