import React, { useEffect, FC } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from '../../services/hooks';
import Banner from './Banner';
import MainView from './MainView';
import Tags from '../../widgets/Tags';
import { clearView } from '../../store';
import getAllTagsThunk from '../../thunks/get-all-tags-thunk';

import { ArticleFullPreview } from '../../widgets/ArticleFullPreview';

import { DeletePostButton, EditPostButton } from "../../ui-lib/buttons";





const Home: FC = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getAllTagsThunk());
    return () => {
      dispatch(clearView());
    };
  }, [dispatch]);

  return (
    <div className='home-page'>
   
      <Banner />
      <div className='container page'>
        <div className='row'>
          <MainView />
          <div className='col-md-3'>
            <Tags />
            <EditPostButton onClick={() => console.log('Меня нажали!!')} />
            <DeletePostButton onClick={() => console.log('Меня удалительно нажали!!')} />
           
          </div>
        </div>
      </div>

    </div>
  );
};
export default Home;
