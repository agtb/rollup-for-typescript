import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  moduleNameMapper: {
    "^@App/(.*)$": "<rootDir>/src/$1",
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  roots: ["<rootDir>"],
  testEnvironment: "node",
  transform: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/mocks/fileMock.js",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  verbose: false,
}

export default jestConfig
