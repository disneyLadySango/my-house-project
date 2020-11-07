import React from 'react'
import styled from 'styled-components'
import RemoconList from '../../components/organisms/RemoconList'
import TypoGraphy, { TypoGraphyEnum } from '../../components/atoms/TypoGraphy'
import { RemoconPageProps } from './type'
import { IProps as RemoconListProps } from '../../components/organisms/RemoconList/type'

const StyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledWrapper = styled.div`
  width: 100%;
`

const StyledErrorWrapper = styled.div`
  width: 100%;
  color: #F50057;
  text-align: center;
`

export const Component: React.FC<RemoconPageProps> = props => (
  <StyledComponent>
    {props.children}
  </StyledComponent>
)

export const RemoconListWrapper: React.FC<RemoconListProps> = props => (
  <StyledWrapper>
    <RemoconList {...props} />
  </StyledWrapper>
)

export const ErrorPage: React.FC = () => (
  <StyledComponent>
    <StyledErrorWrapper>
      <TypoGraphy size={48} bold={TypoGraphyEnum.TITLE} text={'エラーが発生しています。しばらくしてから画面を更新してください。'} />
    </StyledErrorWrapper>
  </StyledComponent>
)