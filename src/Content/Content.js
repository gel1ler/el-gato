import React, { useState } from 'react'
import './Content.css'
import Sales from './Sales/Sales'
import Services from './Services/Services'
import Price from './Price/Price'

const Content = () => {
    const [show, setShow] = useState(false)

    const close = () => {
        setShow(false)
    }

    const more = () => {
        setShow(true)
    }

    return (
        <div className='ContentBox'>
            <div className='Content'>
                <Sales
                    more={more}
                    show={show}
                    close={close}
                />
                <Services
                    more={more}
                    show={show}
                    close={close}
                />
                <Price
                    more={more}
                    show={show}
                    close={close}
                />
            </div>
        </div>
    )
}

export default Content