import React from 'react'
import { Component, Title, ContentTitle, ItemText, Label } from './Presenter'
import { IProps } from './type'
import { TypoGraphyEnum } from '.'

const createChild = (bold: TypoGraphyEnum) => {
  switch (bold) {
    case TypoGraphyEnum.TITLE:
      return Title
    case TypoGraphyEnum.CONTENT_TITLE:
      return ContentTitle
    case TypoGraphyEnum.ITEM_TEXT:
      return ItemText
    case TypoGraphyEnum.LABEL:
    default:
      return Label
  }
}

const TypoGraphy: React.FC<IProps> = props => {
  const ChildComponent = createChild(props.bold)
  return (
    <Component size={props.size}>
      <ChildComponent>{props.text}</ChildComponent>
    </Component>
  )
}

export default TypoGraphy