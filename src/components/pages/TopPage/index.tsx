import React, { useState } from 'react'
import styled, { css } from 'styled-components'
// import media from 'styled-media-query'
import {
  makeStyles
} from '@material-ui/core'
import WifiIcon from '@material-ui/icons/Wifi';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import RemoTemplate from '../../templates/RemoTemplate'
import WifiTemplate from '../../templates/WifiTemplate'

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '100%',
    height: 'auto',
    color: 'rgba(0, 0, 0, 0.51)',
  },
  iconActive: {
    width: '100%',
    height: 'auto',
    color: 'rgba(0, 0, 0, 0.82)',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const TopPage: React.FC = (props) => {
  const style = useStyles()
  const [ activeSection , setActiveSection ] = useState('remo')
  return (
    <Main>
      <Navigation>
        <IconNavigation>
          <IconWrapper onClick={() => setActiveSection('remo')} active={activeSection === 'remo'}>
            <SettingsRemoteIcon className={activeSection === 'remo' ? style.iconActive : style.icon} fontSize={'large'} color={'action'} />
          </IconWrapper>
        </IconNavigation>
        <IconNavigation>
          <IconWrapper onClick={() => setActiveSection('wifi')} active={activeSection === 'wifi'}>
            <WifiIcon className={activeSection === 'wifi' ? style.iconActive : style.icon} fontSize={'large'} color={'action'} />
          </IconWrapper>
        </IconNavigation>
        <IconNavigation>
          <IconWrapper onClick={() => setActiveSection('voice')} active={activeSection === 'voice'}>
            <SettingsVoiceIcon className={activeSection === 'voice' ? style.iconActive : style.icon} fontSize={'large'} color={'action'} />
          </IconWrapper>
        </IconNavigation>
      </Navigation>
      <DetailContainer>
        {activeSection === 'remo' && <RemoTemplate />}
        {activeSection === 'wifi' && <WifiTemplate />}
      </DetailContainer>
    </Main>
  )
}
export default TopPage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10% 5%;
`
const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 2% 10%;
`
const IconNavigation = styled.div`
  width: calc(100% / 3);
  border-left: 3px solid rgba(0, 0, 0, 0.51);
  padding: 1% 5%;
  :last-of-type {
    border-right: 3px solid rgba(0, 0, 0, 0.51);
  }
`
interface IconWrapperProps {
  active: boolean
}
const IconWrapper = styled.div<Pick<IconWrapperProps, 'active'>>`
  &:hover {
    ${props => props.active ?
      css`
        opacity: 1;
        cursor: default;
      ` 
     :
      css`
        opacity: 0.5;
        cursor: pointer;
      `}
  }
`
const DetailContainer = styled.div`
  display: flex;
`