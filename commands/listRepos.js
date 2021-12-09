const { exec } = require('child_process');

function listRepos(githubHandle) {
  let command = `gh repo list ${githubHandle}`;
	exec(command, (error, stdout, stderr) => {
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