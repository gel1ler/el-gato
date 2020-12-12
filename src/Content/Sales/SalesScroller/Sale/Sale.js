import React from 'react'
import './Sale.css'
import DetaledButton from '../../../../UI/Buttons/DetailedButton'

const Sale = props => {

    let back = {
        background: 'black',
        backgroundImage: 'url(' + props.photo + ')',
        backgroundSize: 'cover'
    }

    let darkBack = null

    let hover = null

    if(props.position == 0 || props.position == 6){
        darkBack = 'NONEdisplay'
    }
    else if (props.position == 1 || props.position == 5) {
        darkBack = 'darkBack'
    }
    else {
        hover = 'hover'
    }

    return (
        <div className={'SaleBlock ' + darkBack}>
            <div className='Sale' style={back} >
                <div className={'Slider ' + hover} id='slider'>
                    <div className='SliderContent '>
                        <div className='TopArrow' />
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                        <DetaledButton 
                            clicked={props.more}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale