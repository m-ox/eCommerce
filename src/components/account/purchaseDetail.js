import React, { Component } from 'react'

export default class PurchaseDetail extends Component {
    render() {
        const { className } = this.props

        return (
            <div className={`${className} purchase-detail`}>
                purchase details go here
            </div>
        )
    }
}
