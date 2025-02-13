import CharacterList from '@/components/CharacterList'
import { getCharacters } from '@/hooks/useCharacters'
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query'

export default async function Home({ searchParams }: { searchParams: Record<string, string> }) {
    const queryClient = new QueryClient()
    const status = searchParams.status === 'all' ? undefined : searchParams.status
    const gender = searchParams.gender === 'all' ? undefined : searchParams.gender
    const page = Number.parseInt(searchParams.page || '1', 10)

    await queryClient.prefetchQuery({
        queryKey: ['characters', { status, gender }, page],
        queryFn: () => getCharacters({ status, gender }, page),
    })

    return (
        <main className="container mx-auto py-8">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <CharacterList />
            </HydrationBoundary>
        </main>
    )
}
