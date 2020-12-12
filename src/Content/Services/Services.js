import React from 'react'
import '../Title.css'
import Service from './Service/Service'
import './Services.css'
import Data from '../../Data/Services.json'

const Services = props => {
    const ServicesArray = Data.services

    return (
        <div className='Services'>
            <div className='Title'>
                <span>Услуги</span>
            </div>
            <div className='ServicesContent'>
                {ServicesArray.map(i => {
                    return (
                        <Service
                            more={props.more}
                            name={i.name}
                            description={i.description}
                            photo={i.photo}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Services