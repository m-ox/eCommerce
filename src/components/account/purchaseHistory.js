import React, { Component } from 'react'

import PageTitle from '../pagetitle'

export default class PurchaseHistory extends Component {
    render() {
        return (
            <div className='purchase-history'>
                <PageTitle className='purchase-history__page-title' title='Purchase History'/>
            </div>
        )
    }
}