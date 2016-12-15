const React = require('react')
const Article = require('./article')

const JRS = (props) => {
  return (
    <section id="jrs" className="mw7 center avenir">
      <h2 className="tc baskerville fw1 ph3 ph0-l">JRS</h2>
        {props.articles.map(article => <Article key={article.name} info={article} />)}
    </section>
  )
}

module.exports = JRS
