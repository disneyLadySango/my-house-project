import React from 'react'
import styled, { css } from 'styled-components'
import RemoconListItem from '../../molecules/RemoconListItem'
import { RemoconItemProps, RemoconItemState } from './type'

const StyledComponent = styled.ul`
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
`

const StyledListComponent = styled.li<RemoconItemState>`
  width: calc(( 100% -40px ) / 4 - 10px);
  min-width: 100px;
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

export const Component: React.FC = props => <StyledComponent>{props.children}</StyledComponent>

export const RemoconItem: React.FC<RemoconItemProps> = props => (
  <StyledListComponent isActive={props.isActive} onClick={props.onClick}>
    <RemoconListItem {...props.remoconListItem} />
  </StyledListComponent>
)