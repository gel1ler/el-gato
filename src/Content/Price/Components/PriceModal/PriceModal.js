import React from 'react'
import './PriceModal.css'
import UpperBlock from './UpperBlock/UpperBlock'

const PriceModal = props => {
    return (
        <div className='PriceModal'>
            <UpperBlock 
                pos={props.pos}
            />
            some content
        </div>
    )
}

export default PriceModal