#! /usr/bin/env node
const { program } = require('commander');
const list = require('./commands/list');
const add = require('./commands/add');
const markDone = require('./commands/markDone');
const createRepo = require('./commands/createRepo');
const listRepos = require('./commands/listRepos')

program.command('list').description('List all the TODO tasks').action(list);

program.command('add <task>').description('Add a new TODO task').action(add);

program
  .command('mark-done')
  .description('Mark commands done')
  .option(
    '-t, --tasks <tasks...>',
    'The tasks to mark done. If not specified, all tasks will be marked done.'
  )
  .action(markDone);
  
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