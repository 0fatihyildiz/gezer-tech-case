'use client'

import { useCharacters } from '@/hooks/useCharacters'
import { useFiltersStore } from '@/store/useFiltersStore'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CharacterFilters from './CharacterFilters'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Skeleton } from './ui/skeleton'

export default function CharacterList() {
    const [page, setPage] = useState(1)
    const filters = useFiltersStore(state => state.filters)
    const { data, isLoading, isError, error } = useCharacters(filters, page)

    useEffect(() => {
        if (filters && Object.keys(filters).length > 0) {
            if (data && data.results.length === 0 && page > 1) {
                setPage(1)
            }
        }
    }, [data, page, filters])

    if (isError) {
        return (
            <div className="flex flex-col items-center p-4 text-center text-red-500">
                <h2 className="text-xl font-bold">An error occurred.</h2>
                <p className="mb-4">{error.message}</p>
                <Button onClick={() => window.location.reload()}>
                    Try Again
                </Button>
            </div>
        )
    }

    return (
        <div>
            <CharacterFilters />
            {isLoading
                ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {[...Array.from({ length: 6 })].map((_, i) => (
                                <Card key={i}>
                                    <CardContent>
                                        <Skeleton className="h-48 w-full mt-5" />
                                        <Skeleton className="h-6 w-3/4 mt-2" />
                                        <Skeleton className="h-4 w-1/2 mt-2" />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )
                : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                {data?.results.map(character => (
                                    <Card key={character.id}>
                                        <CardContent>
                                            <Image
                                                src={character.image}
                                                alt={character.name}
                                                className="w-full mt-5 rounded-md bg-zinc-100"
                                                width={300}
                                                height={300}
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                            <h2 className="text-xl font-bold mt-2">{character.name}</h2>
                                            <p>
                                                Status:
                                                {character.status}
                                            </p>
                                            <p>
                                                Gender:
                                                {character.gender}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="flex justify-center gap-4 mt-6">
                                <Button
                                    onClick={() => setPage(p => p - 1)}
                                    disabled={page === 1 || isLoading}
                                >
                                    Previous
                                </Button>
                                <Button
                                    onClick={() => setPage(p => p + 1)}
                                    disabled={!data?.info.next || isLoading}
                                >
                                    Next
                                </Button>
                            </div>
                        </>
                    )}
        </div>
    )
}
