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
// <article className="fl center dim bg-white br3 pa3 pa4-ns mv3 ba b--black-10 w-100 w-50-m w-25-ns ">
//   <a href="#" className="link black db mw5 pa2 br2 b--black-10">
//
//   <div className="tc">
//
//       <Image source={props.info.img} alt={props.info.name} className="br-100 h4 w4 dib" title={props.info.name}/>
//       <span><h1 className="f4">{props.info.name}</h1></span>
//
//     <hr className="mw3 bb bw1 b--black-10"/>
//
//   <p className="lh-copy measure center f6 black-70">
//   {props.info.desc}
//   </p>
//   </div>
//   </a>
// </article>


module.exports = PortfolioCard
