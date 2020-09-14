import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import {
  Typography,
} from '@material-ui/core';
import WifiCardItem from '../../organisms/WifiCardItem'
import WifiJson from '../../../assets/json/wifi.json'

const WifiTemplate: React.FC = (props) => {
  return (
    <Component>
      <Typography variant="h3" component="h3">
        Wifi情報
      </Typography>
      <Typography variant="body1" component="p">
        2.4GHz帯は、電波が遠方まで届きやすく障害物にも強いが、家電などの帯域とかぶるので干渉されやすい<br />
        5GHz帯は、ほかの家電が出す電波と干渉せず安定的に通信を行うことができるが、障害物には弱い<br />
        リビングにルータがある為基本は5GHz推奨
      </Typography>
      <WifiInfoList>
        {
          WifiJson && WifiJson.info.map((info, index) => 
            <WifiInfo key={`wifi-card-${index}`}>
              <WifiCardItem
                {...info}
                password={WifiJson.password}                
              />
            </WifiInfo>
          )
        }
      </WifiInfoList>

    </Component>
  )
}

export default WifiTemplate

const Component = styled.div`
  width: 100%;
  padding: 5%;
`
const WifiInfoList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
`
const WifiInfo = styled.li`
  padding: 5%;
  ${media.lessThan('medium')`
    width: 90%;
  `}
  ${media.greaterThan('medium')`
    width: 40%;
  `}
`