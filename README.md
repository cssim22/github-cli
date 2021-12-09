## Installation

1. CLONE THE REPOSITORY:
git clone https://github.com/cssim22/gh-cli.git

2. INSTALL THE SCRIPT (globally if you would like to run commands anywhere):
npm install -g

3. INSTALL GITHUB CLI
instructions here: https://github.com/cli/cli#installation

4. Login to your Github CLI with Personal access token (PAT) 
		a. Create a token on github webpage
			i. Login to account
			ii. Go to settings
			iii. On the left sidebar go to developer settings
			iv. On left sidebar, click personal access tokens
			v. Generate token and select expiration date and scopes (you only need the repo scope checkbox)
		b. On command line enter "gh auth login" and follow the prompt
			i. Select HTTPS for protocol
			ii. Asked if you would like to authenticate to Git with your GitHub credentials, enter Y.
			iii. Paste in your personal access token and then you will be signed in for however long you selected your token to last. This is needed to create a repo.

## Usage

1. To create a new repository for the user logged in with access token:
pretty-please createRepo <Repo Name> [flags]
```
pretty-please createRepo "BestRepoEver" --public
```
where `--public` will create apublic repository and `--private` will create a private repository

2. To list repositories for the user logged in with access token:
pretty-please listRepos <>

Options:
gh repo list [<owner>] [flags]

--archived
Show only archived repositories
--fork
Show only forks
-q, --jq <expression>
Filter JSON output using a jq expression
--json <fields>
Output JSON with the specified fields
-l, --language <string>
Filter by primary coding language
-L, --limit <int>
Maximum number of repositories to list
--no-archived
Omit archived repositories
--private
Show only private repositories

Use quotations when using spaces in the text otherwise quotations are not necessary.




