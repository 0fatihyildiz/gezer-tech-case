import type { ApiResponse } from '@/services/apiClient'
import type { Character, CharacterFilters } from '@/types/character'
import { api } from '@/services/apiClient'
import { useQuery } from '@tanstack/react-query'

export async function getCharacters(filters: CharacterFilters, page: number = 1): Promise<ApiResponse<Character>> {
    return api.get<ApiResponse<Character>>('/character', {
        ...filters,
        page: page.toString(),
    })
}

export function useCharacters(filters: CharacterFilters, page: number = 1) {
    return useQuery({
        queryKey: ['characters', filters, page],
        queryFn: () => getCharacters(filters, page),
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 2,
        refetchOnWindowFocus: false,
    })
}
