'use client'
// import { searchStock } from '@/actions'
import React, { Suspense } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import SearchResults from './searchResults'
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = searchParams === null ? null : new URLSearchParams(searchParams)

        if (!params) {
            return
        }

        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }

        replace(`${pathname}?${params.toString()}`)
    }, 750)

    return (
        <div>
            <label className="input input-bordered flex items-center gap-2 w-fit">
                <input type="text" className="grow" placeholder="Search" onChange={(event) => handleSearch(event.target.value)} defaultValue={searchParams?.get('query')?.toString()} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
            {/* <Suspense>
                <SearchResults query={searchParams?.get('query')?.toString()} />
            </Suspense> */}
        </div>
    )
}

export default Search