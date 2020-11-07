import React from 'react'
import { IProps as RemoconListProps } from '../../components/organisms/RemoconList/type'

export interface IProps {
  remoconList: RemoconListProps
}

export interface RemoconPageProps {
  remoconListChildren?: React.FC<RemoconListProps>
}
