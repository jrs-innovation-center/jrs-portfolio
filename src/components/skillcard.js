const React = require('react')
const Image = require('./image')

const SkillCard = (props) => {
  return (
    <div className="fl w-100 w-10-ns tc white">
      <article className="dim center">
        <div className="tc">
          <a href={props.info.href} target="_blank">
            <Image source={props.info.img} alt={props.info.name} className="br-100 h3 w3 dib ba b--black-05 pa2 bg-white"/>
          </a>
        </div>
      </article>
    </div>
  )
}

module.exports = SkillCard
