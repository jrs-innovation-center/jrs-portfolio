const React = require('react')
const DataImage = require('./dataImage')
const { Link } = require('react-router-dom')

const About = (props) => {

  const EditButton = props.editMode === true ? <Link to='/aboutedit'><a className='f6 link dim br1 ba ph3 pv2 mb2 dib washed-blue'>Edit</a></Link> : null

  return (
    <header id='about' className='tc pv4 pv5-ns bg-black'>
        <DataImage className="br2" source={props.info.imgFile} alt='avatar' />
        <h1 className='f5 f4-ns fw6 near-white'>{props.info.name}</h1>
        <h2 className='f6 washed-blue fw2 ttu tracked'>{props.info.location}</h2>
        <p className='f6 washed-blue fw2 ttu tracked'>{props.info.desc}</p>
        <div className="ph3 mt4">{EditButton}</div>
    </header>
  )
}

module.exports = About

// <Link to='/aboutedit'>{({href}) =>
//   <a className='f6 link dim br1 ba ph3 pv2 mb2 dib washed-blue' href={href}>Edit</a>
// }</Link>
