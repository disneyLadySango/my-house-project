import React, { useState, useEffect } from 'react'

import axios from '../../lib/axios'

import * as URL from '../../const/api/url'
import * as Type from './type'

const API_KEY = window.location.search.replace('?key=', '')

export const useFetchData = () => {
  const [ apiFetchData, setApiResult ] = useState<Type.NatureRemoFetchData>([])
  const [ isError, setError ] = useState<boolean>(false)
  const [ isFirstSearch, setFirstSearch ] = useState<boolean>(false)

  const fetchRemoData = async () => {
    const result = await axios({
      ...URL.LIST,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    })
    if (result.status !== 200) {
      setError(true)
      setFirstSearch(true)
      return
    }
    setApiResult(result.data)
    console.log(result.data)
    setFirstSearch(true)
  }
  useEffect(() => {
    const effect = async () => {
      await fetchRemoData()
    }
    effect()
  }, [])

  const fetchDataState = { apiFetchData, isError, isFirstSearch }

  return [ fetchDataState,  fetchRemoData ] as const
}

