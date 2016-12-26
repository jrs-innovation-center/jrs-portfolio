const React = require('react')
const DataImage = require('./dataImage')
const { Link } = require('react-router')

const SkillCard = (props) => {
  const EditButton = props.editMode === true ?
    <Link to={`/skilledit/${props.index}`}>
      {({href}) => <a className='f6 link dim br1 ba ph3 pv2 mb2 dib black' href={href}>Edit</a>}
    </Link> : null

  return (
    <div className="fl w-100 w-10-ns tc white">
      <article className="dim center">
        <div className="tc">
          <a href={props.info.href} target="_blank">
            <DataImage
              className="br-100 h3 w3 dib ba b--black-05 pa2 bg-white"
              source={props.info.imgFile}
              alt={props.info.name} />
          </a>
        </div>

      </article>
      <div className="tc">
        {EditButton}
      </div>
    </div>
  )
}

module.exports = SkillCard
