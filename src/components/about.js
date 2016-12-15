const React = require('react')
import logo from '../img/jrs-dog-avatar.png'

const About = (props) => {
  return (
    <header id="about" className='tc pv4 pv5-ns'>
        <img src={logo} className='br-100 pa1 ba b--black-10 h4 w4' alt='avatar' />
        <h1 className='f5 f4-ns fw6 mid-gray'>John Russell</h1>
        <h2 className='f6 gray fw2 ttu tracked'>Charleston, SC</h2>
        <p>A burgeoning full-stack JavaScript developer.</p>
    </header>
  )
}

module.exports = About
