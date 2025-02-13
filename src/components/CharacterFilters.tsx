'use client'

import { GENDER_OPTIONS, STATUS_OPTIONS } from '@/constants/filter'
import { useFiltersStore } from '@/store/useFiltersStore'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select'

export default function CharacterFilters() {
    const { setFilter, filters } = useFiltersStore()

    const handleFilterChange = (key: 'status' | 'gender', value: string) => {
        setFilter(key, value === 'all' ? undefined : value)
    }

    const getCurrentValue = (key: 'status' | 'gender') => {
        return filters[key] || 'all'
    }

    return (
        <div className="flex gap-4 mb-6">
            <Select
                value={getCurrentValue('status')}
                onValueChange={value => handleFilterChange('status', value)}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                    {STATUS_OPTIONS.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select
                value={getCurrentValue('gender')}
                onValueChange={value => handleFilterChange('gender', value)}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                    {GENDER_OPTIONS.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
