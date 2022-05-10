import React from 'react';
import styled from 'styled-components';
import { dividerGray } from '../constants/colors';

const Divider = styled.hr`
  width: 100%;
  border: 1px solid ${dividerGray};
`;

export default Divider;
