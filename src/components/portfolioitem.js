const React = require('react')
const Image = require('./image')
const PortfolioItem = (props) => {
  return (
    <a href={props.info.href} className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
      <div className="grow cover bg-center pv5 pv6-l">
        <Image source={props.info.img} alt={props.info.name}/>
      </div>
    </a>
  )
}

module.exports = PortfolioItem
