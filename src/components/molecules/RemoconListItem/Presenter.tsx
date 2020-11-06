import React from 'react'
import styled from 'styled-components'
import Icon from '../../atoms/Icon'
import { RemoconListItemProps } from './type'
import TypoGraphy from '../../atoms/TypoGraphy'

const StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 100%;
`

const StyledWrapper = styled.div`
  margin: 5px auto 0;
`

export const Component: React.FC<RemoconListItemProps> = props => (
  <StyledComponent>
    <StyledWrapper>
      <Icon {...props.icon} />
    </StyledWrapper>
    <StyledWrapper>
      <TypoGraphy {...props.typoGraphy} />
    </StyledWrapper>
  </StyledComponent>
)