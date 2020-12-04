import React from 'react'

import Icon from '../../atoms/Icon'
import TypoGraphy from '../../atoms/TypoGraphy'

import * as Presenter from './Presenter'
import * as Type from './type'

const RemoconListItem: React.FC<Type.Props> = props => {
  return (
    <Presenter.RemoconListItem>
      <Presenter.AtomsWrapper>
        <Icon {...props.icon} />
      </Presenter.AtomsWrapper>
      <Presenter.AtomsWrapper>
        <TypoGraphy {...props.typoGraphy} />
      </Presenter.AtomsWrapper>
    </Presenter.RemoconListItem>
  )
}

export default RemoconListItem
