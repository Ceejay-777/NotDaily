import { searchStock } from '@/actions'
import React from 'react'

const SearchResults = async ({query} : {query : string}) => {

  return (
    <div className='border p-2'>{query || "No query"}</div>
  )
}

export default SearchResults 