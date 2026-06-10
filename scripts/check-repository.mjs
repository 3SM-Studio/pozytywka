import assert from 'node:assert/strict'
import {existsSync, readFileSync} from 'node:fs'

const requiredFiles = [
  '.editorconfig',
  '.gitattributes',
  '.gitignore',
  '.node-version',
  '.nvmrc',
  '.npmrc',
  'README.md',
  'package.json',
  'pnpm-lock.yaml',
  'pnpm-workspace.yaml',
]

for (const file of requiredFiles) {
  assert.equal(existsSync(file), true, `Missing required file: ${file}`)
}

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'))

assert.equal(packageJson.private, true, 'Root package must be private')
assert.equal(packageJson.license, 'UNLICENSED')
assert.equal(packageJson.engines?.node, '24.16.x')
assert.equal(packageJson.packageManager, 'pnpm@11.5.2')

console.log('Repository baseline is valid.')
