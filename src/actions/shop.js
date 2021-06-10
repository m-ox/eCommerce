import { filterProductsWithCategoryId } from '.'
import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
} from './types'

export function filterProductWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'Javascript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Python'
            },
            {
                _id: 4,
                title: 'Ruby'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Linux'
            }
            ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'Javascript In The Browser',
                description: 'The pacer copy pasta description was here',
                price: 1.99,
                belongsTo: [0,1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'The pacer copy pasta description was here',
                price: 1.99,
                belongsTo: [0,1]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'The pacer copy pasta description was here',
                price: 1.99,
                belongsTo: [0,1,4]
            },
            {
                _id: 3,
                title: 'JavaScript Development',
                description: 'The pacer copy pasta description was here',
                price: 1.99,
                belongsTo: [0,1]
            },
            {
                _id: 4,
                title: 'User Interface Design',
                description: 'The pacer copy pasta description was here',
                price: 1.99,
                belongsTo: [0,2]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'The pacer copy pasta description was here',
                price: 1.99,
                belongsTo: [0,2]
            },
            {
                _id: 6,
                title: 'Advanced Object Oriented Programming',
                description: 'The pacer copy pasta description was here',
                price: 1.99,
                belongsTo: [0,6]
            },
            {
                _id: 7,
                title: 'Something',
                description: 'The pacer copy pasta description was here',
                price: 1.99,
                belongsTo: [0,1,2,3,4,5,6]
            }
        ]
        
    })
}