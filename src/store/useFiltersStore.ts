import type { CharacterFilters } from '@/types/character'
import { create } from 'zustand'

interface FiltersState {
    filters: CharacterFilters
    setFilter: (key: keyof CharacterFilters, value: string | undefined) => void
    resetFilters: () => void
}

export const useFiltersStore = create<FiltersState>(set => ({
    filters: {},
    setFilter: (key, value) =>
        set((state) => {
            const newFilters = { ...state.filters }
            if (value === undefined) {
                delete newFilters[key]
            }
            else {
                newFilters[key] = value
            }
            return { filters: newFilters }
        }),
    resetFilters: () => set({ filters: {} }),
}))
