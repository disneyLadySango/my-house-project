import React from 'react'
import styled, { css } from 'styled-components'

type TypoGraphyProps = {
  size: number
}
const StyledContainer = styled.div<TypoGraphyProps>`
  line-height: 1.35;
  margin: 0;
  ${props =>
    props.size &&
      css`
        font-size: ${props.size}px;
      `
  }
`
export const TypoGraphy: React.FC<TypoGraphyProps> = props => 
  <StyledContainer size={props.size}>{props.children}</StyledContainer>

export const Title: React.FC = props => <h2>{props.children}</h2>

export const ContentTitle: React.FC = props => <h3>{props.children}</h3>

export const ItemText: React.FC = props => <h5>{props.children}</h5>

export const Label: React.FC = props => <label>{props.children}</label>
