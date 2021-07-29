const util = require('util');
const exec = util.promisify(require('child_process').exec);

// silent and fast execution
exec('./scripts/buildLibrary.sh').catch();
