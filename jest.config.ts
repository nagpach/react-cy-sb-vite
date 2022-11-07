export default {
  roots: ["<rootDir>/src"],
  testEnvironment:  'jest-environment-jsdom', // "jsdom", 
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
}