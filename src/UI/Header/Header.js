import React from 'react'
import Logo from '../../assets/Logo.jpeg'
import './Header.css'
import Aux from '../../HOC/Auxiliary'
import Title from './Blocks/Title'
import SingUp from './Blocks/SingUp'
import UpperArrow from '../Arrows/UpperArrow/UpperArrow'

const Header = props => {

    const header = document.getElementById('header')
    let flag = false
    if (props.scrolled) {
        header.classList.add('_active')
        flag = true
    }
    if (!props.scrolled && window.pageYOffset !== 0) {
        header.classList.remove('_active')
        flag = false
    }
    return (
        <Aux>
            <div className='FirstLook'>
                <div className='FirstLookIMG' />
                <header className='firstHeader'>
                    <div className='HeaderBox'>
                        <h4>Услуги</h4>
                        <h4>Мастера</h4>
                        <h4>Прайс</h4>
                        <div className='LogoBox'><img src={Logo} className='Logo' /></div>
                        <h4>О нас</h4>
                        <h4>Контакты</h4>
                        <h4>Соцсети</h4>
                    </div>
                </header>
                <div id='header' className='secondHeader'>
                    <div className='HeaderBox'>
                        <h4>Услуги</h4>
                        <h4>Мастера</h4>
                        <h4>Прайс</h4>
                        <div className='LogoBox'><img src={Logo} className='Logo' /></div>
                        <h4>О нас</h4>
                        <h4>Контакты</h4>
                        <h4>Соцсети</h4>
                    </div>
                    <UpperArrow />
                </div>
                <Title />
                <SingUp />
            </div>
        </Aux >
    )
}

export default Header