import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  moduleNameMapper: {
    "^@App/(.*)$": "<rootDir>/src/$1",
    "^lib/(.*)$": "<rootDir>/common/$1",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/mocks/fileMock.js",
  },
}

export default jestConfig
