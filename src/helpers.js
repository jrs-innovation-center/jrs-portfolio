const {find, propEq} = require('ramda')

const styles = [
    {category: 'JS', style: 'silver bg-dark-red'},
    {category: 'UI', style: 'light-purple bg-dark-gray'},
    {category: 'DB', style: 'light-yellow bg-dark-red'}
  ]

export function getSkillStyle (skill) {
    // const skill=  {href: '#', category: 'JS', name: 'NodeJS'}
    return find(propEq('category', skill.category))(styles).style; //=> "silver bg-near-black"
}
