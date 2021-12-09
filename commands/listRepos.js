function listRepos() {
  let command = 'gh repo list';
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