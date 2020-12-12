import React from 'react'
import './SalesScroller.css'
import Sale from './Sale/Sale'

const SalesScroller = props => {
    return (
        <div className='SalesScroller'>
            <Sale
                more={props.more}
                name={props.sales[0].name}
                description={props.sales[0].description}
                photo={props.sales[0].photo}
                position={props.sales[0].key}
            />
            <Sale
                more={props.more}
                name={props.sales[1].name}
                description={props.sales[1].description}
                photo={props.sales[1].photo}
                position={props.sales[1].key}
            />
            <Sale
                more={props.more}
                name={props.sales[2].name}
                description={props.sales[2].description}
                photo={props.sales[2].photo}
                position={props.sales[2].key}
            />
            <Sale
                more={props.more}
                name={props.sales[3].name}
                description={props.sales[3].description}
                photo={props.sales[3].photo}
                position={props.sales[3].key}
            />
            <Sale
                more={props.more}
                name={props.sales[4].name}
                description={props.sales[4].description}
                photo={props.sales[4].photo}
                position={props.sales[4].key}
            />
            <Sale
                more={props.more}
                name={props.sales[5].name}
                description={props.sales[5].description}
                photo={props.sales[5].photo}
                position={props.sales[5].key}
            />
            <Sale
                more={props.more}
                name={props.sales[6].name}
                description={props.sales[6].description}
                photo={props.sales[6].photo}
                position={props.sales[6].key}
            />
        </div>
    )
}

export default SalesScroller
