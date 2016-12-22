const React = require('react')
const Article = require('./article')

const JRS = (props) => {
  return (
    <section id='jrs' className='pv4 pv5-ns bg-dark-gray'>
      <h1 className='tc f5 f4-ns fw6 near-white'>Jack Russell Software Innovation Center</h1>
      {props.articles.map((article, index) => <Article index={index} key={index} info={article} />)}
    </section>
  )
}

module.exports = JRS
