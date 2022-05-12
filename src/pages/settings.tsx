import SettingsForm from '../widgets/forms/SettingsForm';
import styled from 'styled-components';

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