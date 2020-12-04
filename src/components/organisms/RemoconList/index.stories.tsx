import React from 'react'
import { storiesOf } from '@storybook/react';

import RemoconList from '.'
import * as NatureRemoProps from '../../../types/natureremo'
import * as Type from './type'

export const defaultFetchData: NatureRemoProps.Appliance = {
  aircon: null,
  device: null,
  id: 'sample',
  image: "ico_light",
  model: null,
  nickname: "サンプル照明",
  settings: null,
  signals: null,
  type: "IR",
}
export const defaultProps: Type.Props = {
  apiFetchData: [ 
    {...defaultFetchData, nickname: 'サンプル照明'},
    {...defaultFetchData, nickname: 'サンプルエアコン'},
    {...defaultFetchData, nickname: 'サンプルプロジェクタ'},
    {...defaultFetchData, nickname: 'サンプルスピーカー'},
    {...defaultFetchData, nickname: 'サンプルテスト'},
  ],
  activeIndex: 0,
  onClick: (index: number) => console.log(index)
}

storiesOf('/components/organisms/RemoconList', module)
  .add('Default', () => <RemoconList {...defaultProps} />)
;
