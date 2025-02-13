import type { ApiResponse } from '@/services/apiClient'
import type { Character, CharacterFilters } from '@/types/character'
import { api } from '@/services/apiClient'
import { useQuery } from '@tanstack/react-query'

export async function getCharacters(filters: CharacterFilters, page: number = 1): Promise<ApiResponse<Character>> {
    const sanitizedFilters = Object.fromEntries(
        Object.entries(filters).filter(([, value]) => value !== undefined),
    ) as CharacterFilters

    try {
        return await api.get<ApiResponse<Character>>('/character', {
            ...sanitizedFilters,
            page: page.toString(),
        })
    }
    catch (error: any) {
        if (error.message.includes('404')) {
            console.warn('No characters found for the given filters and page.')
            return {
                info: {
                    count: 0,
                    pages: 0,
                    next: null,
                    prev: null,
                },
                results: [],
            }
        }
        throw error
    }
}

export function useCharacters(filters: CharacterFilters, page: number = 1) {
    return useQuery({
        queryKey: ['characters', filters, page],
        queryFn: () => getCharacters(filters, page),
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: false,
        refetchOnWindowFocus: false,
        placeholderData: previousData => previousData,
    })
}
