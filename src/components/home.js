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
        console.log("profileData: ", profileData)
        if (dataLoadingState === 'Loading') {
            return <Loading/>
        }
        return (
            <div>
                <Nav/>
                <About info={profileData.about}/>
                <JRS articles={profileData.articles}/>
                <Portfolio portfolio={profileData.portfolio}/>
                <Skills skills={profileData.skills}/>
                <Footer/>
            </div>
        )
    }
})

module.exports = Home
