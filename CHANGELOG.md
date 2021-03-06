# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [v1.3.1]

### Fixed

- [4c225ac](https://github.com/wdes/changelog/commit/4c225ac1879ac8517cf7ac868d1e83fddd704142) fix: tag that contains '-'

### Others

- [2e64465](https://github.com/wdes/changelog/commit/2e64465f9a1f32bf08d6871c2881933107efd62f) chore: upgrade simple-git
- [0d19bb1](https://github.com/wdes/changelog/commit/0d19bb1bfef921796b17fea4237c869766f8f3de) chore: fix lint error

## [v1.3.0]

### Added

- [4756a32](https://github.com/wdes/changelog/commit/4756a32d9e55e4eb06e00855e5b4b42d584aa458) test: Add tests for an unknown convention
- [7445445](https://github.com/wdes/changelog/commit/744544544890872e409b027480dce6182555e94e) test: add quick tests for conventional+legacy and allchanges conventions
- [b6b3c7f](https://github.com/wdes/changelog/commit/b6b3c7ffc76ec63836fb1f23f6827492918d4142) test: fix tests after convention split

### Changed

- [960f9ac](https://github.com/wdes/changelog/commit/960f9acfc2744d2273b6cfabb5037b6ce41cca85) updated: simple-git from 1.120.0 to 1.124.0 and mocha from 6.1.4 to 6.2.0
- [b241d92](https://github.com/wdes/changelog/commit/b241d921b1bae65a359b06fbe2e6160fbd8f9a65) updated: simple-git from 1.116.0 to 1.120.0
- [7832fea](https://github.com/wdes/changelog/commit/7832fea02027800dd2889567d72c0f1cec9f75bf) updated: package.json and bump some package versions
- [d787600](https://github.com/wdes/changelog/commit/d7876006bd5bb95cbcd01387b0b073e3321a3e1f) updated: CHANGELOG.md

### Fixed

- [745ec03](https://github.com/wdes/changelog/commit/745ec03d6de50cf06107fc08ce6bd836286ffa26) fix: use stderr for errors

### Features

- [110ec8b](https://github.com/wdes/changelog/commit/110ec8b97038bf08cf99debd87975871ba827929) feat: add command for "release before tag"
- [ee2559a](https://github.com/wdes/changelog/commit/ee2559aea47b8a40fe52c40601342dfbc45df3fd) feat: add --lastTagName support
- [e6b7f61](https://github.com/wdes/changelog/commit/e6b7f61d5021d53d9fcd16fb935006658cf61f20) feat: #4 - adjust conventions
- [bc4b4c2](https://github.com/wdes/changelog/commit/bc4b4c2696902550ee71ce98dce149184b3b3eda) feat: #4 - support allchanges convention
- [052ee5a](https://github.com/wdes/changelog/commit/052ee5a4be7e339237f3d9e4f5fe9562296b35c7) feat: #4 - support conventional commit spec
- [6ee1799](https://github.com/wdes/changelog/commit/6ee1799e216a528a2439b3b7bfd325406b40e9b2) feat: Simplify the changelog generation process
- [2ffb8bd](https://github.com/wdes/changelog/commit/2ffb8bd6e194d495569f0f02c3d97fb54245117f) feat: add count commits function and test
- [e5c6ee2](https://github.com/wdes/changelog/commit/e5c6ee295cdb5d691a689e059d4de0b32b3b9c74) feat: Add disabled test for twig render error
- [4347938](https://github.com/wdes/changelog/commit/43479387d08e75b7277d8b67c0ac6d4c9c9abf9a) feat: Add tests for repo is not a git dir
- [fd08f91](https://github.com/wdes/changelog/commit/fd08f91653d7771b1c2406d908f786ed96f34314) feat: Check if file exists

### Documentation

- [e54c8c2](https://github.com/wdes/changelog/commit/e54c8c278d3f056bb3be23b85851e246f05b542e) docs: update README.md

### Others

- [a2f90cb](https://github.com/wdes/changelog/commit/a2f90cb7649338bf0c65c501e008ae615d290a34) ci: remove travis ci file
- [ee0009c](https://github.com/wdes/changelog/commit/ee0009cf98205c60505e8c036c77e5466505d6c0) ci: Move to GitHub actions
- [fdb008b](https://github.com/wdes/changelog/commit/fdb008bb539b6289bb2c46682e9d689303049c21) chore: dependencies

## [v1.2.0]

### Changed

- [ab2eecc](https://github.com/wdes/changelog/commit/ab2eecc8935c5ab2dbbf8011a3b2b811bd92f6d4) updated: dependencies
- [93fc814](https://github.com/wdes/changelog/commit/93fc81482365d126eb16c361220fe8e09c60acf0) updated: nyc from ^13.3.0 to ^14.0.0 (#2)
- [e9bfe6d](https://github.com/wdes/changelog/commit/e9bfe6d9dc5e706e860a061423ea881b9404325d) updated: changelog

### Removed

- [36f2054](https://github.com/wdes/changelog/commit/36f20542ec2ee61680e5a619cdc3c692eb3f81c4) removed: package-lock.json

## [v1.1.0]

### Added

- [104341e](https://github.com/wdes/changelog/commit/104341e2e27c41c935635f5eee9a2337233aefc0) added: CHANGELOG.md
- [be784af](https://github.com/wdes/changelog/commit/be784afa520879a15514fdac72c1e776c11d4755) added: nbrCommits (number of commits)
- [6190f69](https://github.com/wdes/changelog/commit/6190f69737da63a9061f473263ebe4d404cc6b70) added: changelog command
- [617def1](https://github.com/wdes/changelog/commit/617def19f4052449c404130a5a51e5bd265e9f2b) added: prettier config
- [1e3e144](https://github.com/wdes/changelog/commit/1e3e144c2a985bc80be8d937abac2ac36610abb3) added: synk and dependabot badges to README.md
- [536ceb2](https://github.com/wdes/changelog/commit/536ceb2f3c856faab8d23064cd0c59abdfd79172) added: dependabot config
- [9d42cb7](https://github.com/wdes/changelog/commit/9d42cb7a9dfa25339aea7f8898375eae712f5166) add: Example in README.md
- [362e3e8](https://github.com/wdes/changelog/commit/362e3e8498be85be017a8a02c55b65e19bd35402) add: travis ci and jshintignore

### Changed

- [b32b88e](https://github.com/wdes/changelog/commit/b32b88e2b3f30f0fdc9c854a58b422fe5e20a864) updated: package version to 1.1.0
- [23fc04f](https://github.com/wdes/changelog/commit/23fc04f4c69be39e338ed307b8339733c3cd3eef) updated: changelog for 1.0.1
- [eb5ed9e](https://github.com/wdes/changelog/commit/eb5ed9e7d24b6bebc98b80da27ee869c1700d072) updated: changelog
- [db9ebfa](https://github.com/wdes/changelog/commit/db9ebfa1df6cb7b931bfb30f315fc2d446d1be93) update: jshint
- [c071427](https://github.com/wdes/changelog/commit/c071427b0c545cee6125d24e42d639543f2474d3) update: snack-cli from 1.1.0 to 2.0.0
- [a877e2f](https://github.com/wdes/changelog/commit/a877e2f3edbbfcce19380afde1dbe817e56c5f63) updated: package-lock.json

### Fixed

- [9f7c555](https://github.com/wdes/changelog/commit/9f7c555a02a971ed2d28bbc57b9ea4698923ed4c) fixed: changelog
- [aa31da7](https://github.com/wdes/changelog/commit/aa31da7c86785c0362188f1912f00975d73a9b00) fixed: tests
- [701cba3](https://github.com/wdes/changelog/commit/701cba3452dfdc1b3fcdd12c79406588d9158f06) fixed: empty blank lines
- [c490880](https://github.com/wdes/changelog/commit/c490880a019d2a4b3969df4bce808a0287276e07) fixed: README.md
- [1a47f01](https://github.com/wdes/changelog/commit/1a47f01a11d366dc53d0c99a71416adb5fd0dbda) fixed: .npmignore
- [4ec00b3](https://github.com/wdes/changelog/commit/4ec00b33569f734bf059736fb128a15cf25c68a6) fix: CHANGELOG links

### Improvements

- [1290706](https://github.com/wdes/changelog/commit/129070659f6c2709831899097c0cf10a0522112c) style: prettier

## [v1.0.0]

[v1.3.1]: https://github.com/wdes/changelog/compare/v1.3.0...v1.3.1
[v1.3.0]: https://github.com/wdes/changelog/compare/v1.2.0...v1.3.0
[v1.2.0]: https://github.com/wdes/changelog/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/wdes/changelog/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/wdes/changelog/compare/c295e8c3244b857b9d22fdd83a80d2f31cc6139b...v1.0.0

