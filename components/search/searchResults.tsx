import { searchStock } from '@/actions'
import React from 'react'
import ResultBox from './resultBox';

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
            <ResultBox result={{description, displaySymbol}} />
          )
        })
      }
    </div> : <div>
      {results?.message}
    </div>
  )
}

export default SearchResults 