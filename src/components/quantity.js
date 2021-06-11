import React, { Component } from 'react'

import { FaPlusSquare, FaRegMinusSquare } from 'react-icons/fa'

class Quantity extends Component {
    render() {
        const { className, quantity } = this.props
        return (
            <div className={`${className} quantity`}>
                <div className='quantity__count'>
                    {quantity}
                </div>
                <div className='quantity__plus'>
                    <FaPlusSquare className='fas fa-plus' />
                </div>
                <div className='quantity__minus'>
                    <FaRegMinusSquare className='fas fa-minus' />
                </div>
            </div>
        )
    }
}

export default Quantity;