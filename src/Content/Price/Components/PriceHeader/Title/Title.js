import React from 'react'
import './Title.css'

const Title = () => {
    const TitlesArr = ['Услуга 1','Услуга 2','Услуга 3','Услуга 4','Услуга 5','Услуга 6','Услуга 7']

    return (
        <div className='HedaerTitle'>
            {TitlesArr.map(title=>{
                return(
                    <span><h4>{title}</h4></span>
                )
            })}
        </div>
    )
}

export default Title
