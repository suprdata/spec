module.exports = {
  extends: './node_modules/@suprcrew/project-config/configs/eslintrc.js',
  ignorePatterns: [
    'src/schemas.ts',
    'tests/test-build.js',
    'scripts',
    'dist'
  ],
  rules: {
    'import/no-cycle': 'off'
  }
}
