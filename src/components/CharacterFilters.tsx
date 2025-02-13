'use client'

import { GENDER_OPTIONS, STATUS_OPTIONS } from '@/constants/filter'
import { useRouter, useSearchParams } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select'

export default function CharacterFilters() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentStatus = searchParams.get('status') || 'all'
    const currentGender = searchParams.get('gender') || 'all'

    const handleFilterChange = (key: 'status' | 'gender', value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(key, value)
        if (value === 'all')
            params.delete(key)
        router.push(`/?${params.toString()}`)
    }

    return (
        <div className="flex gap-4 mb-6">
            <Select
                value={currentStatus}
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
                value={currentGender}
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
