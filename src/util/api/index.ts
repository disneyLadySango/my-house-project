import axios from 'axios'
import { sleep } from '../task'
import { Send } from '../../const/api'
import secret from '../../assets/json/secret.json'

const NATURE_REMO_HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${secret.apikey}`
}

// eslint-disable-next-line no-template-curly-in-string
const REPLACE_URL = '${param}';

export const SendRequest = async (signal: string) => {
  try {
    const url = Send.replace(REPLACE_URL, signal)
    await axios.post(url, {}, {
      headers: NATURE_REMO_HEADERS
    })
  } catch (e) {
    return `
      リモコンの使用中にエラーが発生しました。
      エラーメッセージ:${e.message}
    `
  }
  return ''
}
export const SendRequests = async (signals: Array<string>) => {
  for (const signal of signals) {
    const msg = await SendRequest(signal)
    if (msg !== '') {
      return msg
    }
    await sleep(1);
  }
  return ''
}

