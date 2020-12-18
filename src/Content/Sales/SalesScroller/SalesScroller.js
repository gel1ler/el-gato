import React from 'react'
import './SalesScroller.css'
import Sale from './Sale/Sale'

const SalesScroller = props => {
    return (
        <div className='SalesScroller'>
            {props.sales.map((x, id) => {
                return (
                    <Sale
                        more={props.more}
                        name={x.name}
                        description={x.description}
                        photo={x.photo}
                        position={x.key}
                        key={x.key}
                    />
                )
            })}
        </div>
    )
}

export default SalesScroller
