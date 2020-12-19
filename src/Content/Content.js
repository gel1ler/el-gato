import React, { useState } from 'react'
import './Content.css'
import {Sales} from './Sales_v2/Sales_v2'
import Services from './Services/Services'
import Price from './Price/Price'
import Masters from './Masters/Masters'


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
                <Masters />
            </div>
        </div>
    )
}

export default Content