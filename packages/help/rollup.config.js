import { join } from 'path'
import base from '../rollup.base'

const entry = join(__dirname, 'help.js')
const dest = join(__dirname, 'dist/reginn-help.js')

export default Object.assign({}, base, {entry, dest})
