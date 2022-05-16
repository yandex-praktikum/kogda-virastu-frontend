import React from 'react';
import styled from 'styled-components';
import SettingsForm from '../widgets/forms/settings-form';

const Page = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Settings = () => (
  <Page>
    <SettingsForm />
  </Page>
);

export default Settings;
