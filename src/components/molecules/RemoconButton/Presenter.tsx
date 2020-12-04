import React from 'react'
import styled from 'styled-components'

const StyledRemoconButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 0px;
  text-align: center;
  background-color: #FFF;
`
type RemoconButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const RemoconButton: React.FC<RemoconButtonProps> = props => (
  <StyledRemoconButton onClick={props.onClick}>
    {props.children}
  </StyledRemoconButton>
)

const StyledWrapper = styled.div`
  width: 100%;
  margin: 10px auto 0;
`
export const TwoColumnRemoconButton: React.FC = props => (
  <StyledWrapper>
    {props.children}
  </StyledWrapper>
)
export const AtomsWrapper: React.FC = TwoColumnRemoconButton


const StyledOneColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const OneColumnUpDownRemoconButton: React.FC = props => (
  <StyledOneColumnContainer>
    {props.children}
  </StyledOneColumnContainer>
)

const StyledOneColumnAtomsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  text-align: right;
`
export const OneColumnAtomsWrapper: React.FC = props => (
  <StyledOneColumnAtomsWrapper>
    {props.children}
  </StyledOneColumnAtomsWrapper>
)

const StyledOneColumnUpDownWrapper = styled.div`
  width: 100%;
  margin: 5px auto;
`
export const OneColumnUpDownWrapper: React.FC = props => (
  <StyledOneColumnUpDownWrapper>
    {props.children}
  </StyledOneColumnUpDownWrapper>
)
