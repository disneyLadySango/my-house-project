export type Appliance = {
  aircon: Aircon | null
  device: Device | null
  id: string
  image: string
  model: Model | null
  nickname: string
  settings: Setting | null
  signals: Array<Signal> | null
  type: 'IR' | 'AC'
}

export type Aircon = {
  range: AirconRange
  tempUnit: string
}

export type AirconRange = {
  fixedButtons: Array<string>
  modes: AirconRangeMode
}

export type AirconRangeMode = {
  cool: AirconRangeMode
  dry: AirconRangeMode
  warm: AirconRangeMode
}

export type AirconRangeModeInfo = {
  dir: Array<string>
  dirh: Array<string>
  temp: Array<string>
  vol: Array<string>
}

export type Device = {
  created_at: string
  firmware_version: string
  humidity_offset: number
  id: string
  mac_address: string
  name: string
  serial_number: string
  temperature_offset: number
  updated_at: string
}

export type Model = {
  country: string
  id: string
  image: string
  manufacturer: string
  name: string
  remote_name: string
  series: string
}

export type Setting = {
  button: string
  dir: string
  dirh: string
  mode: string
  temp: string
  temp_unit: string
  updated_at: string
  vol: string
}

export type Signal = {
  id: string
  image: string
  name: string
}
