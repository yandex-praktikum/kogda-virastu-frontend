import React from 'react';
import styled from 'styled-components';
import SettingsForm from '../widgets/forms/SettingsForm';

const Page = styled.section`
  width: 100%;
`;

const Settings = () => {

  return (
    <Page>
      <SettingsForm />
    </Page>
  )

}

export default Settings;