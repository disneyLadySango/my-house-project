import { IProps as ChildIProps } from '../../molecules/RemoconListItem/type'

export interface IProps {
  remoconList: Array<ChildIProps>
  onClick: Function
}

interface RemoconItemProps {
  remoconListItem: ChildIProps
  isActive: boolean
  onClick: Function<Number>
}

interface RemoconItemState {
  isActive: boolean
}