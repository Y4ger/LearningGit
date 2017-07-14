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

    branch: shows all branches available
    merge: combines all changes of two (or more) branches so that their current commits are the same
      [git merge {Name Of Other Branch You Want To Combine With Head}]
