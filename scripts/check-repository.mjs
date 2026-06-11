import assert from 'node:assert/strict'
import {existsSync, readFileSync, readdirSync} from 'node:fs'
import {join, relative} from 'node:path'

const repositoryRoot = process.cwd()
const ignoredDirectories = new Set([
  '.git',
  '.next',
  '.pnpm-store',
  '.sanity',
  '.turbo',
  'coverage',
  'dist',
  'node_modules',
])

const requiredFiles = [
  '.editorconfig',
  '.gitattributes',
  '.gitignore',
  '.github/CODEOWNERS',
  '.github/PULL_REQUEST_TEMPLATE.md',
  '.github/dependabot.yml',
  '.github/workflows/ci.yml',
  '.node-version',
  '.nvmrc',
  'README.md',
  'package.json',
  'pnpm-lock.yaml',
  'pnpm-workspace.yaml',
  'turbo.json',
  'apps/web/package.json',
  'apps/studio/package.json',
  'apps/studio/sanity.config.ts',
  'apps/studio/sanity.cli.ts',
  'apps/studio/schemaTypes/index.ts',
]

for (const file of requiredFiles) {
  assert.equal(existsSync(file), true, `Missing required file: ${file}`)
}

function readJson(file) {
  return JSON.parse(readFileSync(file, 'utf8'))
}

function walk(directory) {
  const files = []

  for (const entry of readdirSync(directory, {withFileTypes: true})) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue
    }

    const absolutePath = join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...walk(absolutePath))
    } else {
      files.push(relative(repositoryRoot, absolutePath).replaceAll('\\', '/'))
    }
  }

  return files
}

function assertExactDependencies(packageName, dependencies = {}) {
  const allowedLocalProtocols = ['workspace:', 'file:', 'link:']
  const exactVersion = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/

  for (const [dependency, version] of Object.entries(dependencies)) {
    const isLocal = allowedLocalProtocols.some((protocol) => version.startsWith(protocol))
    assert.equal(
      isLocal || exactVersion.test(version),
      true,
      `${packageName}: ${dependency} must use an exact version or a local workspace protocol; received ${version}`,
    )
  }
}

const allFiles = walk(repositoryRoot)
const nestedWorkspaces = allFiles.filter(
  (file) => file.endsWith('/pnpm-workspace.yaml') || file.endsWith('/pnpm-lock.yaml'),
)

assert.deepEqual(
  nestedWorkspaces,
  [],
  `Nested pnpm workspace or lockfile detected: ${nestedWorkspaces.join(', ')}`,
)

const rootPackage = readJson('package.json')
const webPackage = readJson('apps/web/package.json')
const studioPackage = readJson('apps/studio/package.json')
const turboConfig = readJson('turbo.json')

assert.equal(rootPackage.private, true, 'Root package must be private')
assert.equal(rootPackage.license, 'UNLICENSED', 'Root package must remain unlicensed')
assert.equal(rootPackage.engines?.node, '>=24.16.0 <25', 'Unexpected Node.js engine range')
assert.equal(rootPackage.packageManager, 'pnpm@11.5.2', 'Unexpected pnpm version')
assert.equal(readFileSync('.node-version', 'utf8').trim(), '24.16.0')
assert.equal(readFileSync('.nvmrc', 'utf8').trim(), '24.16.0')

for (const script of ['dev', 'build', 'lint', 'typecheck', 'check:repo', 'check']) {
  assert.equal(typeof rootPackage.scripts?.[script], 'string', `Missing root script: ${script}`)
}

assert.equal(webPackage.name, '@pozytywka/web')
assert.equal(studioPackage.name, '@pozytywka/studio')
assert.equal(webPackage.private, true)
assert.equal(studioPackage.private, true)
assert.equal(webPackage.scripts?.typecheck, 'next typegen && tsc --noEmit')

for (const [packageName, packageJson] of [
  ['@pozytywka/web', webPackage],
  ['@pozytywka/studio', studioPackage],
]) {
  for (const script of ['dev', 'build', 'lint', 'typecheck']) {
    assert.equal(
      typeof packageJson.scripts?.[script],
      'string',
      `${packageName}: missing script ${script}`,
    )
  }

  assertExactDependencies(packageName, packageJson.dependencies)
  assertExactDependencies(packageName, packageJson.devDependencies)
}

assert.equal(turboConfig.tasks?.dev?.persistent, true)
assert.equal(turboConfig.tasks?.dev?.cache, false)
assert.equal(turboConfig.tasks?.build?.dependsOn?.includes('typecheck'), true)
assert.equal(turboConfig.tasks?.build?.outputs?.includes('.next/**'), true)
assert.equal(turboConfig.tasks?.build?.outputs?.includes('dist/**'), true)
assert.equal('test' in (turboConfig.tasks ?? {}), false, 'Remove placeholder test task until real tests exist')

const gitignore = readFileSync('.gitignore', 'utf8')
assert.match(gitignore, /^\/apps\/web\/next-env\.d\.ts$/m)

const workspaceConfig = readFileSync('pnpm-workspace.yaml', 'utf8')
for (const packageName of ['esbuild', 'sharp', 'unrs-resolver']) {
  assert.match(workspaceConfig, new RegExp(`^  ${packageName}: true$`, 'm'))
}

console.log('Repository baseline is valid.')
