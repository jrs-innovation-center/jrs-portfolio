const React = require('react')
const fetch = require('isomorphic-fetch')
const Nav = require('./components/nav')
const About = require('./components/aboutme')
const Portfolio = require('./components/portfolio')
const JRS = require('./components/jrs')
const Skills = require('./components/skills')
const Loading = require('./components/loading')
const Footer = require('./components/footer')

//const url = '/db.json'
const url = 'http://server.pouchcloud.com/jrs-portfolio/ee739a56-6b05-487f-a4e3-6be24043d334'

const App = React.createClass({
  getInitialState() {
    return {
      dataLoadingState: 'Loading'
    }
  },

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState(data))
  },

  render () {
    if (this.state.dataLoadingState === 'Loading') {
      return <Loading/>
    }
    return (
      <div>
          <Nav/>
          <About info={this.state.about}/>
          <JRS articles={this.state.articles}/>
          <Portfolio portfolio={this.state.portfolio}/>
          <Skills skills={this.state.skills}/>
          <Footer/>
      </div>
    )
  }

})

module.exports = App
