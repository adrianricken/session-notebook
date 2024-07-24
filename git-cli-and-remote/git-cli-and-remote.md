create <folder> you want to have as a repository
<folder> | git init
-> <folder> git:(main)
create repository in GitHub with same name as <folder>
<folder> git:(main) | git remote add origin <SSH link>
-> create folders / files IF neccessary
<folder> git:(main) | git add _either file / folder name or . for everything_
<folder> git:(main) | git commit -m "description of what was done"
<folder> git:(main) | git push origin main
-> changes are being transferred to GitHub
