import CharacterList from '@/components/CharacterList'
import { getCharacters } from '@/hooks/useCharacters'
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query'

export default async function Home() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['characters', {}],
        queryFn: () => getCharacters({}),
    })

    return (
        <main className="container mx-auto py-8">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <CharacterList />
            </HydrationBoundary>
        </main>
    )
}
