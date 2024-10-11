import { searchStock } from '@/actions'
import React from 'react'

const SearchResults = async ({ searchParams }: { searchParams: {[key: string]: string | string[] | undefined } }) => {

  return (
    <div className='border'>{searchParams.query}</div>
  )
}

export default SearchResults