'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
}

const separator = chalk.white(' • ');

// Text + chalk definitions
const data = {
  name: chalk.white.bold('           Divyanshu Maithani'),
  handle: chalk.white('@divyanshu013'),
  work: chalk.white('Senior Software Engineer @Instawork'),
  opensource: chalk.white('I love building stuff!'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('divyanshu013'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~divyanshu013'),
  github: chalk.gray('https://github.com/') + chalk.green('divyanshu013'),
  web: chalk.cyan('https://divyanshu013.dev'),
  stackoverflow: chalk.gray('https://stackoverflow.com/users/') + chalk.magenta('4952669/divyanshu-maithani'),
  labelStackoverflow: chalk.white.bold('      SO:'),
  pastWork: chalk.white(' Senior Frontend Engineer @appbaseio'),
  labelPastwork: chalk.white.bold('    Past:'),
  labelWork: chalk.white.bold('    Work:'),
  labelOpenSource: chalk.white.bold('     Bio:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelWeb: chalk.white.bold('    Blog:'),
  labelYoutube: chalk.white.bold(' YouTube:'),
  youtube: chalk.gray('https://www.youtube.com/') + chalk.yellow('WhatTheJavaScript'),
  labelTech: chalk.white.bold('    Tech:'),
  techStack: chalk.cyan('React') + separator + chalk.blue('React Native') + separator + chalk.red('GraphQL') + separator + chalk.green('NodeJS') + separator + chalk.yellow('JavaScript')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const pastWorking = `${data.labelPastwork} ${data.pastWork}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const stackoverflow = `${data.labelStackoverflow}  ${data.stackoverflow}`
const tech = `${data.labelTech}  ${data.techStack}`
const youtube = `${data.labelYoutube}  ${data.youtube}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               pastWorking + newline +
               opensourcing + newline + // data.labelOpenSource + data.opensource
               tech + newline + newline +
               webing + newline + youtube + newline + newline + // data.labelWeb + data.web
               githubing + newline + // data.labelGitHub + data.github
               stackoverflow + newline +
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline; // data.labelnpm + data.npm
               
fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
