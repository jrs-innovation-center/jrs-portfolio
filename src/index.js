const React = require('react')
const ReactDOM = require('react-dom')
const {BrowserRouter, Match, Miss} = require('react-router')
const Home = require('./components/home')
const AboutEdit = require('./components/aboutedit')
const ArticleEdit = require('./components/articleedit')
const NotFound = require('./components/not-found')
const fetch = require('isomorphic-fetch')
const PouchDB = require('pouchdb')
const { pathOr, nth } = require('ramda')
import './index.css'

//TODO:  Below is for debug mode only.
window.PouchDB = PouchDB
//const url = 'http://server.pouchcloud.com/jrs-portfolio/ee739a56-6b05-487f-a4e3-6be24043d334'
const url = '/db.json'
const db = new PouchDB('jrs-portfolio')

const Root = React.createClass({
    getInitialState() {
        return {
            dataLoadingState: 'Loading'
            , profileData: null}
    },

    componentDidMount() {
        const self = this
        db.changes({since: 'now', live: true, include_docs: true})
            .on('change', function(change) {
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
                .then(profileData => {this.setState({dataLoadingState: 'Loaded'})})
                .catch(err => console.log(err))
            } else {
                db.get('1', {include_docs: true}).then(profileData => {
                    this.setState({dataLoadingState: 'Loaded', profileData: profileData})
                })
                .catch(err => console.log(err))
            }
        });
    },

    saveData() {
        return db.put(this.state.profileData)
    },

    updateAboutData(updatedAboutData){
        const profileData = {...this.state.profileData}
        profileData.about = updatedAboutData
        this.setState({ profileData })
    },

    updateArticleData(index, updatedArticleData){
        const profileData = {...this.state.profileData}
        profileData.articles[index] = updatedArticleData
        this.setState({ profileData })
    },

    render() {
      return (
        <BrowserRouter>
          <div>
            <Match exactly pattern="/"
              render={(props) => <Home {...props} dataLoadingState={this.state.dataLoadingState} profileData={this.state.profileData}/>} />
            <Match exactly pattern="/aboutedit"
              render={(props) => <AboutEdit {...props} updateAboutData={this.updateAboutData} saveData={this.saveData} profileData={this.state.profileData}/>} />
            <Match exactly pattern="/articleedit/:id"
              render={(props) => {
                return <ArticleEdit {...props}
                  updateArticleData={this.updateArticleData}
                  saveData={this.saveData}
                  article={nth(props.params.id, pathOr([],['state','profileData','articles'], this))}

                />
                }
             } />
            <Miss component={NotFound}/>
          </div>
        </BrowserRouter>
    )
    }

})


ReactDOM.render(<Root /> ,document.getElementById('root'));
