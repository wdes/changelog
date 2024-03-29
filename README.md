# A NodeJS changelog generator that uses twig templates

[![Actions Status](https://github.com/wdes/changelog/workflows/Run%20tests/badge.svg)](https://github.com/wdes/changelog/actions)
[![Actions Status](https://github.com/wdes/changelog/workflows/Lint%20and%20analyse%20files/badge.svg)](https://github.com/wdes/changelog/actions)
[![codecov](https://codecov.io/gh/wdes/changelog/branch/master/graph/badge.svg)](https://codecov.io/gh/wdes/changelog)
[![npm version](https://badge.fury.io/js/changelog-generator-twig.svg)](https://badge.fury.io/js/changelog-generator-twig)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/wdes/changelog.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/wdes/changelog/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/wdes/changelog.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/wdes/changelog/context:javascript)
[![Known Vulnerabilities](https://snyk.io/test/github/wdes/changelog/badge.svg)](https://snyk.io/test/github/wdes/changelog)


## Generate a changelog

### Commands

### Install

```
npm install --save changelog-generator-twig
```

### Additional infos

You can use `[changelog skip]` (non case sensitive) in the commit message and the commit will not be part of the changelog

#### Help

`
changelog-generator-twig --help
`

```
Usage: changelog-generator-twig [options]

A changelog generator using twig templates

Options:
      --owner <owner>                 The repo owner
      --repo <repo>                   The repo
      --repoDir <repoDir>             The repo dir
      --lastTagName <lastTagName>     The last tag name (default: HEAD)
      --headName <headName>           The head name (default: Unreleased)
      --convention <conventionName>   The convention name (williamdes, conventional, conventional+legacy, allchanges) (default: conventional)
      --baseCommit <commmitHash>      The base commit hash
      --template <templatePath>       The twig template path (default: /mnt/Dev/@wdes/changelog/src/CHANGELOG.twig)
      --version                       display version information and exit
      --help                          display this help and exit

```

#### Basic example

`
./node_modules/.bin/changelog-generator-twig --owner wdes --repo changelog --repoDir ./ --baseCommit c295e8c3244b857b9d22fdd83a80d2f31cc6139b
`

Or

`
changelog-generator-twig --owner williamdes --repo mariadb-mysql-kbs --repoDir /mnt/Dev/@williamdes/mariadb-mysql-kbs/ --baseCommit 4282724e1e04d6b27d3c0744e1a37a50be740237
`

See changelog example here: https://github.com/williamdes/mariadb-mysql-kbs/blob/ef766fd9991e4fd1e80bb7b14abb2a352ecd4689/CHANGELOG.md

#### Use a custom template (twig)

`
changelog-generator-twig --owner williamdes --repo mariadb-mysql-kbs --repoDir /mnt/Dev/@williamdes/mariadb-mysql-kbs/ --baseCommit 4282724e1e04d6b27d3c0744e1a37a50be740237 --template ./CHANGELOG_template.twig
`

#### Release before tag
This will set links to next version and rename the current version
```
NEXT_VERSION=1.4
--headName $NEXT_VERSION --lastTagName $NEXT_VERSION
```

##### Data passed to twig template

```
args: [ additional args passed to script ],
links: [
    {
        name: "v1.0.0",
        start: "185050ec502f20b3280df46485605e99563d1e87",
        end: "HEAD"
    },...
],
versions: [
    {
        nbrCommits: <numberOfCommits>,
        name: "v1.0.0",
        changes: [{
            name: 'Added',
            messageRegex: [/^added:\s/gi, /^add:/gi, /^test:/gi],
            commits: [
                {
                    hash: 'd2c9361',
                    longHash: 'd2c9361467b0e67e4c7a1bbfa092b342363450cc',
                    msg: 'Added some files',
                },
            ],
        },...]
    },...
],
owner: "--owner argument",
repo: "--repo argument"
```
