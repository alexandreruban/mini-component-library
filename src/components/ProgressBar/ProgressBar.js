/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]

  return (
    <Wrapper
      radius={styles.radius}
      padding={styles.padding}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrapper>
        <Bar height={styles.height} value={value}></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: ${props => props.radius + 'px'};
  padding: ${props => props.padding + 'px'};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  `

  const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
  `

  const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  height: ${props => props.height + 'px'};
  width: ${props => props.value}%;
`

export default ProgressBar;
