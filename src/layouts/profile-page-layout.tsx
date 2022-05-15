import React, { FC } from "react";
import styled, {useTheme} from "styled-components";
import { mainBgColor } from "../constants/colors";


const ProfilePageLayout = styled.section`
    width:100%;
    margin-top: 318px;
    z-index: 99999;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.bgPrimary};
    @media screen and (max-width:800px) {
        margin-top: 206px;
    }
    @media screen and (max-width: 600px) {
        margin-top: 236px;
    }



`;

export default ProfilePageLayout;
