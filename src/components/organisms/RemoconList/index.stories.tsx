import React from 'react'
import { storiesOf } from '@storybook/react';

import { defaultProps as ItemProps } from '../../molecules/RemoconListItem/index.stories'

import RemoconList from '.'
import { IProps } from './type'

export const defaultProps: IProps = {
  remoconList: [ ItemProps, ItemProps, ItemProps, ItemProps, ItemProps, ItemProps, ],
  onClick: (index: number) => console.log(index)
}

storiesOf('/components/organisms/RemoconList', module)
  .add('Default', () => <RemoconList {...defaultProps} />)
;