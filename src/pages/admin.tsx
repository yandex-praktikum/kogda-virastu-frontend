import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useSelector } from '../services/hooks';
import { jwt } from '../services/api';
import { HeaderTwoText } from '../ui-lib';
import User from '../widgets/user';

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

  return (
    <Page>
      <HeaderTwoText>
        <FormattedMessage id='userList' />
      </HeaderTwoText>
      <AdminPanelTable>
        <User />
      </AdminPanelTable>
    </Page>
  );
};

export default AdminPanel;
