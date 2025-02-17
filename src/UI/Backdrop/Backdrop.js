import React, { useState } from 'react'
import './Backdrop.css'

const Backdrop = props => {
    return (
        props.show ? <div className='Backdrop' onClick={props.clicked} /> : null
    )
}

export default Backdrop