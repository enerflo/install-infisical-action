# Install the Infisical CLI on a runner

This is a simple action that can be used to install the [Infisical CLI](https://infisical.com/docs/cli/overview)
in a Github Actions runner.

There are multiple methods of installing depending on the context. The easiest method is to install
through NPM, but in cases where a project is not using Node.js or if the version of Node.js is too
old to correctly install the package, an operating system-specific method must be used.

## Inputs

- `method`: required, the installation method
- `version`: optional, the version of the CLI to install

The `method` input is required, but has a default value.

| Method | Description | Requirements |
| ------ | ----------- | ------------ |
| `npm` | Install through NPM | Node.js installed, version 18 or later |
| `ubuntu` | Install through `apt` on Ubuntu Linux | Ubuntu-based runner |

## Usage

For a Node.js project:

```yaml
- name: Install Infisical CLI
  uses: enerflo/install-infisical-action
```

Install a specific version of the Infisical CLI:

```yaml
- name: Install Infisical CLI
  uses: enerflo/install-infisical-action
  with:
    version: "0.34.2"
```

Install in an Ubuntu runner:

```yaml
- name: Install Infisical CLI
  uses: enerflo/install-infisical-action
  with:
    method: ubuntu
```
