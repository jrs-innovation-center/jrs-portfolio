const React = require('react')
const SkillCard = require('./skillcard')

const Skills = (props) => {
  return (
    <section id="skills" className="cf mt0 pv5 bt b--black-05 ph6-l bg-near-white">
        <h2 className="tc baskerville fw1 ph3 ph0-l">Skills</h2>
          <h3 className="tc baskerville fw1 ph3 ph0-l">As a student, you will gain valuable experience in the following tools and technologies:</h3>
          <div className="cf">
              {props.skills.map(skill => <SkillCard key={skill.name} info={skill} />)}
          </div>
    </section>
  )
}

module.exports = Skills
