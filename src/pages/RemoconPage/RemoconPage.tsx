import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { 
  Component,
  ErrorPage,
  RemoconListWrapper,
} from './Presenter'
import { IconEnum } from '../../components/atoms/Icon'
import { TypoGraphyEnum } from '../../components/atoms/TypoGraphy'

const API_KEY = window.location.search.replace('?key=', '')

const isName = (nickname: string, str: string) => nickname.indexOf(str) !== -1

const createRemoconList = (data: any) => {
  return data.map((model: any) => {
    let img = IconEnum.OTHER
    if (isName(model.nickname, '照明')) {
      img = IconEnum.LIGHT
    } else if (isName(model.nickname, 'エアコン')) {
      img = IconEnum.AIRCON
    } else if (isName(model.nickname, 'プロジェクタ')) {
      img = IconEnum.PROJECTOR
    } else if (isName(model.nickname, 'スピーカー')) {
      img = IconEnum.SPEACKER
    }
    return {
      icon: {
        size: 36,
        image: img,
      },
      typoGraphy: {
        size: 12,
        bold: TypoGraphyEnum.LABEL,
        text: model.nickname
      }
      
    }
  })
}

const RemoconPage: React.FC = () => {
  const [ isError, setError ] = useState(false)
  const [ apiResult, setApiResult ] = useState([])
  const [ remoconList, setRemoconList ] = useState([])
  const [ activeIndex, setActiveIndex ] = useState(0)
  useEffect(() => {
    const findRemoData = async () => {
      const result = await axios({
        url: 'https://api.nature.global/1/appliances',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      })
      if (result.status !== 200) {
        setError(true)
        return
      }
      setApiResult(result.data)
      setRemoconList(createRemoconList(result.data))
    }
    findRemoData()
  }, [])

  if (isError) return <ErrorPage />

  if (apiResult && activeIndex) {

  }
  return (
    <Component>
      {remoconList.length !== 0 && <RemoconListWrapper remoconList={remoconList} onClick={setActiveIndex}  />}
    </Component>
  )
}

export default RemoconPage
