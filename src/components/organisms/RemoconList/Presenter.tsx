import React from 'react'
import styled, { css } from 'styled-components'

const StyledRemoconList = styled.ul`
  display: flex;
  overflow-x: auto;
  margin: 0;
  padding: 0;
`
export const RemoconList: React.FC = props => (
  <StyledRemoconList>{props.children}</StyledRemoconList>
)

const StyledListComponent = styled.li<{ isActive: boolean }>`
  display: inline-block;
  min-width: 20%;
  padding: 10px 20px 30px;
  opacity: 0.5;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  ${props => props.isActive && css`
      opacity: 1;
      border-bottom: 10px solid #555555;
      :hover {
        opacity: 1;
      }
    `
  }
`
type RemoconListItem = {
  isActive: boolean
  onClick: () => void
}
export const RemoconListItem: React.FC<RemoconListItem> = props => (
  <StyledListComponent isActive={props.isActive} onClick={props.onClick}>
    {props.children}
  </StyledListComponent>
)
