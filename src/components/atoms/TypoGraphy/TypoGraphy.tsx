import React from 'react'

import { TypoGraphyEnum } from '.'
import * as Presenter from './Presenter'
import * as Type from './type'

const Text: React.FC<{ bold: TypoGraphyEnum}> = (props) => {
  switch (props.bold) {
    case TypoGraphyEnum.TITLE:
      return <Presenter.Title>{props.children}</Presenter.Title>
    case TypoGraphyEnum.CONTENT_TITLE:
      return <Presenter.ContentTitle>{props.children}</Presenter.ContentTitle>
    case TypoGraphyEnum.ITEM_TEXT:
      return <Presenter.ItemText>{props.children}</Presenter.ItemText>
    case TypoGraphyEnum.LABEL:
    default:
      return <Presenter.Label>{props.children}</Presenter.Label>
  }
}

const TypoGraphy: React.FC<Type.Props> = props => {
  return (
    <Presenter.TypoGraphy size={props.size}>
      <Text bold={props.bold}>
        {props.text}
      </Text>
    </Presenter.TypoGraphy>
  )
}

export default TypoGraphy
