import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import { GenerateInviteButton } from '../ui-lib/buttons';
import { useDispatch, useSelector } from '../services/hooks';
import generateInviteThunk from '../thunks/generate-invite-thunk';
import { RegularText } from '../ui-lib/text-elements';

const GenerateInviteContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const CodeContainer = styled.div`
  width: 100%;
  overflow-wrap: break-word;
`;

const InviteGenerationContainer: FC = () => {
  const dispatch = useDispatch();
  const { isInviteGenerating } = useSelector((state) => state.api);
  const generatedInvite = useSelector((state) => state.profile.generatedInvite);

  return (
    <GenerateInviteContainer>
      <CodeContainer>
        <GenerateInviteButton
          disabled={isInviteGenerating}
          onClick={() => dispatch(generateInviteThunk())} />
        <RegularText
          size='large'
          weight={400}
          font-family='Alegreya'
          color='#62626A'>
          {generatedInvite && `${generatedInvite}`}
        </RegularText>
      </CodeContainer>
    </GenerateInviteContainer>
  );
};

export default InviteGenerationContainer;
