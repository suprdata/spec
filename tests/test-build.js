const util = require('util');
const exec = util.promisify(require('child_process').exec);
const readdir = require('fs/promises').readdir;

async function run(command) {
  const {stdout, stderr} = await exec(command);

  if (stderr) {
    return stderr;
  }

  return stdout;
}

Promise.resolve()
  .then(() => run('npm run build:lib').catch())
  .then(() => readdir('dist'))
  .then((folders) => {
    if (folders.length !== 2) {
      throw '"./dist" folder has not been correctly created!'
    }
  })
  .then(() => run('rm -rf ./dist').catch())
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('err', err);
    process.exit(1);
  });



