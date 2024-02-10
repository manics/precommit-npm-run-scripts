# Pre-commit hook to run NPM scripts

A pre-commit hook to run NPM scripts from your `package.json` file.

The primary use for this is in JavaScript projects where you want your CI system to link into the [pre-commit.ci](https://pre-commit.ci/) service to automatically format your code and push to your pull request branch.

It will:

- Run `npm install` to install your repository's dependencies.
- Run `npm run <script>` for each script in the `args` section of your `.pre-commit-config.yaml` file.

It is not intended for use outside of `pre-commit.ci` as it re-installs all dependencies on every run, and also requires Python to be installed locally.
Instead just run `npm run ...` directly.

## Example `.pre-commit-config.yaml`

```yaml
repos:
  - repo: https://github.com/manics/precommit-npm-run-scripts
    rev: main # Replace with a tag or commit hash
    hooks:
      - id: npm-run-scripts
        args: [format]
```

This will run `npm install` followed by `npm run format`.
