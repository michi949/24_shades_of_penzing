import {IconParams, IconProp} from "@fortawesome/fontawesome-svg-core";
import {IconName} from "@fortawesome/free-brands-svg-icons";
import {IconPrefix} from "@fortawesome/free-solid-svg-icons";

export interface ICompany {
  name: string
  pos: number
  showDate: Date
  description: string
  images: string[]
  socialMedia: ISocialMediaInfo[]
  lat: number
  long: number
}

export interface ISocialMediaInfo {
  icon: IconName
  iconPrefix: IconPrefix
  path: string
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
