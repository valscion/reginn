import { join } from 'path'
import base from '../rollup.base'

const entry = join(__dirname, 'reginn.js')
const dest = join(__dirname, 'dist/reginn.js')

export default Object.assign({}, base, {entry, dest})
