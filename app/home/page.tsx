import Header from '@/components/header'
import SearchResults from '@/components/searchResults'
import React from 'react'

const Dashboard = ({ searchParams }: { searchParams?: { query?: string } }) => {
    const query = searchParams?.query || ''
    console.log(searchParams?.query)
    return (
        <div>
            <Header query={query}/>
            <SearchResults query={query} />
            Dashboard {searchParams?.query || "No query"}
        </div>
    )
}

export default Dashboard