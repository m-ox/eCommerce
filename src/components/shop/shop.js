import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions'
import ShopCart from './shopCart'
import ShopProduct from './shopProduct'

import ShopSearchBar from './shopSearchbar'

class Shop extends Component {

    constructor() {
        super()

        this.state = {
            showCart: true
        }
    }

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

    onSubmit = (fields) => {
        console.log(this.props)
        this.props.filterProductsWithQuery(fields)
    }

    render() {
        return <ShopCart className='shop__cart'/>

        return (
            <div className='shop'>
                <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar'/>
                <div className='shop__products'>
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <ShopProduct {...product} key={product._id} />
                            )
                        })
                    }
                </div>
                {
                    this.state.showCart ? <ShopCart className='shop__cart'/> : ''
                }
                
                {/* shop cart button */}
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