import * as NatureRemoType from '../../../types/natureremo'
import * as RemoconListItemType from '../../molecules/RemoconListItem/type'

export type Props = {
  apiFetchData: Array<NatureRemoType.Appliance>
  activeIndex: number
  onClick: (index: number) => void
}

export type ApiFetchData = Array<NatureRemoType.Appliance>
