import React, { useState } from 'react'
import '../Title.css'
import './Sale.css'
import SalesScroler from './SalesScroller/SalesScroller'
import Arrow3 from '../../UI/Arrows/Arrow3'
import Data from '../../Data/Sales.json'

const Sales = props => {
    const SalesArray = Data.sales

    const [sales, setSales] = useState(SalesArray)
    const [left, runLeft] = useState(false)
    const [right, runRight] = useState(false)
    const [className, addClass] = useState()
    const onRight = () => {
        runRight(true)
        for (let i = 0; i < SalesArray.length; i++) {
            if (SalesArray[i].key === 0) {
                setSales(SalesArray[i].key = SalesArray.length - 1)
            }
            else {
                setSales(SalesArray[i].key -= 1)
            }
        }
        runRight(false)
    }

    const onLeft = () => {
        runLeft(true)
        for (let i = 0; i < SalesArray.length; i++) {
            if (SalesArray[i].key === 6) {
                setSales(SalesArray[i].key = 0)
            }
            else {
                setSales(SalesArray[i].key += 1)
            }
            runLeft(false)
        }
    }
    if (SalesArray[0].key === 1) {
        const last = SalesArray[SalesArray.length - 1]
        setSales(SalesArray.pop(),
            SalesArray.unshift(last))
    }
    else if (SalesArray[SalesArray.length - 1].key === 5) {
        const first = SalesArray[0]
        setSales(SalesArray.shift(),
            SalesArray.push(first))
    }


    return (
        <div className='Sales'>
            <div className='Title'>
                <span>Акции</span>
            </div>
            <div className='Scroller'>
                <Arrow3
                    direction='left'
                    clicked={onLeft}
                />
                <SalesScroler
                    sales={SalesArray}
                    rightClick={right}
                    leftClick={left}
                    more={props.more}
                />
                <Arrow3
                    direction='right'
                    clicked={onRight}
                />
            </div>
        </div>
    )
}

export default Sales