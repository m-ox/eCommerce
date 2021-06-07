import React, { Component } from 'react'

import Header from './headernavbar/header'
import NavBar from './headernavbar/navbar'

export default class Layout extends Component {

  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <NavBar/>
      </div>
    )
  }
}