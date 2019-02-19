# Contributing Guide

### Table of contents
 - [Getting Started](#Getting-Started)
 - [Git and Commit Style](#Git-and-Commit-Style)
 - [Continuous Integration](#Continuous-Integration)

# Getting Started

A repository is a set of packages containing various linter configurations.

Each configuration is divided into a set of rules. Each rule has a link to the configuration description in order to make it easier to override the rules in the basic configurations.

Also for each set of rules is written STYLEGUIDE which explains the choice of a particular rule.

When updating package versions, rules from [semver](https://semver.org/) are used.

# Git and Commit Style

[GitHubFlow](https://guides.github.com/introduction/flow/) was chosen as the approach to branching. This type of branch is great for projects where deploy is performed very often.

Using a single commit structure allows you to build reports for the period between the publication of packages. Because of this, we use the rules from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) that allow us to auto-generate CHANGELOGS and automatically release versions of new packages.

# Continuous Integration

**TravisCI** was chosen as CI, because of the possibility of constructing extension matrices.

The extension matrix allows you to build on different versions of the platforms and environment variables for which packages are built.

Releases are delivered to npm, only on lts versions of node.js
