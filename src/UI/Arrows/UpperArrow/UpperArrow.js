import React from 'react'
import './UpperArrow.css'

const UpperArrow = () => {
    const setUpperHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
           });
    }



    return (
        <div className='Circle' onClick={setUpperHandler}>
            <div className='UpperArrow' />
        </div>
    )
}

export default UpperArrow