#!/usr/bin/env node

'use strict';

const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
var inquirer = require('inquirer');

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

const msg = `Hello, ${options.name}!`;
const greeting = chalk.white.bold(msg);

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);

inquirer
  .prompt([
    /* Pass your questions in here */
    console.log("MMMMM")
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });


const _runCmd = Symbol('_runCmd')
const _load = Symbol('_load')
const _flatOptions = Symbol('_flatOptions')
const _tmpFolder = Symbol('_tmpFolder')
const _title = Symbol('_title')

const report = `
	_runCmd       ${_runCmd}
	_load         ${_load}
	_flatOptions 
`;

console.log(report);

const EveOverviewComposer = require('../lib/eveoc.js');
var composer = new EveOverviewComposer("TEST");
composer.display();
