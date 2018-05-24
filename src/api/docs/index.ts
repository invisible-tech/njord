import * as glob from 'glob'
import { merge } from 'lodash/fp'

import * as importedSwaggerConfig from '../../config/swagger.json'

const paths = glob
  .sync('./*.doc.json', { cwd: __dirname })
  .map(require)
  .reduce(merge, {})

export = { ...importedSwaggerConfig, paths }
