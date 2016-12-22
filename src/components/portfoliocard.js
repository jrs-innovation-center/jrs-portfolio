const React = require('react')
const Image = require('./image')

const PortfolioCard = (props) => {
  return (
    <article className="fl center dim  br3 pa4-ns ma3 ph3 w-100 w-50-m w-25-ns">
      <div className="tc">
        <Image source={props.info.img} alt={props.info.name} className="br-100 h4 w4 dib" title={props.info.name}/>
        <h1 className="f4">{props.info.name}</h1>
        <hr className="mw3 bb bw1 b--black-10"/>
      </div>
      <p className="lh-copy measure center f6 black-70">{props.info.desc}</p>
    </article>
  )
}

module.exports = PortfolioCard
