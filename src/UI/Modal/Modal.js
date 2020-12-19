import React, { useState } from 'react'
import Aux from '../../HOC/Auxiliary'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import CloseButton from '../Buttons/CloseButton'

const Modal = props => {
    props.show ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'visible'
    return (
        <Aux>
            <div className='Modal'
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    display: 'fixed'
                }}>
                {props.children}
                <CloseButton 
                    clicked={props.close}
                />
            </div>
            <Backdrop
                show={props.show}
                clicked={props.clicked}
            />
        </Aux>
    )
}

export default Modal
