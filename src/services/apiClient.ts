const BASE_URL = 'https://rickandmortyapi.com/api'

export const api = {
    get: async <T>(endpoint: string, params?: Record<string, string | number | undefined>): Promise<T> => {
        const filteredParams = Object.fromEntries(
            Object.entries(params || {}).filter(([, value]) => value !== undefined),
        ) as Record<string, string | number>

        const queryString = filteredParams ? `?${new URLSearchParams(filteredParams as Record<string, string>)}` : ''
        const response = await fetch(`${BASE_URL}${endpoint}${queryString}`)

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`)
        }

        return response.json()
    },
}

export interface ApiResponse<T> {
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    }
    results: T[]
}
