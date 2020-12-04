import React from 'react'

import Icon, { IconEnum } from '../../atoms/Icon'
import TypoGraphy from '../../atoms/TypoGraphy'

import { RemoconButtonEnum } from '.'
import * as Presenter from './Presenter'
import * as Type from './type'

const ButtonText : React.FC<Type.Props> = props => {
  switch(props.type) {
    case RemoconButtonEnum.DEFAULT_TWO:
      return <TwoColumnRemoconButton {...props} />
    
    case RemoconButtonEnum.DEFAULT_THREE:
      return <h1>THREE</h1>

    case RemoconButtonEnum.UPDOWN:
      return <OneColumnUpDownRemoconButton {...props} />

    default:
      return <TwoColumnRemoconButton {...props} />
  }
}

const TwoColumnRemoconButton: React.FC<Type.TwoColumnRemoconButtonProps> = props => {
  return (
    <Presenter.TwoColumnRemoconButton>
      <Presenter.AtomsWrapper>
        <Icon {...props.icon} />
      </Presenter.AtomsWrapper>
      <Presenter.AtomsWrapper>
        <TypoGraphy {...props.typoGraphy} />
      </Presenter.AtomsWrapper>
    </Presenter.TwoColumnRemoconButton>
  )
}

const OneColumnUpDownRemoconButton: React.FC<Type.OneColumnUpDownRemoconButtonProps> = props => {
  return (
    <Presenter.OneColumnUpDownRemoconButton>
      <Presenter.OneColumnAtomsWrapper>
        <TypoGraphy {...props.typoGraphy} />
      </Presenter.OneColumnAtomsWrapper>
      <Presenter.OneColumnAtomsWrapper>
        <Presenter.OneColumnUpDownWrapper>
          <Icon size={props.iconSize} image={IconEnum.CIRCLE_UP} />
        </Presenter.OneColumnUpDownWrapper>
        <Presenter.OneColumnUpDownWrapper>
          <Icon size={props.iconSize} image={IconEnum.CIRCLE_DOWN} />
        </Presenter.OneColumnUpDownWrapper>
      </Presenter.OneColumnAtomsWrapper>
    </Presenter.OneColumnUpDownRemoconButton>
  )
}

const RemoconButton: React.FC<Type.Props> = props => {
  return (
    <Presenter.RemoconButton onClick={props.onClick}>
      <ButtonText {...props} />
    </Presenter.RemoconButton>
  )
}

export default RemoconButton
