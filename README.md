## Installation

1. CLONE THE REPOSITORY:
```
git clone https://github.com/cssim22/github-cli.git
```
2. INSTALL THE DEPENDENCIES (globally if you want to use anywhere):
```
npm install 
```
3. INSTALL GITHUB CLI by following instructions at this link: 
```
https://github.com/cli/cli#installation
```

4. Login to your Github CLI with Personal access token (PAT) 
	 - Create a token on github webpage
		 - Login to account
		 - Go to settings
		 - On the left sidebar go to developer settings
		 - On left sidebar, click personal access tokens
		 - Generate token and select expiration date and scopes (you only need the repo scope checkbox)
	 - On command line enter <gh auth login> and follow the prompt
		 - Select HTTPS for protocol
		 - Asked if you would like to authenticate to Git with your GitHub credentials, enter Y.
		 - Paste in your personal access token and then you will be signed in for however long you selected your token to last. This is needed to create a repo.

## Usage

1. To create a new private repository for the user logged in with access token:
```
pretty-please createRepo <Repo Name>
```
Example:
```
pretty-please createRepo new-repo 
```


2. To list repositories for the user logged in with access token:
```
pretty-please listRepos <GithubHandle>
```
Example:
```
pretty-please listRepos cssim22
```
* Note that githubHandle can be anyone's handle but will only show repos to which you have access.