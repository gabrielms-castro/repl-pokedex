export type Location = {
  areas: Area[]
  game_indices: Index[]
  id: number
  name: string
  names: Name[]
  region: Region
}

export type Area = {
  name: string
  url: string
}

export type Index = {
  game_index: number
  generation: Generation
}

export type Generation = {
  name: string
  url: string
}

export type Name = {
  language: Language
  name: string
}

export type Language = {
  name: string
  url: string
}

export type Region = {
  name: string
  url: string
}
