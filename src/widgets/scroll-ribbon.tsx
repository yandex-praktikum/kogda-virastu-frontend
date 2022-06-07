import React, {
  FC,
  PropsWithChildren,
} from 'react';
import styled from 'styled-components';

import { TScrollRibbonProps } from '../types/widgets.types';

const Ribbon = styled.section`
  // overflow: scroll;
  max-width: 750px;
  height: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  @media screen and (max-width:840px) {
    max-width: 720px;
  };
  @media screen and (max-width:720px) {
    max-width: 320px;
    box-sizing: border-box;
    padding: 0 20px 0 20px;
  };
`;

const ScrollRibbon : FC<PropsWithChildren<TScrollRibbonProps>> = ({
  children,
}) => (
  <Ribbon>
    {children}
  </Ribbon>
);

export default ScrollRibbon;
