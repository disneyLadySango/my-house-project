import React from 'react';
import { storiesOf } from '@storybook/react';

import TypoGraohy, { TypoGraphyEnum } from '.';
import * as Type from './type'

export const defaultProps: Type.Props = {
  size: 14,
  text: 'Hello World',
  bold: TypoGraphyEnum.ITEM_TEXT,
}

storiesOf('/components/atoms/TypoGraohy', module)
  .add('Title', () => <TypoGraohy {...defaultProps} bold={TypoGraphyEnum.TITLE} />)
  .add('ContentTitle', () => <TypoGraohy {...defaultProps} bold={TypoGraphyEnum.CONTENT_TITLE} />)
  .add('ItemText', () => <TypoGraohy {...defaultProps} bold={TypoGraphyEnum.ITEM_TEXT} />)
  .add('Label', () => <TypoGraohy {...defaultProps} bold={TypoGraphyEnum.LABEL} />)
;
