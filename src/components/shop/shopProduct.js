import React, { Component } from 'react'

export default class ShopProduct extends Component {
    render() {
        console.log('hi')
        const {_id, title, description } = this.props
        return (
            <div className='shop-product'>
                 <div className='shop-product__title'>
                     {title}
                 </div>
                 <div className='shop-product__description'>
                     {description}
                 </div>
            </div>
        )
    }
}
