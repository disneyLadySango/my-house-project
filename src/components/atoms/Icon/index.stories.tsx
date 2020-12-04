import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon, { IconEnum } from '.';
import * as Type from './type'

export const defaultProps: Type.Props = {
  size: 64,
  image: IconEnum.AIRCON,
}

storiesOf('/components/atoms/Icon', module)
  .add(IconEnum.AIRCON, () => <Icon {...defaultProps} image={IconEnum.AIRCON} />)
  .add(IconEnum.CIRCLE_DOWN, () => <Icon {...defaultProps} image={IconEnum.CIRCLE_DOWN} />)
  .add(IconEnum.CIRCLE_UP, () => <Icon {...defaultProps} image={IconEnum.CIRCLE_UP} />)
  .add(IconEnum.LIGHT, () => <Icon {...defaultProps} image={IconEnum.LIGHT} />)
  .add(IconEnum.LIGHT_MINI, () => <Icon {...defaultProps} image={IconEnum.LIGHT_MINI} />)
  .add(IconEnum.POWER, () => <Icon {...defaultProps} image={IconEnum.POWER} />)
  .add(IconEnum.PROJECTOR, () => <Icon {...defaultProps} image={IconEnum.PROJECTOR} />)
  .add(IconEnum.SPEACKER, () => <Icon {...defaultProps} image={IconEnum.SPEACKER} />)
  .add(IconEnum.OTHER, () => <Icon {...defaultProps} image={IconEnum.OTHER} />)
;
