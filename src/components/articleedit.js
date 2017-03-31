const React = require('react')
const { Redirect, Link } = require('react-router-dom')
const { set, lensProp } = require('ramda')

const ArticleEdit = React.createClass({
  getInitialState() {
    return {
      resolved: false,
      article: {
        name: '',
        desc: '',
        author: '',
        href: '',
        imgFile: ''
      }
    }
  },

  handleChange(field) {
    return e => {
      if (this.props.amtch.params.id) {
        //edit mode
        return this.props.updateArticleData(this.props.params.id,
          set(lensProp(field),e.target.value,this.props.article))
      }
      const article = {...this.state.article}
      article[field] = e.target.value
      this.setState({article})

    }
  },

  handleFileChange(e) {
    const reader = new window.FileReader()
    reader.addEventListener('load', () => {
      if (this.props.params.id) {
        //edit mode
        return this.props.updateArticleData(this.props.params.id,
        set(
          lensProp('imgFile'),
          reader.result,
          this.props.article
          )
        )
      }

      const article = {...this.state.article}
      article.imgFile = reader.result
      this.setState({article})

    }, false)

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
    if (this.props.params.id) {
      //this is an edit of an existing skill
      return this.props.saveData().then(this.setState({resolved: true}))
    }
    this.props.addArticle(this.state.article)
    this.props.saveData().then(this.setState({resolved: true}))
  },

  handleDelete(e) {
    e.preventDefault()
    if (this.props.params.id) {
      //this is an edit of an existing skill
      this.props.deleteArticle(this.props.params.id)
      this.props.saveData().then(this.setState({resolved: true}))
    }
  },

  render() {
    const article = this.props.article ? this.props.article : this.state.article
    const articleLegend = this.props.match.params.id ? 'Edit Article' : 'Add Article'
    const deleteButton = this.props.match.params.id ? <button className="b f6 br1 no-underline dim dib v-mid white bg-red ba b--red ph3 pv2 mb3 mr2" onClick={this.handleDelete}>Delete Article</button>: null

    return (
      <main className="pa4 black-80 bg-near-white">
      {this.state.resolved ? <Redirect to='/' /> : null}
        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 mid-gray">{articleLegend}</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={article.name} type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange('name')} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="desc">Description</label>
              <textarea className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={article.desc} type="text" name="desc" id="desc" placeholder="Description" onChange={this.handleChange('desc')} />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="author">Author</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={article.author} type="text" name="author" id="author" placeholder="Author" onChange={this.handleChange('author')} />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="href">URL</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={article.href} type="text" name="href" id="href" placeholder="URL" onChange={this.handleChange('href')} />
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
            <input className="b br1 f6 no-underline dim dib v-mid bg-blue white ba b--blue ph3 pv2 mb3 mr2" type="submit" value="Save"/>
            <Link to="/">{ ({href}) =>
              <a className="f6 br1 no-underline dim dib v-mid mid-gray ba b--black-20 ph3 pv2 mb3 mr2" href={href}>Cancel</a>
            }</Link>
            {deleteButton}
          </div>
        </form>
      </main>
    )
  }
})

module.exports = ArticleEdit
