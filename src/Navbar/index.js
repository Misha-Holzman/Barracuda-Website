import React, { Component } from 'react'
import About from '../About'
import Contact from '../Contact'
import Products from '../Products'
import Mainpage from '../Mainpage'
import './style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <Router className='nav'>
        <div className='nav-container' id='navbar'>
          <div className='title'>
            <div id='my-name'>
              <Link to='/' id='link-no-style'><h2 className='name-text'>Barracuda</h2></Link>
            </div>
          </div>
          <ul className='nav-bullets'>
            <li className='links'>
              <div class='section'>
                <div class='section__item'>
                  <Link to='/Products' id='link-no-style'><h3 class='link-text nav-text-links'>Products</h3></Link>
                </div>
              </div>
            </li>
            <li className='links'>
              <div class='section'>
                <div class='section__item'>
                  <Link to='/About' id='link-no-style'><h3 class='link-text nav-text-links'>about</h3></Link>
                </div>
              </div>
            </li>
            <li className='links'>
              <div class='section'>
                <div class='section__item'>
                  <Link to='/Contact' id='link-no-style'><h3 class='link-text nav-text-links'>contact</h3></Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <Route path='/' component={Mainpage} exact />
        <Route path='/Products' component={Products} exact />
        <Route path='/About' component={About} exact />
        <Route path='/Contact' component={Contact} exact />

      </Router>
    )
  }
}

export default Navbar
