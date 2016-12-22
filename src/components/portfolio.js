const React = require('react')
const PortfolioCard = require('./portfoliocard')

const Portfolio = (props) => {
  return (
    <header id="projects" className='tc pv4 pv5-ns bg-black-10'>
      <h1 className='f5 f4-ns fw6 black'>Student Projects</h1>
      <h3 className="tc baskerville fw1 ph3 ph0-l">Each student creates a final project toward the end of the boot camp.</h3>
        <div className="cf pa2">
          {props.portfolio.map(portfolioItem => <PortfolioCard key={portfolioItem.name} info={portfolioItem} />)}
        </div>
    </header>
  )
}

module.exports = Portfolio
