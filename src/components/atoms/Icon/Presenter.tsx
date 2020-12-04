import React from 'react'
import styled, { css } from 'styled-components'

const StyledContainer = styled.div<{ size: number }>`
  margin: 0 auto;
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
type IconProps = {
  image: string
  size: number
}
export const Icon: React.FC<IconProps> = props => (
  <StyledContainer size={props.size}>
    <StyledIcon src={`${process.env.PUBLIC_URL}/icon/${props.image}.svg`} />
  </StyledContainer>
)
