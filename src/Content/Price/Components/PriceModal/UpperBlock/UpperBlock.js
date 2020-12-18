import React, { useState } from 'react'
import './UpperBlock.css'

const UpperBlock = props => {
    return (
        <div
            className={'UpperBlock '}
            style={
                {marginLeft: props.pos+'%'}
            }
        />
    )
}

export default UpperBlock