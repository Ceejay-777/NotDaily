import React from 'react'

const StockDetails = ({ params }: { params: { stock: string } }) => {
    console.log(params.stock)
    return (
        <div>StockDetails - {params.stock}</div>
    )
}

export default StockDetails