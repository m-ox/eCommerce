import React, { Component } from 'react'

class GreenPriceTag extends Component {
    render() {
        const { className, title } = this.props
        return (
            <div className={`${className} green-price-tag`}>
                <div className=''>
                    ${title}
                </div>
            </div>
        )
    }
}

export default GreenPriceTag;