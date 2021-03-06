import { reduce, set } from '@northbrook/util'

export const flag = (...definitions) =>
  reduce(toType, {type: TYPE, flagType: 'string', alias: []}, definitions)

function toType (acc, { type, value }) {
  switch (type) {
    case 'type': return set(value, 'flagType', acc)
    case 'alias': {
      acc.alias = acc.alias.concat([ value ])
      return acc
    }
    case 'desc': {
      acc.desc = value
      return acc
    }
    default: return acc
  }
}

const TYPE = 'flag'
