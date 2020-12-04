import React from 'react'
import styled from 'styled-components'

import * as ParentPresenter from '../Presenter'

const StyledLight = styled(ParentPresenter.StyledRemocon)`
  background-color: #FFF59D;
`
export const Light: React.FC = props => (
  <StyledLight>{props.children}</StyledLight>
)

export const ColumnContainer: React.FC = props => (
  <ParentPresenter.StyledContainer>
    {props.children}
  </ParentPresenter.StyledContainer>
)

const StyledTwoColumnWrapper = styled(ParentPresenter.StyledWrapper)`
  width: calc(100% / 2);
`
export const TwoColumn: React.FC = props => (
  <StyledTwoColumnWrapper>
    {props.children}
  </StyledTwoColumnWrapper>
)

const StyledOneColumnWrapper = styled(ParentPresenter.StyledWrapper)`
  width: 100%;
`
export const OneColumnLightVolume: React.FC= props => (
  <StyledOneColumnWrapper>
    {props.children}
  </StyledOneColumnWrapper>
)
