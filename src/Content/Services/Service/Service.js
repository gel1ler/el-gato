import React from 'react'
import './Service.css'
import DetailedButton from '../../../UI/Buttons/DetailedButton'

const Service = props => {
    return (
        <div className='Service'>
            <img className='ServicePhoto' src={props.photo} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <DetailedButton 
                type='service'
                clicked={props.more}
            />
        </div>
    )
}

export default Service