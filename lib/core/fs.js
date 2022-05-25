const parseJson = require('parse-json');
let fs = require('fs-extra');
let utils = require('../utils/utils.js');
require('colors');

function mkdirpSync() {
  return fs.mkdirpSync.apply(fs.mkdirpSync, arguments);
}

function copySync() {
  return fs.copySync.apply(fs.copySync, arguments);
}

function writeFileSync() {
  return fs.writeFileSync.apply(fs.writeFileSync, arguments);
}

function readFileSync() {
  return fs.readFileSync.apply(fs.readFileSync, arguments);
}

function readJSONSync() {
  let content = readFileSync.apply(readFileSync, arguments);
  try {
    return parseJson(content);
  } catch(e) {
    console.error("error: ".red + arguments[0].green.underline + " " + e.message.green);
    process.exit(0);
  }
}

function writeJSONSync() {
  return fs.writeJSONSync.apply(fs.writeJSONSync, arguments);
}

function existsSync() {
  return fs.existsSync.apply(fs.existsSync, arguments);
}

function removeSync() {
  return fs.removeSync.apply(fs.removeSync, arguments);
}

// returns embarks root directory
function embarkPath(fileOrDir) {
  return utils.joinPath(__dirname, '/../../', fileOrDir);
}

function dappPath() {
  return process.env.PWD;
}

module.exports = {
  mkdirpSync: mkdirpSync,
  copySync: copySync,
  readFileSync: readFileSync,
  writeFileSync: writeFileSync,
  readJSONSync: readJSONSync,
  writeJSONSync: writeJSONSync,
  existsSync: existsSync,
  removeSync: removeSync,
  embarkPath: embarkPath,
  dappPath: dappPath
};
