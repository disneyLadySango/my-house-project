import React from 'react'

import * as Presenter from './Presenter'
import * as Type from './type'

const Icon: React.FC<Type.Props> = props =>
  <Presenter.Icon size={props.size} image={props.image} />

export default Icon
