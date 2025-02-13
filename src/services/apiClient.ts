const BASE_URL = 'https://rickandmortyapi.com/api'

export const api = {
    get: async <T>(endpoint: string, params?: Record<string, string | number>): Promise<T> => {
        const queryString = params ? `?${new URLSearchParams(params as Record<string, string>)}` : ''
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
