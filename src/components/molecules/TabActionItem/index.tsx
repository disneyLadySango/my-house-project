import React from 'react'
import styled from 'styled-components'
import {
  Typography,
} from '@material-ui/core'
import { grayC, grayF } from '../../../util/styles'
import { SendRequests } from '../../../util/api'
import actions from '../../../assets/json/action.json'

interface ActionProps {
  ids: Array<string>
  title: string
  descriptions: Array<string>
}

const TabActionItem: React.SFC = props => {
  const actionExecute = async(ids: Array<string>) => {
    const msg = await SendRequests(ids)
    if (msg !== '') {
      alert(msg)
    }
  }
  return (
    <Component>
      {actions.map((action: ActionProps, index) =>
        <Item onClick={() => actionExecute(action.ids)} key={`action-item-${index}`}>
          <Typography variant="h6" component="h6">
            {action.title}
          </Typography>
          <DescriptionContainer>
            {action.descriptions.map((description, detailIndex) =>
              <Typography
                key={`action-item-${index}-${detailIndex}`}
                variant="body2"
                component="p"
              >
                {description}
              </Typography>
            )}
          </DescriptionContainer>
          
        </Item>
      )}
    </Component>
  )
}
export default TabActionItem

const Component = styled.ul`
  list-style: none;
  flex-direction: column;
  padding: 5%;
`
const Item = styled.li`
  background-color: ${grayF};
  display: flex;
  flex-direction: column;
  padding: 3% 5%;
  margin-bottom: 10px;
  &:hover {
    opacity: 0.5;
  }
`
const DescriptionContainer = styled.div`
  padding: 3% 10% 0;
  display: flex;
  flex-direction: column;
  border-top: 2px dotted ${grayC};
`