import React, { FC, useState } from 'react';
import styled from 'styled-components';
import FeedRibbon from './feed-ribbon';

const TabsContainer = styled.div`
  overflow: hidden;
  width: 100%;
  margin-bottom: 33px;
`;

const PStyle = styled.p`
  width: 46.745vw;
`;

const Tab = styled.button`
  padding: 16px 8px;
  font-family: ${({ theme }) => theme.text18Sans.family};
  font-size: ${({ theme }) => theme.text18Sans.size}px;
  font-weight: ${({ theme }) => theme.text18Sans.weight};
  line-height: ${({ theme }) => theme.text18Sans.height}px;
  color: ${({ theme }) => theme.primaryText};
  border: 0;
  background-color: #fff;
`;

const TabAllPosts = styled(Tab)<{ border: string }>`
  border-bottom: ${({ border }) => border};
`;

const TabMySubscriptions = styled(Tab)<{ border: string }>`
  border-bottom: ${({ border }) => border};
`;

const TabArticle: FC = () => {
  const [allPosts, setAllPosts] = useState(true);
  const [mySubscriptions, setMySubscriptions] = useState(false);
  const onClickAllPosts = () => {
    setAllPosts(true);
    setMySubscriptions(false);
  };
  const onClickMySubscriptions = () => {
    setAllPosts(false);
    setMySubscriptions(true);
  };
  return (
    <>
      <TabsContainer>
        <TabAllPosts border={allPosts ? '2px solid #008AFF' : 'none'} onClick={onClickAllPosts}>Все посты</TabAllPosts>
        <TabMySubscriptions border={mySubscriptions ? '2px solid #008AFF' : 'none'} onClick={onClickMySubscriptions}>Мои подписки</TabMySubscriptions>
      </TabsContainer>
      {allPosts && <FeedRibbon />}
      {mySubscriptions && <PStyle>Пока тут пусто, но скоро что-то будет, сто процентов</PStyle>}
    </>
  );
};
export default TabArticle;
