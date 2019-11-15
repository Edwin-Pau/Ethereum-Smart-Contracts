const path = require('path');
const solc = require('solc');

// Similar to the fs module, but an improved version with extra functions
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');

// Looks at the folder and deletes everything inside of it
fs.removeSync(buildPath);