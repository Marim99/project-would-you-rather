import React, { Component} from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Login from './Login'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() { 
    const { authedUser } = this.pro