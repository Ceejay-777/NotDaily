import { searchStock } from '@/actions'
import React from 'react'

type ResultType = {
  description: string;
  displaySymbol: string;
  [key: string]: any;
};

const SearchResults = async ({ query }: { query: string }) => {
  const results = await searchStock(query)

  return (
    <div>
      <div className='border p-2'>{query || "No query"}</div>
      {/* {
       results && results.map((result: ResultType) => {
          const { description, displaySymbol } = result
          return (
            <>
              <div>displaySymbol</div>
              <div>description</div>
            </>
          )
        })
      } */}
    </div>
  )
}

export default SearchResults 