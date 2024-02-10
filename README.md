# Pre-commit hook to run NPM scripts

A pre-commit hook to run NPM scripts from your `package.json` file.

**WARNING: This does not work with the [pre-commit.ci](https://pre-commit.ci/) service to as network access is only available during installation, it is blocked when running.**

It will:

- Run `npm install` to install your repository's dependencies.
- Run `npm run <script>` for each script in the `args` section of your `.pre-commit-config.yaml` file.

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
