
const Fs = require('fs')
const Path = require('path')
const Os = require('os')

const copyFile = async (from, to) => await new Promise((resolve, reject) => Fs.copyFile(from, to, err => err ? reject(err) : resolve()))
const readdir = async dir => await new Promise((resolve, reject) => Fs.readdir(dir, (err, list) => err ? reject(err) : resolve(list)))
const mkdir = async dir => await new Promise((resolve, reject) => Fs.mkdir(dir, err => err ? reject(err) : resolve()))

const concurrency = Math.max(Os.cpus().length - 1, 1)
const outDir = Path.resolve(__dirname, 'out')
const rawSubdir = Path.resolve(outDir, 'raw')



const copyToRaw = async path => {
  const from = Path.resolve(outDir, ...path)
  const to = Path.resolve(rawSubdir, ...path)
  const copyFileToRaw = async file => await copyFile(Path.resolve(from, file), Path.resolve(to, file.replace(/\.html$/, '')))
  const htmlFiles = (await readdir(from)).filter(file => /\.html$/.test(file))
  try {
    await mkdir(to)
  } catch (mkdirError) {
    if (mkdirError.code !== 'EEXIST') {
      throw mkdirError
    }
  }
  const worker = async () => htmlFiles.length ? await worker(await copyFileToRaw(htmlFiles.pop())) : null
  await Promise.all(new Array(concurrency).fill().map(worker))
}

const copyTreeToRaw = async tree => {
  while (tree.length) {
    await copyToRaw(tree.shift())
  }
}

copyTreeToRaw([
  [],
  ['provider']
])
