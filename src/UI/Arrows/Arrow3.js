import React from 'react'
import './Arrow3.css'

const Arrow3 = props => {
    if (props.direction == 'right') {
        return (
            <div class="arrow-right" onClick={props.clicked}>
                <div class="arrow-right-top"></div>
                <div class="arrow-right-bottom"></div>
            </div>
        )
    }
    if (props.direction == 'left') {
        return (
            <div class="arrow-left" onClick={props.clicked}>
                <div class="arrow-left-top"></div>
                <div class="arrow-left-bottom"></div>
            </div>
        )
    }
    else {
        return (null)
    }
}

export default Arrow3