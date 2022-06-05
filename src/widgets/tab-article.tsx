import React, { FC, useState } from 'react';
import styled from 'styled-components';
import FeedRibbon from './feed-ribbon';
import { TTabProps } from '../types/styles.types';

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
  cursor: pointer;
`;

const TabAllPosts = styled(Tab)<TTabProps>`
  border-bottom: ${({ border }) => border};
`;

const TabMySubscriptions = styled(Tab)<TTabProps>`
  border-bottom: ${({ border }) => border};
`;

const TabArticle: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const togglTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <TabsContainer>
        <TabAllPosts border={activeTab === 1 ? '2px solid #008AFF' : 'none'} onClick={() => togglTab(1)}>Все посты</TabAllPosts>
        <TabMySubscriptions border={activeTab === 2 ? '2px solid #008AFF' : 'none'} onClick={() => togglTab(2)}>Мои подписки</TabMySubscriptions>
      </TabsContainer>
      {activeTab === 1 && <FeedRibbon />}
      {activeTab === 2 && <FeedRibbon />}
    </>
  );
};
export default TabArticle;
