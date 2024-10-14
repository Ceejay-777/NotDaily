import { searchStock } from '@/actions'
import React from 'react'

type ResultType = {
  description: string;
  displaySymbol: string;
  [key: string]: any;
};

const SearchResults = async ({ query }: { query: string | undefined }) => {
  const results = await searchStock(query)

  return (
    query && results?.status === "success" ? <div className='border w-fit rounded-lg p-2'>
      {
        results.choice.map((result: ResultType) => {
          const { description, displaySymbol } = result
          return (
            <div className='mb-2 w-fit border-b pb-2' key={displaySymbol}>
              <div>{displaySymbol}</div>
              <div className='text-xs'>{description}</div>
            </div>
          )
        })
      }
    </div> : <div>
      {results?.message}
    </div>
  )
}

export default SearchResults 