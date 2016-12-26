const React = require('react')
const { Redirect, Link } = require('react-router')
const {  lensPath, view} = require('ramda')

const Settings = React.createClass({
  getInitialState() {
    return {
      resolved: false
    }
  },

  handleChange() {
    return e => {
      const editMode =  view(lensPath(['profileData', 'editMode']), this.props)
      this.props.updateEditMode(!editMode);
    }
  },

  handleSubmit(e) {
    e.preventDefault()
    this.props.saveData().then(this.setState({resolved: true}))
  },

  render() {
    const editMode =  view(lensPath(['profileData', 'editMode']), this.props);
    const editModeCheckBox = <input checked={editMode} type="checkbox" id="editMode"  onChange={this.handleChange('editMode')}/>

    return (
      <main className="pa4 black-80 bg-near-white">
      {this.state.resolved ? <Redirect to='/' /> : null}
        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="settings" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0 mid-gray">Settings</legend>
          <label>Edit Mode </label>
          {editModeCheckBox}
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

module.exports = Settings
