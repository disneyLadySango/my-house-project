import React from 'react'
import styled from 'styled-components'

import TypoGraphy, { TypoGraphyEnum } from '../../components/atoms/TypoGraphy'

const StyledRemoconPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const RemoconPage: React.FC = props => (
  <StyledRemoconPage>
    {props.children}
  </StyledRemoconPage>
)

const StyledWrapper = styled.div`
  width: 100%;
`
export const RemoconListWrapper: React.FC = props => (
  <StyledWrapper>
    {props.children}
  </StyledWrapper>
)

const StyledErrorWrapper = styled.div`
  width: 100%;
  color: #F50057;
  text-align: center;
`
export const ErrorPage: React.FC<{ text: string }> = (props) => (
  <StyledRemoconPage>
    <StyledErrorWrapper>
      <TypoGraphy size={48} bold={TypoGraphyEnum.TITLE} text={props.text} />
    </StyledErrorWrapper>
  </StyledRemoconPage>
)
