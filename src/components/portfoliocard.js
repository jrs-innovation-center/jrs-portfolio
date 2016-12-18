const React = require('react')
const Image = require('./image')

const PortfolioCard = (props) => {
  return (
    <div className="fl w-25 h-50 tc pa1">
      <article className="grow mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <a href={props.info.href} >
              <Image source={props.info.img} alt={props.info.name} className="br-100 h3 w3 dib ba b--black-05 pa2"/>
            </a>
            <h1 className="f3 mb2">{props.info.name}</h1>
            <h2 className="f5 fw4 gray mt0">{props.info.desc}</h2>
          </div>
      </article>
    </div>
  )
}

module.exports = PortfolioCard
