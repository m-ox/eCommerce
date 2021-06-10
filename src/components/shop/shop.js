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

    render() {
        return (
            <div className='shop'>
                {/* shop search bar component */}
                {/* product components */}
                {/* cart button */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions) (Shop);

export default Shop