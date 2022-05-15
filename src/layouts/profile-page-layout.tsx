import React, { FC } from "react";
import styled, {useTheme} from "styled-components";
import { mainBgColor } from "../constants/colors";


const ProfilePageLayout = styled.section`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.bgPrimary};

`;

export default ProfilePageLayout;
