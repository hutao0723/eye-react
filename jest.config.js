module.exports = {
    verbose: true,
    // 初始化指定的测试环境
    setupFiles: [
      '<rootDir>//config/jest/setup.js',
      '<rootDir>//config/jest/register-context.js',
    ],
    // 支持加载的文件名
    moduleFileExtensions: [
      'js',
      'jsx',
      'ts',
      'tsx',
    ],
    // 不需要测试的文件
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
    // 生成测试覆盖报告，如果开启，会增加测试的时间
    collectCoverage: true,
    // // 生成测试覆盖报告是检测的覆盖文件
    collectCoverageFrom: ['<rootDir>/lib/components/**/*.{ts,tsx,js,tsx}', '!**/node_modules/**'],
    // 被Mock的资源名称
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "^@/(.*)$": "<rootDir>/lib/$1"
    },
    // 用babel-jest/ts-jest解析文件
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    globals: {
        "ts-jest": {
          diagnostics: false
        }
    },    
    // 测试文件的格式
    testMatch: ["<rootDir>/**/__test__/**/*.(js|jsx|ts|tsx)"],
    coverageDirectory: '<rootDir>/coverage/',
    snapshotSerializers: ["enzyme-to-json/serializer"],
};