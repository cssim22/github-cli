const { exec } = require('child_process');
const conf = new (require('conf'))();
const chalk = require('chalk');

function listRepos(githubHandle, flags = '-L 10') {
	exec(`gh repo list ${githubHandle} ${flags}`, (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`Successfully located github repos: \n${stdout}`);
	});
}

module.exports = listRepos;