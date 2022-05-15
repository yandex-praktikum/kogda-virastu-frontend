import React, {
    useEffect,
    FC,
  } from 'react';
import {TopAnnounceWidget} from '../widgets/top-announce-widget';
import {PopularTags} from '../widgets/PopularTags';
import { useSelector, useDispatch } from '../services/hooks';
import { batch } from 'react-redux';
import { getAllTagsThunk, getAllPostsThunk, setTopLikedThunk, setNewPostsThunk} from '../thunks/';
import styled from 'styled-components';
const MainSection = styled.section`
    display: grid;
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
            <RightColunm>
        <PopularTags />
        <TopAnnounceWidget caption="Популярные материалы" />
        </RightColunm>
        </MainSection>
    )
}
export default Main