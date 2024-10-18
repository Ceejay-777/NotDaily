'use client'
import { RootState } from '@/lib/store';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

type ResultType = {
    description: string;
    displaySymbol: string;
    [key: string]: any;
};

const ResultBox = ({ result }: { result: ResultType }) => {
    const { description, displaySymbol } = result
    const query = useSelector((state: RootState) => state.query)
    return (
        <div className='mb-2 border-b pb-2 bg-slate-600/20 rounded-md w-full p-1 hover:bg-slate-600/30' key={displaySymbol}>
            <div>{displaySymbol}</div>
            <div className='text-xs'>{description}</div>
        </div>
    )
}

export default ResultBox