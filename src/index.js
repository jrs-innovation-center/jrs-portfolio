const React = require('react')
const ReactDOM = require('react-dom')

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = require('./components/home')
const AboutEdit = require('./components/aboutedit')
const ArticleEdit = require('./components/articleedit')
const PortfolioEdit = require('./components/portfolioedit')
const SkillEdit = require('./components/skilledit')
const Settings = require('./components/settings')
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
            dataLoadingState: 'Loading',
            profileData: null
        }
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

    updateEditMode(editMode) {
      const profileData = {...this.state.profileData}
      profileData.editMode = editMode
      this.setState({ profileData })
    },

    updateAboutData(updatedAboutData){
        const profileData = {...this.state.profileData}
        profileData.about = updatedAboutData
        this.setState({ profileData })
    },



    /////////////
    // ARTICLES
    /////////////
    updateArticleData(index, updatedArticleData){
        const profileData = {...this.state.profileData}
        profileData.articles[index] = updatedArticleData
        this.setState({ profileData })
    },
    deleteArticle(index){
        const profileData = {...this.state.profileData}
        profileData.articles.splice(index,1)
        this.setState({ profileData })
    },
    addArticle(article){
        const profileData = {...this.state.profileData}
        profileData.articles.push(article)
        this.setState({profileData})
    },



    /////////////
    // Portfolio
    /////////////
    updatePortfolioData(index, updatedPortfolioData){
        const profileData = {...this.state.profileData}
        profileData.portfolio[index] = updatedPortfolioData
        this.setState({ profileData })
    },
    deletePortfolio(index){
        const profileData = {...this.state.profileData}
        profileData.portfolio.splice(index,1)
        this.setState({ profileData })
    },
    addPortfolio(portfolio){
        const profileData = {...this.state.profileData}
        profileData.portfolio.push(portfolio)
        this.setState({profileData})
    },










    /////////////
    // SKILLS
    /////////////
    updateSkillData(index, updatedSkillData){
        const profileData = {...this.state.profileData}
        profileData.skills[index] = updatedSkillData
        this.setState({ profileData })
    },
    deleteSkill(index){
        const profileData = {...this.state.profileData}
        profileData.skills.splice(index,1)
        this.setState({ profileData })
    },
    addSkill(skill){
        const profileData = {...this.state.profileData}
        profileData.skills.push(skill)
        this.setState({profileData})
    },



    render() {
      return (
        <BrowserRouter>
          <div>
             <Switch>
                <Route exact path="/" render={(props) => <Home {...props} dataLoadingState={this.state.dataLoadingState} profileData={this.state.profileData}/>} />
                <Route exact path="/aboutedit"
                     render={(props) => <AboutEdit {...props} updateAboutData={this.updateAboutData} saveData={this.saveData} profileData={this.state.profileData}/>} />
                <Route exact path="/articleedit/:id" render={(props) => {
                    return <ArticleEdit {...props}
                            updateArticleData={this.updateArticleData}
                            deleteArticle={this.deleteArticle}
                            saveData={this.saveData}
                            article={nth(props.match.params.id, pathOr([],['state','profileData','articles'], this))}
                            />
                }
              } />
                <Route exact path="/articleadd" render={(props) => {
                        return <ArticleEdit {...props}
                            addArticle={this.addArticle}
                            saveData={this.saveData}
                            />
                    }
                } />

                <Route exact path="/portfolioedit/:id" render={(props) => {
                    return <PortfolioEdit {...props}
                      updatePortfolioData={this.updatePortfolioData}
                      deletePortfolio={this.deletePortfolio}
                      saveData={this.saveData}
                      portfolio={nth(props.match.params.id, pathOr([],['state','profileData','portfolio'], this))}
                    />
                    }
                  } />

                <Route exact path="/portfolioadd" render={(props) => {
                    return <PortfolioEdit {...props}
                      addPortfolio={this.addPortfolio}
                      saveData={this.saveData}
                    />
                    }
                } />

              <Route exact path="/skilledit/:id" render={(props) => {
                 return <SkillEdit {...props}
                   updateSkillData={this.updateSkillData}
                   deleteSkill={this.deleteSkill}
                   saveData={this.saveData}
                   skill={nth(props.match.params.id, pathOr([],['state','profileData','skills'], this))}
                 />
                 }
              } />

              <Route exact path="/skilladd" render={(props) => {
                      return <SkillEdit {...props}
                      addSkill={this.addSkill} />
              }} />

              <Route exact path="/settings" render={(props) => {
                      return <Settings {...props}
                        updateEditMode={this.updateEditMode}
                        saveData={this.saveData}
                        profileData={this.state.profileData}
                      />
                      }
                } />

              <Route component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }

})

ReactDOM.render(<Root /> ,document.getElementById('root'));
