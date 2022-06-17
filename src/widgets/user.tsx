import React, { FC, MouseEventHandler, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import styled, { useTheme } from 'styled-components';
import { AvatarIcon, CrossIcon, RegularText } from '../ui-lib';
import { getPropOnCondition } from '../services/helpers';
import getColorTag from '../services/helpers/get-color-tag';
import CheckboxPic from '../assets/images/icons/checkbox-icon.svg';

const UserContainer = styled.div`
  margin: 0;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const UserAvatar = styled.img`
  box-sizing: border-box;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 4px;
`;

const Label = styled.label`
  display: flex;
  gap: 8px;
`;

const Span = styled.span`
`;

const SpanPseudo = styled.span`
  display: inline-block; /* элемент span теперь сможет принимать определённую ширину и высоту */
  vertical-align: middle; /* элемент и текст будут правильно выровнены по вертикали. Работает в паре с inline-block */
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.secondaryText};
  border-radius: 6px;
  box-sizing: border-box;
`;

const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  :checked + ${SpanPseudo} {
    background-image: url(${CheckboxPic});
    background-color: ${({ theme }) => theme.secondaryText};
  }

  :disabled + ${SpanPseudo} {
    border: 1px solid grey;
  }
  
  :disabled:checked + ${SpanPseudo} {
    background-image: url(https://code.s3.yandex.net/web-code/tick_grey.svg);

  }
  
  :focus + ${SpanPseudo} {
    box-shadow: 0 0 5px #fff6c5;
  }
`;

const CheckBox: FC = () => {
  const theme = useTheme();

  return (
    <Label>
      <Input type='checkbox' name='admin' id='makeAdmin' value='makeAdmin' />
      <SpanPseudo />
      <Span>
        <RegularText
          size='medium'
          weight={400}
          color={theme.secondaryText}
          align='center'
          sansSerif>
          <FormattedMessage id='makeAdmin' />
        </RegularText>
      </Span>
    </Label>
  );
};

const InputCheckbox = styled.input`
`;

const User: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  console.log(theme);

  return (
    <UserContainer>
      <UserAvatar src='https://avatars.mds.yandex.net/i?id=39e360f2a3c9b7b5782446d6780cf96e-7011667-images-thumbs&n=13' />
      <RegularText
        size='medium'
        weight={400}
        color={theme.secondaryText}
        align='center'
        sansSerif>
        Екатерина Молокова
      </RegularText>
      <RegularText
        size='medium'
        weight={400}
        color={theme.secondaryText}
        align='center'
        sansSerif>
        <FormattedMessage id='user' />
      </RegularText>
      <CheckBox />
    </UserContainer>
  );
};

export default User;
