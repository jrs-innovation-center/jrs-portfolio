const React = require('react')
const { Redirect, Link } = require('react-router')
const { set, lensProp, pathOr } = require('ramda')

const ArticleEdit = React.createClass({
  getInitialState() {
    return {
      resolved: false
    }
  },
 //profileData
 //{this.props.params.id}
  handleChange(field) {
    return e => {
      this.props.updateArticleData(set(lensProp(field),e.target.value,this.props.profileData.articles[this.props.params.id]));
    }
  },

  handleFileChange(e) {

    const reader = new window.FileReader()
    reader.addEventListener('load', () => {
      console.log("this.props.params.id", this.props.params.id)
      this.props.updateArticleData(this.props.params.id, set(lensProp('imgFile'),reader.result,this.props.profileData.articles[this.props.params.id]));
    }, false)
    console.log("handleFileChange e.target.files", e.target.files)

    if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0])
    }
  },

  // propTypes: {
  //   post: React.PropTypes.func,
  //   put: React.PropTypes.func,
  //   get: React.PropTypes.func
  // },

  handleSubmit(e) {
    e.preventDefault()
    this.props.saveData().then(this.setState({resolved: true}))
  },


  render() {
    const starterArticle = { name: '', description: '', img: '', location: '', imgFile: ''}
    const articles = pathOr([], ['profileData', 'articles'], this.props)
    const article = articles.length > 0 ? articles[this.props.params.id] : starterArticle
    return (


      <main className="pa4 black-80 bg-near-white">
      {this.state.resolved ? <Redirect to='/' /> : null}
        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 mid-gray">Edit Article</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={article.name} type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange('name')} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="location">Description</label>
              <textarea className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={article.desc} type="text" name="desc" id="desc" placeholder="Description" onChange={this.handleChange('desc')} />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="desc">Author</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={article.author} type="text" name="author" id="author" placeholder="Author" onChange={this.handleChange('author')} />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="imageFile">Image</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" type="file"  onChange={this.handleFileChange} />
            </div>

            <div className="mt3">
              <img src={article.imgFile} alt="profile" style={{height: '200px'}} />
            </div>

          </fieldset>
          <div className="">
            <input className="b f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3 mr2" type="submit" value="Save"/>
            <Link to="/">{ ({href}) =>
              <a className="f6 no-underline grow dib v-mid mid-gray ba b--black-20 ph3 pv2 mb3 mr2" href={href}>Cancel</a>
            }</Link>
          </div>
        </form>
      </main>
    )
  }
})

module.exports = ArticleEdit
