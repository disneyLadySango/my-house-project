import React, { useState } from 'react'

import Light from '../../components/organisms/Remocon/Light'
import RemoconList from '../../components/organisms/RemoconList'

import * as Presenter from './Presenter'
import * as Hooks from './hooks'

const API_KEY = window.location.search.replace('?key=', '')

const RemoconPage: React.FC = () => {
  const [ activeIndex, setActiveIndex ] = useState<number>(0)

  const [ fetchDataState ] = Hooks.useFetchData()

  const { apiFetchData, isError, isFirstSearch } = fetchDataState

  if (!isFirstSearch) return <Presenter.ErrorPage text={''} />

  const errorText = isError ? 'エラーが発生しました。時間を置いて再度ページを更新してください。'
    : !API_KEY ? 'GETパラメータにAPIKEYが設定されていません。keyにAPIKEYを設定してください。'
    : apiFetchData.length === 0 ? 'データがないか、APIKEYが誤っています。' : null

  if (errorText && isFirstSearch) return <Presenter.ErrorPage text={errorText} />

  if (apiFetchData && activeIndex) {
  }
  const signals = apiFetchData[0]['signals'] || null
  return (
    <Presenter.RemoconPage>
      <Presenter.RemoconListWrapper>
        <RemoconList 
          apiFetchData={apiFetchData}
          activeIndex={activeIndex}
          onClick={setActiveIndex}
        />
      </Presenter.RemoconListWrapper>
      {signals &&
        <Light 
          signals={signals} onClick={(id: string) => console.log(id)}
        />
      }
    </Presenter.RemoconPage>
  )
}

export default RemoconPage
