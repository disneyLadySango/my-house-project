import React from 'react'
import { storiesOf } from '@storybook/react';

import { defaultProps as IconProps } from '../../atoms/Icon/index.stories'
import { defaultProps as TypoGraphyProps } from '../../atoms/TypoGraphy/index.stories'

import RemoconListItem from '.'
import * as Type from './type'

export const defaultProps: Type.Props = {
  icon: IconProps,
  typoGraphy: TypoGraphyProps,
}

storiesOf('/components/molecules/RemoconListItem', module)
  .add('Default', () => <RemoconListItem {...defaultProps} />)
;
