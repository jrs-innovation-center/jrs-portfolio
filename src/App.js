const React = require('react')
const fetch = require('isomorphic-fetch')
const Nav = require('./components/nav')
const About = require('./components/aboutme')
const Portfolio = require('./components/portfolio')
const JRS = require('./components/jrs')
const Skills = require('./components/skills')
const Loading = require('./components/loading')
const Footer = require('./components/footer')

const url = '/db.json'
//const url = 'http://server.pouchcloud.com/jrs-portfolio/ee739a56-6b05-487f-a4e3-6be24043d334'

const App = React.createClass({
  getInitialState() {
    return {
      dataLoadingState: 'Loading',
      profileData: null
    }
  },

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(profileData => {
        this.setState({dataLoadingState: 'Loaded',
          profileData: profileData
        })
      })

      // const db = PouchDB('foo')
      //
      // db.allDocs({ include_docs: true })
      //   .then(res => res.rows.map(row => row.doc))
      //   .then(res => {
      //   render(JSON.stringify(res, null, 2))
      // })

  },

  render () {
    if (this.state.dataLoadingState === 'Loading') {
      return <Loading/>
    }
    return (
      <div>
          <Nav/>
          <About info={this.state.profileData.about}/>
          <JRS articles={this.state.profileData.articles}/>
          <Portfolio portfolio={this.state.profileData.portfolio}/>
          <Skills skills={this.state.profileData.skills}/>
          <Footer/>
      </div>
    )
  }

})

module.exports = App
