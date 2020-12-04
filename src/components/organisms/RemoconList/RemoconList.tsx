import React, { useMemo, useCallback } from 'react'

import { IconEnum } from '../../atoms/Icon'
import { TypoGraphyEnum } from '../../atoms/TypoGraphy'
import RemoconListItem from '../../molecules/RemoconListItem'

import * as Presenter from './Presenter'
import * as Type from './type'

const isName = (nickname: string, str: string) => nickname.indexOf(str) !== -1

const setImage = (nickname: string): IconEnum => {
  if (isName(nickname, '照明')) return IconEnum.LIGHT
  if (isName(nickname, 'エアコン')) return IconEnum.AIRCON
  if (isName(nickname, 'プロジェクタ')) return IconEnum.PROJECTOR
  if (isName(nickname, 'スピーカー')) return IconEnum.SPEACKER
  return IconEnum.OTHER
}

const createRemoconList = (data: Type.ApiFetchData) => {
  return data.map((model) => {
    const { nickname } = model
    const image = setImage(nickname)
    return {
      icon: {
        size: 36,
        image,
      },
      typoGraphy: {
        size: 12,
        bold: TypoGraphyEnum.LABEL,
        text: model.nickname
      } 
    }
  })
}

const RemoconList: React.FC<Type.Props> = props => {
  const { apiFetchData, activeIndex, onClick } = props

  const remoconList = useMemo(
    () => createRemoconList(apiFetchData)
  , [apiFetchData])

  const onRemoconItemClick = useCallback((index: number, isActive: boolean) => {
    if (isActive) return
    onClick(index)
  }, [])

  return (
    <Presenter.RemoconList>
      {remoconList.map((remocon, index) => {
        const isActive = index === activeIndex

        return (
          <Presenter.RemoconListItem
            key={`remocon_list_item_${index}`}
            isActive={isActive}
            onClick={() => onRemoconItemClick(index, isActive)}
          >
            <RemoconListItem {...remocon} />
          </Presenter.RemoconListItem>
        )
      })}
    </Presenter.RemoconList>
  )
}

export default RemoconList
