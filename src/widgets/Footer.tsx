import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Divider } from '../ui-lib';

const Footer: FC = () => {
  const theme = useTheme();

  const FooterStyled = styled.footer`
    position: relative;
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
    font: 400 16px/24px 'Alegreya Sans';
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
      <Divider />
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
