import * as IconTypes from '../../atoms/Icon/type'
import * as TypoGraphyTypes from '../../atoms/TypoGraphy/type'

import { RemoconButtonEnum } from '.'

export type Props = {
  type: RemoconButtonEnum
  iconSize: number
  icon: IconTypes.Props
  typoGraphy: TypoGraphyTypes.Props
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type TwoColumnRemoconButtonProps = {
  icon: IconTypes.Props
  typoGraphy: TypoGraphyTypes.Props
}

export type OneColumnUpDownRemoconButtonProps = {
  typoGraphy: TypoGraphyTypes.Props
  iconSize: number
}
