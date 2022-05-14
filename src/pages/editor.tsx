import React from 'react';
import styled from 'styled-components';
import EditorForm from '../widgets/forms/EditorForm';

const Page = styled.section`
  width: 100%;
`;

const Editor = () => (
  <Page>
    <EditorForm />
  </Page>
);

export default Editor;
