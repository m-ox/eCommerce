import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS
} from './types'

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
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
            },
        ]
    })
}