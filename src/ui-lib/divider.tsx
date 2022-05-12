import React from 'react';
import styled from 'styled-components';
import { dividerGray } from '../constants/colors';

const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid ${dividerGray};
  padding: 0;
  margin: 0;
`;

export default Divider;
