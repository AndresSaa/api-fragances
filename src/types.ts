export enum Gender {
  Female = 'female',
  Male = 'male',
  Unisex = 'unisex',
}

export enum OlfactoryFamily {
  Amber = 'amber',
  Aquatic = 'aquatic',
  Aromatic = 'aromatic',
  Chypre = 'chypre',
  Citrus = 'citrus',
  Fern = 'fern',
  Floral = 'floral',
  Leather = 'leather',
  Oriental = 'oriental',
  Spicy = 'spicy',
  Woody = 'woody',
}

export interface FraganceEntry {
  id: number
  name: string
  brand: string
  gender: Gender
  olfactoryFamilies: OlfactoryFamily[]
  perfumers: PerfumerEntry[]
}

export interface PerfumerEntry {
  name: string
}

export type NewFraganceEntry = Omit<FraganceEntry, 'id'>
