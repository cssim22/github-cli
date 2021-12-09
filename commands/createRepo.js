const { exec } = require('child_process');

function createRepo(newRepoName) {
  let command = `gh repo create ${newRepoName} --private`;
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`new repo '${newRepoName}' created successfully`);
	});
}

module.exports = createRepo;