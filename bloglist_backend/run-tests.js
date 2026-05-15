const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const testDir = path.join(__dirname, 'tests')
const files = fs.readdirSync(testDir)
  .filter(f => f.endsWith('.test.js'))
  .sort()

for (const file of files) {
  console.log(`\n--- Running: ${file} ---`)
  execSync(`node --test ${path.join('tests', file)}`, { stdio: 'inherit' })
}
