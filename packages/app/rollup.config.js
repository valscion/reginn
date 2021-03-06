import { join } from 'path'
import base from '../rollup.base'

const entry = join(__dirname, 'app.js')
const dest = join(__dirname, 'dist/reginn-app.js')

export default Object.assign({}, base, {entry, dest})
