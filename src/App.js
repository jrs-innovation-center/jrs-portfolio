const React = require('react')
const fetch = require('isomorphic-fetch')
const Nav = require('./components/nav')
const About = require('./components/aboutme')
const Portfolio = require('./components/portfolio')
const JRS = require('./components/jrs')
const Skills = require('./components/skills')
const Loading = require('./components/loading')
const Footer = require('./components/footer')
const PouchDB = require('pouchdb');
//TODO:  Below is for debug mode only.
window.PouchDB = PouchDB
//const url = 'http://server.pouchcloud.com/jrs-portfolio/ee739a56-6b05-487f-a4e3-6be24043d334'
const url = '/db.json'
const db = new PouchDB('jrs-portfolio')






const App = React.createClass({
    getInitialState() {
        return {dataLoadingState: 'Loading', profileData: null}
    },

    componentDidMount() {
        const self = this
        db.changes({since: 'now', live: true, include_docs: true})
            .on('change', function(change) {
                console.log("CHANGE!", change)
                self.setState({profileData: change.doc})
            }).on('complete', function(info) {
                // changes() was canceled
            }).on('error', function(err) {
                console.log(err);
            });

        db.info((err, info) => {
            if (err) {
                return console.log(err)
            }
            if (info.doc_count === 0) {
                fetch(url)
                .then(res => res.json())
                .then(profileData => db.put(profileData))
                .then(putResponse => console.log("putResponse: ", putResponse))
                //.then(db.get('1', {include_docs: true}))
                .then(profileData => {
                    this.setState({dataLoadingState: 'Loaded'})
                })
                .catch(err => console.log(err))
            } else {
                db.get('1', {include_docs: true}).then(profileData => {
                    this.setState({dataLoadingState: 'Loaded', profileData: profileData})

                })
                .catch(err => console.log(err))
            }
        });
    },

    render() {
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
