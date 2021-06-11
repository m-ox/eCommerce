import React, { Component } from 'react'

import { FaTimes } from 'react-icons/fa'

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <FaTimes className={icon}/>
        </div>
    )
}

function CartContent ({ className, products }) {
    let count = products.length
    let productsJSX = products.map(product => <h1 key={product}> {product} </h1>)

    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
                {productsJSX}
            </div>
            <div className='cart-content__footer'>
                <CartFooter className='cart-content__footer' products={products} />
            </div>
        </div>
    )
}

function CartFooter ({className, products}) {
    const price = 7.96;
    return (
        <div className={`${className} cart-footer`}>
            <a className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div classname='cart-footer__price'>
                ${price}
            </div>
        </div>
    )
}

export default class ShopCart extends Component {
    render() {
        const { className } = this.props
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times' />
                <CartContent className='shop-cart__content' products={[1, 2, 3, 4]}/>
            </div>
        )
    }
}