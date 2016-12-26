const React = require('react')
const Article = require('./article')
const { Link } = require('react-router')

const JRS = (props) => {

  const addArticleButton = props.editMode ? <div className="tr pa3">
      <Link to="/articleadd">{ ({href}) =>
        <a className="f6 dim br1 no-underline dib v-mid dark-green ba b--green ph3 pv2 mb3 mr2" href={href}>Add Article</a>
      }</Link>
    </div> : null

  return (
    <section id='jrs' className='pv4 pv5-ns bg-dark-gray'>
      <h1 className='tc f5 f4-ns fw6 near-white'>Jack Russell Software Innovation Center</h1>
      {addArticleButton}
      {props.articles.map((article, index) => <Article editMode={props.editMode} index={index} key={index} info={article} />)}
    </section>
  )
}

module.exports = JRS
