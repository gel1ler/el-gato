import React, { useState } from 'react'
import './Price.css'
import Table from './Components/Table/Table'
import '../Title.css'
import Modal from '../../UI/Modal/Modal'
import DetailedButton from '../../UI/Buttons/DetailedButton'
import PriceHeader from './Components/PriceHeader/PriceHeader'
import PriceModal from './Components/PriceModal/PriceModal'

const Price = props => {
    const [pos, setPos] = useState('none')

    const changeUpperPosHandler = target => {
        let translate = 10.28571428571429
        console.log(target.target)
        if (target.target.id == 'title0') {
            translate *= 0
            setPos(translate)
        }

        if (target.target.id == 'title1') {
            translate *= 1
            setPos(translate)
        }

        if (target.target.id == 'title2') {
            translate *=2 
            setPos(translate)
        }

        if (target.target.id == 'title3') {
            translate *= 3
            setPos(translate)
        }

        if (target.target.id == 'title4') {
            translate *=4 
            setPos(translate)
        }

        if (target.target.id == 'title5') {
            translate *=5 
            setPos(translate)
        }

        if (target.target.id == 'title6') {
            translate *=6
            setPos(translate)
        }
    }

    return (
        <div className='Price'>
            <div className='Title'>
                <span>Прайс</span>
            </div>
            <PriceHeader
                clicked={changeUpperPosHandler}
            />
            <PriceModal
                pos={pos}
            />
            <DetailedButton
                clicked={props.more}
                type='price'
            />
            <Modal
                show={props.show}
                close={props.close}
            >
                Some Content
            </Modal>
        </div >
    )
}

export default Price