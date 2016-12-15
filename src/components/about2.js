const React = require('react')
const Image = require('./image')
//import logo from '../img/jrs-dog-avatar.png'

const About = (props) => {
  return (
    <header id="about" className='tc pv4 pv5-ns'>
        <Image source={props.info.img} alt='avatar' className='br-100 pa1 ba b--black-10 h4 w4'/>
        <h1 className='f5 f4-ns fw6 mid-gray'>{props.info.name}</h1>
        <h2 className='f6 gray fw2 ttu tracked'>{props.info.location}</h2>
        <p>{props.info.desc}</p>
    </header>
  )
}

module.exports = About
