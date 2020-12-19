import React from 'react'
import './Title.css'

const Title = props => {
    const TitlesArr = ['Услуга 1', 'Услуга 2', 'Услуга 3', 'Услуга 4', 'Услуга 5', 'Услуга 6', 'Услуга 7']

    return (
        <div className='HeaderTitle'>
            {TitlesArr.map((title, id) => {
                return (
                    <div
                        id={'titleBox' + id}
                        onClick={props.clicked}
                    >
                        <h4
                            id={'title' + id}
                            onClick={props.clicked}
                        >
                            {title}
                        </h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Title
