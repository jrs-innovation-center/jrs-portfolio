const React = require('react')
const Image = require('./image')
const Article = (props) => {
  return (


    <article className="pv4 bb b--black-10 ph3">
      <a className="db pv4 ph3 ph0-l no-underline black dim" href={props.info.href}>
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h3 className="f3 baskerville mt0 near-white">{props.info.name}</h3>
            <p className="f5 f4-l lh-copy baskerville near-white">{props.info.desc}</p>

          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <Image source={props.info.img} alt={props.info.name} className="db br3"/>
          </div>
        </div>
        <p className="f6 lh-copy near-white mv0">By <span className="ttu">{props.info.author}</span></p>

    </a>
  </article>
  )
}

module.exports = Article


// <article className="bb b--black-10">
//   <a className="db pv4 ph3 ph0-l no-underline black dim" href={props.info.href}>
//     <div className="flex flex-column flex-row-ns">
//       <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
//         <Image source={props.info.img} alt={props.info.name}/>
//       </div>
//       <div className="w-100 w-60-ns pl3-ns">
//         <h3 className="f3 fw1 baskerville mt0 lh-title">{props.info.name}</h3>
//         <p className="f6 f5-l lh-copy">{props.info.desc}</p>
//         <p className="f6 lh-copy mv0">{props.info.author}</p>
//       </div>
//     </div>
//   </a>
// </article>
