const React = require('react')
const Skill = require('./skill')

const Skills = (props) => {
  return (
    <section id="skills" className="cf mt0 pv5 bt b--black-05 ph6-l">
      <h2 className="tc baskerville fw1 ph3 ph0-l">Skills</h2>
      <ul className="list ph3 ph5-ns pv4">
        {props.skills.map(skill => <Skill key={skill.name} info={skill} />)}
      </ul>
    </section>
  )
}

module.exports = Skills
