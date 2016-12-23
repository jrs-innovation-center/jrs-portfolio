const React = require('react')
const Nav = require('./nav')
const About = require('./aboutme')
const Portfolio = require('./portfolio')
const JRS = require('./jrs')
const Skills = require('./skills')
const Loading = require('./loading')
const Footer = require('./footer')

const Home = React.createClass({
    
    render() {
        const profileData = this.props.profileData
        const dataLoadingState = this.props.dataLoadingState

        if (dataLoadingState === 'Loading') {
            return <Loading/>
        }
        return (
          <div>
            <Nav/>
            <About editMode={profileData.editMode} info={profileData.about}/>
            <JRS editMode={profileData.editMode} articles={profileData.articles}/>
            <Portfolio editMode={profileData.editMode} portfolio={profileData.portfolio}/>
            <Skills editMode={profileData.editMode} skills={profileData.skills}/>
            <Footer/>
          </div>
        )
    }
})

module.exports = Home
