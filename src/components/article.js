const React = require('react')
const DataImage = require('./dataImage')
const { Link } = require('react-router-dom')

const Article = (props) => {
  const EditButton = props.editMode === true ?
    <Link to={`/articleedit/${props.index}`}>
      <a className='f6 link dim br1 ba ph3 pv2 mb2 dib washed-blue'>Edit</a>
    </Link> : null

  return (
    <article className="pv4 bb b--black-10 ph3">
      <a className="db pv4 ph3 ph0-l no-underline black dim" target="_blank" href={props.info.href}>
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h3 className="f3 baskerville mt0 washed-blue">{props.info.name}</h3>
            <p className="f5 f4-l lh-copy baskerville washed-blue">{props.info.desc}</p>

          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <DataImage className="db br3" source={props.info.imgFile} alt={props.info.name} />
          </div>
        </div>
        <p className="f6 lh-copy washed-blue mv0">By <span className="ttu">{props.info.author}</span></p>
      </a>
      <div className="tc">
        {EditButton}
      </div>
    </article>
  )
}

module.exports = Article
