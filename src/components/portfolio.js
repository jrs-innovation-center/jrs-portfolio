const React = require('react')
const PortfolioCard = require('./portfoliocard')

const Portfolio = (props) => {
  return (
    <section id="portfolio" className="cf mt0 pv5 bt b--black-05 ph6-l bg-light-gray">
        <h2 className="tc baskerville fw1 ph3 ph0-l">My Projects</h2>
          <div className="cf">
              {props.portfolio.map(portfolioItem => <PortfolioCard key={portfolioItem.name} info={portfolioItem} />)}
          </div>
    </section>
  )
}

module.exports = Portfolio
