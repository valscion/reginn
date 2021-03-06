import { join } from 'path'
import base from '../rollup.base'

const entry = join(__dirname, 'desc.js')
const dest = join(__dirname, 'dist/reginn-desc.js')

export default Object.assign({}, base, {entry, dest})
