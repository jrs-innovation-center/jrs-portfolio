const React = require('react')
const DataImage = require('./dataImage')
const { Link } = require('react-router')

const PortfolioCard = (props) => {
  const EditButton = props.editMode === true ?
    <Link to={`/portfolioedit/${props.index}`}>
      {({href}) => <a className='f6 link dim br1 ba ph3 pv2 mb2 dib black' href={href}>Edit</a>}
    </Link> : null
  return (

      <article className="fl center dim  br3 pa4-ns ma3 ph3 w-100 w-50-m w-25-ns">
        <a className="db pv4 ph3 ph0-l no-underline black dim" target="_blank" href={props.info.href}>
          <div className="tc">

            <DataImage
              className="br-100 h4 w4 dib"
              source={props.info.imgFile}
              alt={props.info.name} />

            <h1 className="f4">{props.info.name}</h1>
            <hr className="mw3 bb bw1 b--black-10"/>
          </div>
          <p className="lh-copy measure center f6 black-70">{props.info.desc}</p>
        </a>
        <div className="tc">
          {EditButton}
        </div>
      </article>


  )
}

module.exports = PortfolioCard
