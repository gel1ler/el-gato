import React, { useState } from 'react'
import './Price.css'
import Table from './Components/Table/Table'
import '../Title.css'
import Modal from '../../UI/Modal/Modal'
import DetailedButton from '../../UI/Buttons/DetailedButton'
import PriceHeader from './Components/PriceHeader/PriceHeader'

const Price = props => {
    return (
        <div className='Price'>
            <div className='Title'>
                <span>Прайс</span>
            </div>
            <PriceHeader />
            <Table />
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