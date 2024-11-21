import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
  moduleNameMapper: {
    "^@App/(.*)$": "<rootDir>/src/$1",
    "^lib/(.*)$": "<rootDir>/common/$1",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
}

export default jestConfig
