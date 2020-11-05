import React from 'react';
import { storiesOf } from '@storybook/react';

import TypoGraohy, { TypoGraphyEnum } from '.';
import { IProps } from './type'

export const defualtProps: IProps = {
  size: 24,
  text: 'Hello World',
  bold: TypoGraphyEnum.ITEM_TEXT,
}

storiesOf('/components/atoms/TypoGraohy', module)
  .add('Title', () => <TypoGraohy {...defualtProps} bold={TypoGraphyEnum.TITLE} />)
  .add('ContentTitle', () => <TypoGraohy {...defualtProps} bold={TypoGraphyEnum.CONTENT_TITLE} />)
  .add('ItemText', () => <TypoGraohy {...defualtProps} bold={TypoGraphyEnum.ITEM_TEXT} />)
  .add('Label', () => <TypoGraohy {...defualtProps} bold={TypoGraphyEnum.LABEL} />)
;