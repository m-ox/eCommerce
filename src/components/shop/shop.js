import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class Shop extends Component {

    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            },
            {
                path: '/'
            }
        ]

        this.props.setHeaderLinks(headerLinks)

        this.props.fetchShopCategories()

        this.props.fetchShopProducts()
    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories,
                (_id) => this.props.filterProductWithCategoryId(_id))
        }
        return true
    }

    render() {
        console.log(this.props)
        return (
            <div className='shop'>
                {/* shop search bar component */}
                <div className='shop__products'>
                    {this.props.filteredProducts
                        .map(product => {
                            return (
                                <div key={product._id} className='shop-product'>
                                    <div className='shop-product__title'>
                                        {product.title}
                                    </div>
                                    <div className='shop-product__description'>
                                        {product.description}
                                    </div>
                            </div>
                            )
                        })}
                </div>
                {/* cart button */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {categories, filteredProducts} = state.shop

    return {
        categories,
        filteredProducts
    }
}

Shop = connect(mapStateToProps, actions) (Shop);

export default Shop