import React from 'react'
import './Table.css'
import Data from '../../../../Data/Price.json'

const Table = () => {
    const price = Data.price

    let PriceArr = []

    for (let i = 0; i < 8; i++) {
        PriceArr.push(price[i])
    }

    return (
        <div className='Table'>
            {PriceArr.map(el => {
                return (
                    <div><h3>{el.name} - {el.price}</h3></div>
                )
            })}
        </div>
    )
}

export default Table