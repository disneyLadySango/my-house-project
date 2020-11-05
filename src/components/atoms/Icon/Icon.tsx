import React from 'react'
import { Component } from './Presenter'
import { IProps } from './type'

const Icon: React.FC<IProps> = props => <Component size={props.size} image={props.image} />

export default Icon
