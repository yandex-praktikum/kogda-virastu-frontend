import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from '../services/hooks';
import { jwt } from '../services/api';
import { HeaderTwoText } from '../ui-lib';
import User from '../widgets/user';
import getAllUsersThunk from '../thunks/get-all-users';

const Page = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
  gap: 40px;
`;

const AdminPanelContainer = styled.div`
`;

const AdminPanelTable = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const AdminPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.admin);
  console.log(users);
  const isLogged = useSelector(
    (state) => state.system.isLoggedIn
        && !!state.profile.username,
  )
    && jwt.test();

  React.useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    }
  }, [isLogged, navigate]);

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return (
    <Page>
      <HeaderTwoText>
        <FormattedMessage id='userList' />
      </HeaderTwoText>
      <AdminPanelTable>
        <User />
        <User />
        <User />
      </AdminPanelTable>
    </Page>
  );
};

export default AdminPanel;
