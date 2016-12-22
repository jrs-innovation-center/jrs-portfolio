const React = require('react')
const { Redirect, Link } = require('react-router')
const { set, lensProp, pathOr } = require('ramda')

const AboutEdit = React.createClass({
  getInitialState() {
    return {
      resolved: false
    }
  },

  handleChange(field) {
    return e => {
      this.props.updateAboutData(set(lensProp(field),e.target.value,this.props.profileData.about));
    }
  },

  handleFileChange(e) {

    const reader = new window.FileReader()
    reader.addEventListener('load', () => {
      this.props.updateAboutData(set(lensProp('imgFile'),reader.result,this.props.profileData.about));
    }, false)
    console.log("handleFileChange e", e)
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
    const starterAbout = { name: '', description: '', img: '', location: '', imgFile: ''}
    const about = pathOr(starterAbout, ['profileData', 'about'], this.props)
    return (


      <main className="pa4 black-80 bg-near-white">
      {this.state.resolved ? <Redirect to='/' /> : null}
        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 mid-gray">Edit About Me</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={about.name} type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange('name')} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="location">Location</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={about.location} type="text" name="location" id="location" placeholder="City, State" onChange={this.handleChange('location')} />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="desc">Description</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={about.desc} type="text" name="desc" id="desc" placeholder="Description" onChange={this.handleChange('desc')} />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="image">Image</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" value={about.img} type="text" name="image" id="image" placeholder="Your Profile Photo" onChange={this.handleChange('img')} />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 mid-gray" htmlFor="imageFile">Image</label>
              <input className="pa2 input-reset ba mid-gray bg-white hover-bg-black hover-white w-100" type="file"  onChange={this.handleFileChange} />
            </div>

            <div className="mt3">
              <img src={about.imgFile} alt="profile" style={{height: '200px'}} />
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



// <div className="lh-copy mt3">
//   <a href="#0" className="f6 link dim black db">Home</a>
// </div>

// <form onSubmit={this.handleSubmit}>
//   {this.state.resolved ? <Redirect to='/' /> : null}
//   <input type="text" name="name" value={about.name} placeholder="Name" onChange={this.handleChange('name')} />
//   <input type="text" name="location" value={about.location} placeholder="City, State" onChange={this.handleChange('location')}/>
//   <textarea type="text" name="desc" value={about.desc} placeholder="Description" onChange={this.handleChange('desc')}></textarea>
//   <input type="text" name="image" value={about.img} placeholder="Your Profile Photo" onChange={this.handleChange('img')}/>
//   <button type="submit">Save</button>
// </form>

  }
})

module.exports = AboutEdit
