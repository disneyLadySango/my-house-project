import React from 'react'
import styled from 'styled-components'

const StyledRemoconListItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 100%;
`
export const RemoconListItem: React.FC = props => (
  <StyledRemoconListItem>
    {props.children}
  </StyledRemoconListItem>
)

const StyledWrapper = styled.div`
  margin: 5px auto 0;
`
export const AtomsWrapper: React.FC = props => (
  <StyledWrapper>
    {props.children}
  </StyledWrapper>
)
