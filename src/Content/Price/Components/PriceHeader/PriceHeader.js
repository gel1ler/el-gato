import React, { useState } from 'react'
import Title from './Title/Title'

const PriceHeader = props => {
    return (
        <div className='PriceHeader'>
            <Title
                clicked={props.clicked}
            />
        </div>
    )
}

export default PriceHeader