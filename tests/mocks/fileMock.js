import * as path from "path"

const fileMock = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    }
  },
}

export default fileMock
