import React from 'react'

export const Arrow = ({ onClick }) => {
    return (
        <svg
            width='100'
            height='100'
            viewBox='0 0 1000 1000'
            onClick={onClick}
        >
            <g xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M703.6,562.4l-465.3-491L296.4,10l465.3,491L703.6,562.4z"
                />
                <path
                    d="M760.9,500.6L297.1,990l-58-61.2l463.8-489.4L760.9,500.6z"
                />
            </g>
        </svg>
    )
}