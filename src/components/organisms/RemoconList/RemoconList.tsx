import React, { useState } from 'react'
import { RemoconItem, Component } from './Presenter'
import { IProps } from './type'

const RemoconList: React.FC<IProps> = props => {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemClick = (index: number) => {
    if (index === activeIndex) return
    setActiveIndex(index)
    props.onClick(index)
  }
  return (
    <Component>
      {props.remoconList.map((remocon, index) => (
        <RemoconItem 
          key={`remocon_list_item_${index}`}
          remoconListItem={remocon}
          isActive={index === activeIndex}
          onClick={() => itemClick(index)}
        />
      ))}
    </Component>
  )
}

export default RemoconList
