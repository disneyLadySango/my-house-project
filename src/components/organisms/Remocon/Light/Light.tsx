import React, { useMemo, useCallback } from 'react'
import { IconEnum } from '../../../atoms/Icon'
import { TypoGraphyEnum } from '../../../atoms/TypoGraphy'
import RemoconButton, { RemoconButtonEnum } from '../../../molecules/RemoconButton'

import * as Presenter from './Presenter'
import * as Type from './type'

const ICON_TYPES = [
  IconEnum.POWER,
  IconEnum.LIGHT_MINI,
  IconEnum.CIRCLE_UP,
  IconEnum.CIRCLE_DOWN,
]

const REMOCON_BUTTON_TYPES = [ 
  RemoconButtonEnum.DEFAULT_TWO,
  RemoconButtonEnum.DEFAULT_TWO,
  RemoconButtonEnum.UPDOWN,
  RemoconButtonEnum.UPDOWN,
]

const createRemoconButtonProps = (props: Type.Props) => (
  props.signals.map((signal, index) => (
    {
      type: REMOCON_BUTTON_TYPES[index],
      iconSize: 30,
      icon: {
        image: ICON_TYPES[index],
        size: 50,
      },
      typoGraphy: {
        size: 30,
        text: signal.name,
        bold: TypoGraphyEnum.ITEM_TEXT,
      },
      onClick: useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        props.onClick(signal.id)
      }, [signal.id]),
    }
  ))
)

const TwoColumn: React.FC<{ buttons: Array<Type.ColumnProps> }> = props => {
  return (
    <Presenter.ColumnContainer>
      {props.buttons.map((button, index) => (
        <Presenter.TwoColumn key={`remocon-button-twocolumn-${index}`}>
          <RemoconButton {...button} />
        </Presenter.TwoColumn>
      ))}
    </Presenter.ColumnContainer>
  )
}

const OneClumnLightVolumeRow: React.FC<Type.ColumnProps> = props => {
  return (
    <Presenter.ColumnContainer>
      <Presenter.OneColumnLightVolume>
        <RemoconButton {...props} />
      </Presenter.OneColumnLightVolume>
    </Presenter.ColumnContainer>
  )
}

const Light: React.FC<Type.Props> = props => {
  const remoconButtons = useMemo(
    () => createRemoconButtonProps(props)
  , [props])
  remoconButtons[2].typoGraphy.text = '光量'
  return (
    <Presenter.Light>
      <TwoColumn buttons={[ remoconButtons[0], remoconButtons[1] ]} />
      <OneClumnLightVolumeRow {...remoconButtons[2]} />
    </Presenter.Light>
  )
}

export default Light
