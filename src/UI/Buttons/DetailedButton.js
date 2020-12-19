import React from 'react'
import './DetailedButton.css'

const DetailedButton = props => {
    let clNm = ''
    if(props.type==='service'){
        clNm = 'ServiceBtn'
    }
    else if(props.type === 'price'){
        clNm = 'PriceTop'
    }
    
    return (
        <div className='DetailedButtonBox'>
            <button className={'DetailedButton '+clNm} onClick={props.clicked}>Подробнее</button>
        </div>
    )
}

export default DetailedButton