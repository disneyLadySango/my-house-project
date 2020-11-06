import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon, { IconEnum } from '.';
import { IProps } from './type'

export const defaultProps: IProps = {
  size: 64,
  image: IconEnum.AIRCON,
}

storiesOf('/components/atoms/Icon', module)
  .add('Projector', () => <Icon {...defaultProps} image={IconEnum.PROJECTOR} />)
  .add('Aircon', () => <Icon {...defaultProps} image={IconEnum.AIRCON} />)
  .add('Speaker', () => <Icon {...defaultProps} image={IconEnum.SPEACKER} />)
  .add('Light', () => <Icon {...defaultProps} image={IconEnum.LIGHT} />)
;