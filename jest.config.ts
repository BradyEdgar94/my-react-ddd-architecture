import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testMatch: ["**/__tests__/**/*.test.+(ts|tsx|js|jsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  coveragePathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
