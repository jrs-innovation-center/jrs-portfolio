const React = require('react')
const SkillCard = require('./skillcard')

const Skills = (props) => {
  return (
    <header id="skills" className='tc pv4 pv5-ns bg-white'>
      <h1 className='f5 f4-ns fw6 black'>Skills</h1>
      <h3 className="tc baskerville fw1 ph3 ph0-l">As a student, you will gain valuable experience in the following tools and technologies:</h3>
      <div className="cf">
          {props.skills.map(skill => <SkillCard key={skill.name} info={skill} />)}
      </div>
    </header>
  )
}

module.exports = Skills
