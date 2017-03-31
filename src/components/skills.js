const React = require('react')
const SkillCard = require('./skillcard')
const { Link } = require('react-router-dom')

const Skills = (props) => {
  const addSkillButton = props.editMode ? <div className="tr pa3">
      <Link to="/skilladd">
        <a className="f6 dim br1 no-underline dib v-mid dark-green ba b--green ph3 pv2 mb3 mr2">Add Skill</a>
      </Link>
    </div> : null

  return (

    <header id="skills" className='tc pv4 pv5-ns bg-white'>
      <h1 className='f5 f4-ns fw6 black'>Skills</h1>
      <h3 className="tc baskerville fw1 ph3 ph0-l">As a student, you will gain valuable experience in the following tools and technologies:</h3>

        {addSkillButton}
        <div className="cf">
          {props.skills.map((skill, index) => <SkillCard editMode={props.editMode} index={index} key={index} info={skill} />)}
        </div>
    </header>
  )
}

module.exports = Skills
