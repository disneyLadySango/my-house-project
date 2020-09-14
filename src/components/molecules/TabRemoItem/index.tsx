import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import MovieFilterIcon from '@material-ui/icons/MovieFilter'
import SpeakerIcon from '@material-ui/icons/Speaker'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import remo from '../../../assets/json/remo.json'
import { SendRequest } from '../../../util/api'

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(5),
  },
}))

const initRemoOpens = remo.map(v => false)

const TabRemoItem: React.SFC = props => {
  const classes = useStyles()
  const [opens, setOpens] = useState(initRemoOpens)
  const setOpen = (index: number) => {
    const newOpens = [...opens]
    console.log(newOpens)
    newOpens[index] = !opens[index]
    setOpens(newOpens)
  }
  const send = async(id: string) => {
    const msg = await SendRequest(id)
    if (msg !== '') alert(msg)
  }
  return (
    <Component>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {remo && remo.map((model, index) => {
          return (
            <>
              <ListItem
                key={`remo-model-${index}`}
                button
                onClick={()=> setOpen(index)}
              >
                <ListItemIcon>
                  {model.image === 'WbIncandescent' && <WbIncandescentIcon />}
                  {model.image === 'MovieFilter' && <MovieFilterIcon />}
                  {model.image === 'Speaker' && <SpeakerIcon />}
                </ListItemIcon>
                <ListItemText primary={model.name} />
                {opens[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse key={`remo-model-collapse-${index}`} in={opens[index]} unmountOnExit>
                <List component="div" disablePadding>
                  {model.signals.map((signal, childIndex) => 
                    <ListItem
                      key={`remo-model-${index}-${childIndex}`}
                      button
                      className={classes.nested}
                      onClick={() => send(signal.id)}
                    >
                      <ListItemIcon>
                        <RssFeedIcon />
                      </ListItemIcon>
                      <ListItemText primary={signal.name}  />
                    </ListItem>
                  )}
                </List>
              </Collapse>
            </>
          )
        })}
      </List>

    </Component>
  )
}
export default TabRemoItem

const Component = styled.div`
  flex-direction: column;
  padding: 5%;
`
