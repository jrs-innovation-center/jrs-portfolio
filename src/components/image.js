const React = require('react')

const Image = (props) => {
  const source = require('../img/' + props.source)

  const style = {
    width: '275px',
    margin: '10px 5px 0px 5px'
  }

  const img = props.className ? <img alt={props.alt} src={source} className={props.className} /> : <img alt={props.alt} src={source} style={style} />
  return (img)
}

module.exports = Image
