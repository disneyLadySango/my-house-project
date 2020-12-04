import { SignalProps } from '../type'
import * as RemoconButtonType from '../../../molecules/RemoconButton/type'

export type Props = {
  signals: Array<SignalProps>
  onClick: (id: string) => void
}

export type ColumnProps = RemoconButtonType.Props
