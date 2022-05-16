import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';

const ProfilePageLayout = styled.section`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    padding-bottom: 155px;
    @media screen and (max-width: 768px){
        padding-bottom: 100px;
    }
`;

export default ProfilePageLayout;
