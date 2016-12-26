const React = require('react')
const PortfolioCard = require('./portfoliocard')
const { Link } = require('react-router')

const Portfolio = (props) => {

  const addPortfolioButton = props.editMode ? <div className="tr pa3">
      <Link to="/portfolioadd">{ ({href}) =>
        <a className="f6 dim br1 no-underline dib v-mid dark-green ba b--green ph3 pv2 mb3 mr2" href={href}>Add Project</a>
      }</Link>
    </div> : null

  return (
    <header id="projects" className='tc pv4 pv5-ns bg-black-10'>
      <h1 className='f5 f4-ns fw6 black'>Project Portfolio</h1>
      {addPortfolioButton}
      <h3 className="tc baskerville fw1 ph3 ph0-l">Each student creates a final project toward the end of the boot camp.</h3>
        <div className="cf pa2">
          {props.portfolio.map((portfolioItem, index) => <PortfolioCard editMode={props.editMode} index={index} key={portfolioItem.name} info={portfolioItem} />)}
        </div>
    </header>
  )
}

module.exports = Portfolio
