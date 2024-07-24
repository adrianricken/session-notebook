- pr = pull request
- main branch = accessed by everyone in the project
- side branch = separate branch to work on a part of the main branch

commands:

- git switch -c <branchname> | create a new branch AND switch to it
- git switch <branchname> | switch branches
- git branch | list your branches
- git branch -a | list all branches (local and remote)
- git branch -d <branchname> | delete a branch

remote / origin

1. create a new branch
2. make changes to code / write your code for the feature
3. git add . / filenames
   - git commit -m "note"
   - git push origin branchname
   - git pull origin main
   - push changes and the new branch with "git push -u origin <branchname>" - after done once "git push" is enough for this branch
4. create pull request on GitHub from new branch into main
5. share pull request with team
6. review pull request, implement changes if needed, push again to update pull request until it gets approved
7. merge pull request into main
8. git pull inside main branch on local machine
9. delete the new branch on GitHub and locally
