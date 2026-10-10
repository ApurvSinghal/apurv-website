# Git Workflow Rules

## STRICT RULE: Never Push Directly to Default Branches
- You are **strictly prohibited** from running `git commit` or `git push` directly on the `main` or `master` branches.
- Whenever you are asked to commit, push code, or manage version control, you MUST:
  1. Check the current branch using `git branch --show-current`.
  2. If the current branch is `main` or `master`, you MUST create and switch to a new branch using `git checkout -b <type>/<description>` (e.g., `feature/update-ui` or `chore/cleanup`).
  3. Stage, commit, and push the new branch to the remote origin.
  4. Ensure you use `--set-upstream origin <branch>` if it is a new branch.
  5. Prompt the user to open a Pull Request.
- **NO EXCEPTIONS.** Bypassing this rule is considered a critical failure in workflow compliance.
