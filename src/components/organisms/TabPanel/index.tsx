import React from 'react'
import styled from 'styled-components'
import { grayE } from '../../../util/styles'

interface TabPanelProps {
  index: number
  value: number
}

const TabPanel: React.SFC<TabPanelProps> = props => {
  const { children, value, index } = props;

  return (
    <Component
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && children}
    </Component>
  );
}

export default TabPanel

const Component = styled.div`
  border: 2px solid ${grayE};
`