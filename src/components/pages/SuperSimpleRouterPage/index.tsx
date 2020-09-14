import React, { useState } from 'react'
import LoginPage from '../LoginPage'
import TopPage from '../TopPage'

const SuperSimpleRouterPage: React.FC = props => {
  const [ isLogin, setLogin ] = useState(false)
  const [ value, setValue ] = useState({
    id: '', password: '', watchword: '',
  })
  const onChange = (changeValue: string, key: string) => {
    const newValue: any = Object.assign({}, value)
    newValue[key] = changeValue
    setValue(newValue)
  }
  return isLogin ? <TopPage /> : <LoginPage value={value} onChange={onChange} login={setLogin} /> 
}

export default SuperSimpleRouterPage