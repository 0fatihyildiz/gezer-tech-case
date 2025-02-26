export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    url: string
    created: string
}

export interface CharacterFilters {
    status?: string
    gender?: string
}
