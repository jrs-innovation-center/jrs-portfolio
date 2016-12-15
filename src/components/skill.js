const React = require('react')
const {getSkillStyle} = require('../helpers')

const Skill = (props) => {
  const skillStyle = "f6 f5-ns b db pa2 link dim ba b--black-20 " + getSkillStyle(props.info)
  return (
    <li className="dib mr1 mb2">
      <a href={props.info.href} target="_blank"  className={skillStyle}>{props.info.name}</a>
    </li>
  )
}

module.exports = Skill
