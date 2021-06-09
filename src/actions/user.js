import {
    SET_USER_PURCHASES
} from './types'

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                title: 'purchase 1',
                amount: 8.02,
                orderNumber: 'A0053949853',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Dude Duderson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                title: 'purchase 2',
                amount: 19.40,
                orderNumber: 'A0057637456',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Dude Duderson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                title: 'purchase 3',
                amount: 19.40,
                orderNumber: 'A005342363',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Dude Duderson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                title: 'purchase 4',
                amount: 12.30,
                orderNumber: 'A0056853',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Dude Duderson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                title: 'purchase 5',
                amount: 24.32,
                orderNumber: 'A00532562553',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Dude Duderson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                title: 'purchase 6',
                amount: 75.02,
                orderNumber: 'A0055654543',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Dude Duderson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                title: 'purchase 7',
                amount: 25.40,
                orderNumber: 'A00554642343',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Dude Duderson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                title: 'purchase 8',
                amount: 12.40,
                orderNumber: 'A0053949853',
                orderDate: new Date(),
                creditCard: '0000',
                user: {
                    name: 'Dude Duderson',
                    shippingAddress: '1234 West State Street'
                }
            }
        ]
    })
}