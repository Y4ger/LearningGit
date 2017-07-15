# LearningGit
Used to learn more in depth processes of Git/Github

Make a commit please.

Key words/concepts:
  origin: refers to the server hosted repository
  master: the local branch that is a clone of origin
  HEAD: current branch

  git commands:
    clone: used to create a local directory of a repository
      **while in the directory you want the repository folder in**
      [git clone {GitHub url for repository}]

    pull: Fetch from and integrate with another repository or a local branch

    fetch: Download objects and refs from another repository

    status: shows the current tree status (if branch is up to date, what files are not on staging, what files have been modified since last commit)
      -uno: tells you if your current branch is up to date with remote, if no response you are up to date
      [git status [-uno] ]

    add: adds a file to the current staging so that it can be committed
      [git add {file name}]

    rm: removes a file from staging
      --cached: removes a file already on staging but keeps it on local
      [git rm {file name}]

    commit: record changes made to HEAD, creates a blob/snapshot of the directory
      -a: automatically adds any files that are already on staging that have been modified
      -m: does not open text editor, instead allows for message immediately after
      --amend: redue a commit, uses the current staging environment as blob/snapshot
      [git commit [-am] "commit message"]

    push: updates the remote repository with current HEAD's commit
      {local branch}:{remote branch}: this pushes the changes made on a local branch to a remote branch
      [git push {remote repository name} [{local branch}:{remote branch}]]

    branch: using just this command shows all existing branches
      "branch name": is this names is not in use, creates a new branch from the current branch
      -d: deletes the branch you refer to
      [git branch [-d] "name of branch"]

    checkout: change between local branches
      -b: creates a new branch and moves to it
      [git checkout [-b] {branch name}]

    merge: combines all changes of two (or more) branches so that their current commits are the same
      [git merge {Name Of Other Branch You Want To Combine With Head}]

    remote: used to connect with and manage remote repository
      update: brings remotes up to date, changes made will show up
      [git remote [update] ]
