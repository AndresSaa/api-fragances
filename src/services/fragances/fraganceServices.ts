import { FraganceEntry } from '../../types'
import fragancesData from './fragances.json'

const fragances: FraganceEntry[] = fragancesData as FraganceEntry[]

export const getFragances = (): FraganceEntry[] | undefined => fragances

export const addFragance = (params: any): FraganceEntry => {
  const newFraganceEntry: FraganceEntry = {
    id: fragances.length + 1,
    ...params
  }

  return newFraganceEntry
}
