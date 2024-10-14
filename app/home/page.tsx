import Header from '@/components/header'
import SearchResults from '@/components/searchResults'
import React, { Suspense } from 'react'

const Dashboard = ({ searchParams }: { searchParams?: { query?: string } }) => {
    const query = searchParams?.query 
    console.log(searchParams?.query)
    return (
        <div>
            <Header />
            <Suspense fallback={<div className='skeleton w-64 h-12 p-4'>
                Searching...
            </div>}>
                <SearchResults query={query} />
            </Suspense>
        </div>
    )
}

export default Dashboard