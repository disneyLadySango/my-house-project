import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components'
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  useTheme,
} from '@material-ui/core';
import TabPanel from '../../organisms/TabPanel'
import TabActionItem from '../../molecules/TabActionItem'
import TabRemoItem from '../../molecules/TabRemoItem'

const RemoTemplate: React.FC = props => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Component>
      <Typography variant="h3" component="h3">
        リモコン操作
      </Typography>
      <AppBar position="static" color="default">
        <Tabs
          value={tabIndex}
          onChange={(e, value) => setTabIndex(value)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="アクション" />
          <Tab label="リモコン" />
          <Tab label="ヘルプ" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={tabIndex}
        onChangeIndex={(index: number) => setTabIndex(index)}
      >
        <TabPanel value={tabIndex} index={0}>
          <TabActionItem />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <TabRemoItem />
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <p>TEST</p>
        </TabPanel>
      </SwipeableViews>
    </Component>
  )
}

export default RemoTemplate

const Component = styled.div`
  width: 100%;
  padding: 5%;
`
// const Navigation = styled.nav`

// `
