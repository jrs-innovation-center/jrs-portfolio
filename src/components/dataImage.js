const React = require('react')
const DataImage = (props) => {

  const style = {
    width: '275px',
    margin: '10px 5px 0px 5px'
  }

  const img = props.className ? <img alt={props.alt} src={props.source} className={props.className} /> : <img alt={props.alt} src={props.source} style={style} />
  return (img)
}

module.exports = DataImage
