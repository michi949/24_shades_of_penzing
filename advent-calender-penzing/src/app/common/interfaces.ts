export interface ICompany {
  name: string
  pos: number
  showDate: Date
  description: string
  images: string[]
  lat: string
  long: string
}

export interface IWorldTimeApi {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: boolean
  timezone: string
  unixtime: number
  utc_datetime: string
  utc_offset: string
  week_number: number
}
