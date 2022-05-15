import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Divider } from '../ui-lib';

const Footer: FC = () => {
  const theme = useTheme();

  const FooterStyled = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: ${theme.bgPrimary};
  `;

  const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 1140px;
    height: 120px;
    padding: 0 20px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width:1200px) {
        max-width: 940px;
     }
    @media screen and (max-width:992px) {
      max-width: 720px;
      height: 87px;
    }
    @media screen and (max-width:768px) {
      max-width: 576px;
      
    }
    @media screen and (max-width:544px) {
      height: 79px;
    }
  `;

  const Text = styled.p`
    padding: 0;
    margin: 0;
    color: ${theme.secondaryText};
    white-space: nowrap;
    font: ${theme.footerText.weight} ${theme.footerText.size}px/${theme.footerText.height}px ${theme.footerText.family};
  `;

  const TextCreatedBy = styled(Text)`
    white-space: normal;
    @media screen and (max-width:770px) {
      line-height: 20px;
      max-width: 143px;
    }
  `;

  return (
    <FooterStyled>
      <Divider distance={0} />
      <Container>
        <Text>
          &copy;&nbsp;
          <FormattedMessage
            id='mainTitle'
            defaultMessage='Когда вырасту' />
        </Text>
        <TextCreatedBy>
          <FormattedMessage
            id='footerMessage'
            defaultMessage='Сделано студентами Яндекс Практикума' />
        </TextCreatedBy>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
