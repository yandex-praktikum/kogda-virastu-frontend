import React, { useEffect, FC } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from '../../services/hooks';
import Banner from './Banner';
import MainView from './MainView';
import Tags from '../../widgets/Tags';
import { clearView } from '../../store';
import getAllTagsThunk from '../../thunks/get-all-tags-thunk';



import { DeletePostButton, EditPostButton } from "../../ui-lib/buttons";
import { ProfileWidget } from '../../widgets/ProfileWidget';



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
      <ProfileWidget userName={'goga'}
        isFollow={true}
        userImage={'fggf'}
        onClick={() => console.log('ff')}
        isUser={false}
        size={'large'}
        color={'red'}
        distance={8}
      />
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
