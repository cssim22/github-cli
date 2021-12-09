#! /usr/bin/env node
const { program } = require('commander');
const createRepo = require('./commands/createRepo');
const listRepos = require('./commands/listRepos')

program
    .command('createRepo <newRepoName>')
    .description('Creates a new Github repository')
    .option('--public', 'Creates a repo with public permissions')
    .option('--private', 'Creates a repo with private permissions')
    .action(createRepo);

program
    .command('listRepos')
    .description('Lists the names of all public Repos in users account')
    .option('-L, --limit <int>','The number of repos to display in the list')
    .option('--public', 'Creates a repo with public permissions')
    .option('--private', 'Creates a repo with private permissions')
    .action(listRepos);

program.parse();
