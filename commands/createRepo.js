const conf = new (require('conf'))();
const chalk = require('chalk');
const { exec } = require('child_process');

function createRepo(newRepoName) {
	exec(`gh repo create ${newRepoName} --private`, (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
}

module.exports = createRepo;
