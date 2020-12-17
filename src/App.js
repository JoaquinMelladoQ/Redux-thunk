import React, { Component } from 'react'
import { connect } from 'react-redux'
import {miThunk} from './thunk'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
     super(props)
     const { miThunk } = props
     miThunk('lala')
  } 
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}


const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  miThunk: payload => dispatch(miThunk(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
