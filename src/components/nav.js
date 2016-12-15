const React = require('react')
import logo from '../img/jrs-dog-avatar.png'

const Nav = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
        <img src={logo} className="dib w2 h2 br-100" alt="Site Name"/>
      </a>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#about" title="About Me">About Me</a>
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#jrs" title="JRS">JRS</a>
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#portfolio" title="Portfolio">Portfolio</a>
        <a className="link dim dark-gray f6 f5-l dib" href="#skills" title="Skills">Skills</a>
      </div>
    </nav>
  )
} 

module.exports = Nav
