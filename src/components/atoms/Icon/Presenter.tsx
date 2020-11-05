import React from 'react'
import styled, { css } from 'styled-components'
import { IconProps, ContaineProps } from './type'

const StyledContainer = styled.div<ContaineProps>`
  ${props => 
    props.size &&
      css`
        width: ${props.size}px;
        height: ${props.size}px;
      `
  }
`

const StyledIcon = styled.img`
  width: 100%;
  height: auto;
`

export const Component: React.FC<IconProps> = props => (
  <StyledContainer size={props.size}>
    <StyledIcon src={`${process.env.PUBLIC_URL}/icon/${props.image}.svg`} />
  </StyledContainer>
)