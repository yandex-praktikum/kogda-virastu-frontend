import { useSelector, useDispatch } from '../../services/hooks';
import React, { useState, useEffect, FC } from 'react';
import Banner from './Banner';
import MainView from './MainView';
import Tags from './Tags';
import  getAllTagsThunk  from '../../thunks/get-all-tags-thunk';
export const Home: FC = () => {
  const dispatch = useDispatch()
  const { tags } = useSelector((state) => state.all)
  useEffect(() => {
    dispatch(getAllTagsThunk())
  }, [])
  const onClickTag = () => {
  }
  return (
    <div className='home-page'>
      <Banner />
      <div className='container page'>
        <div className='row'>
          <MainView />
          <div className='col-md-3'>
            <div className='sidebar'>
              <p>Popular Tags</p>
              <Tags
                tags={tags}
                onClickTag={onClickTag} />

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Home
