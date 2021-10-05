import React, { Component, Fragment} from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Login from './Login';
import Home from './Home'
import "../App.css"
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() { 
    const { authedUser } = this.props;
   
      
      return <Fragment>{!authedUser ? <Login /> : <Home />}</Fragment>;
  
  }
}


function mapStateToProps ({ authedUser }) {
  return {
     authedUser
  }
}
export default connect(mapStateToProps)(App);
