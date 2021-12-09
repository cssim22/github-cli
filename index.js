#! /usr/bin/env node
const { program } = require('commander');
const createRepo = require('./commands/createRepo');
const listRepos = require('./commands/listRepos')
  
program
    .command('createRepo <newRepoName>')
    .description('Creates a new Github public repository')
    // .option('-p, --private', 'Creates a repo with private permissions') //maybe add more functionality here
    .action(createRepo);

program
    .command('listRepos <githubHandle')
    .description('Lists the names of all public Repos in users account')
    // .option('-p, --private', 'Creates a repo with private permissions') //maybe add more functionality here
    .action(listRepos);

program.parse();