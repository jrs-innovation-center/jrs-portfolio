const React = require('react')
const Nav = require('./components/nav')
const About = require('./components/about2')
const Portfolio = require('./components/portfolio')
const JRS = require('./components/jrs')
const Skills = require('./components/skills')
const fetch = require('isomorphic-fetch')
const Loading = require('./components/loading')

const url = '/db.json'
//const url = process.env.REACT_APP_API
//
// const about = {img: 'tom1.jpg',
//   name: 'John Russell',
//   location: 'Charleston, SC',
//   desc: 'A burgeoning full-stack JavaScript developer.'}
//
// const techSkills = [
//   {href: 'https://facebook.github.io/react/', category: 'UI', name: 'ReactJS'},
//   {href: 'http://tachyons.io/', category: 'UI', name: 'Tachyons'},
//   {href: 'https://nodejs.org/', category: 'JS', name: 'NodeJS'},
//   {href: 'http://ramdajs.com/', category: 'JS', name: 'Ramda'},
//   {href: 'https://pouchdb.com/', category: 'DB', name: 'PouchDB'},
//   {href: 'http://couchdb.apache.org/', category: 'DB', name: 'CouchDB'}
// ]
//
// const articles = [
//   {name: 'Innovation Center',
//     desc: 'Providing technology leadership, creativity and training to TRHC and the healthcare community.',
//     author: 'Tom Wilson',
//     img: 'JRS-Innovation-Center-logo-green-dog-trhc-revised.png',
//     href: 'http://www.jackrussellsoftware.com/'},
//   {name: 'Coding School',
//     desc: 'Upon graduating from this 12-week immersive Coding School Boot Camp, successful students will be proficient at a junior professional level and able to build full-stack web applications using JavaScript. Our next course begins January 23, 2017. The application deadline for this course is January 8, 2017.',
//     author: 'Tom Wilson',
//     img: 'tom1.jpg',
//     href: 'http://www.jackrussellsoftware.com/coding_school/'},
//   {name: 'Life at JRS Coding School',
//     desc: 'Cameron Monaghan was looking for something. He had just graduated from the College of Charleston, with a Computing in the Arts degree. Now, he needed a next step.',
//     author: 'Tom Wilson',
//     img: 'cameron-coding.png',
//     href: 'http://www.jackrussellsoftware.com/category/life-at-jrs-coding-school/'},
// ]
//
// const portfolio = [
//   {name: 'JS', desc: 'A project based on functional JavaScript.', img: 'js.png', href:'#'},
//   {name: 'Node', desc: 'A server-side app using NodeJS.', img: 'nodejs_logo2.png', href:'#'},
//   {name: 'CouchDB', desc: 'Relax. This is a project where the data is stored in Couch.', img: 'couchdb.png', href:'#'},
//   {name: 'React', desc: 'A component based UI framework project.', img: 'react-logo-1.png', href:'#'}
// ]

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
          <Skills skills={this.state.techSkills}/>
      </div>
    )
  }

})

module.exports = App
