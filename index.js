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
