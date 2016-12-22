const React = require('react')
const DataImage = require('./dataImage')
const { Link } = require('react-router')

const About = (props) => {
  return (
    <header id='about' className='tc pv4 pv5-ns bg-black'>
        <DataImage className="br2" source={props.info.imgFile} alt='avatar' />

        <h1 className='f5 f4-ns fw6 washed-blue'>{props.info.name}</h1>
        <h2 className='f6 washed-blue fw2 ttu tracked'>{props.info.location}</h2>
        <p className='f6 washed-blue fw2 ttu tracked'>{props.info.desc}</p>
        <div className="ph3 mt4">

          <Link to='/aboutedit'>{ ({href}) =>
            <a className='f6 link dim br1 ba ph3 pv2 mb2 dib washed-blue' href={href}>Edit</a>
          }</Link>
        </div>
    </header>
  )
}

module.exports = About
