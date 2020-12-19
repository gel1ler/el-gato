import React, { useEffect, useState } from 'react'
import Data from '../../Data/Sales.json'
import './Sales_v2.css'
import { Arrow } from '../../UI/Arrows/Arrow/Arrow'

export const Sales = () => {
    const [pics, setPics] = useState([])

    const [shownPics, setShownPics] = useState([])

    const [left, setLeft] = useState(null)

    const [right, setRight] = useState(null)

    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setPics(Data.sales.map(x => x.photo))
    }, [])

    useEffect(() => {
        if (pics.length < 5) {
            return
        }
        setShownPics(pics.slice(0, 5))
        if (pics.length > 5) {
            setRight(pics[5])
            setLeft(pics[pics.length - 1])
        }
    }, [pics])

    useEffect(() => {
        if(pics.length<5){
            return
        }

        setShownPics(pics.slice(offset, offset+5))
    }, [pics, offset])

    console.log(shownPics)
    if (pics.length === 0) {
        return (
            null
            //add_roll
        )
    }

    const onLeftClick = () => {
        setOffset(x => x - 1);
    }



    return (
        <div className='Sales_v2'>
            <div className='Arrow LeftArrow'>
                <Arrow
                    onClick={() => setOffset(x => x - 1)}
                />
            </div>

            <div className='Arrow RightArrow'>
                <Arrow
                    onClick={() => setOffset(x => x + 1)}
                />
            </div>
            {shownPics.map(url => {
                return (
                    <img
                        src={url}
                        key={url}
                        className='SalesUrl'
                    />
                )
            })}
        </div>
    )
}