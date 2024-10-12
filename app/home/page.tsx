import Header from '@/components/header'
import React from 'react'

const Dashboard = ({ searchParams }: { searchParams?: { query?: string } }) => {
    const query = searchParams?.query || ''
    console.log(searchParams?.query)
    return (
        <div>
            <Header query={query}/>
            Dashboard {searchParams?.query || "No query"}
        </div>
    )
}

export default Dashboard