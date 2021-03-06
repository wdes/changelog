'use strict';

const getDefaultChangesBlock = function (conventionMode) {
    switch (conventionMode) {
        case 'allchanges':
            return [
                {
                    commits: [],
                    name: '',
                    messageRegex: [/^.*$/i],
                },
            ];
        case 'williamdes':
            return [
                {
                    commits: [],
                    name: 'Added',
                    messageRegex: [/^added:/i, /^add:/i, /^test:/i],
                },
                {
                    commits: [],
                    name: 'Changed',
                    messageRegex: [/^changed:/i, /^update:/i, /^updated:/i, /^moved:/i],
                },
                {
                    commits: [],
                    name: 'Deprecated',
                    messageRegex: [/^deprecated:/i],
                },
                {
                    commits: [],
                    name: 'Removed',
                    messageRegex: [/^removed:/i, /^remove:/i],
                },
                {
                    commits: [],
                    name: 'Fixed',
                    messageRegex: [/^fixed:/i, /^fix:/i, /^fixes:/i],
                },
                {
                    commits: [],
                    name: 'Security',
                    messageRegex: [/^security:/i],
                },
                {
                    commits: [],
                    name: 'Improvements',
                    messageRegex: [/^improve:/i, /^improved:/i, /^style:/i],
                },
            ];
        case 'conventional+legacy':
            return [
                {
                    commits: [],
                    name: 'Added',
                    messageRegex: [/^added:/i, /^add:/i, /^test:/i],
                },
                {
                    commits: [],
                    name: 'Changed',
                    messageRegex: [/^changed:/i, /^update:/i, /^updated:/i, /^moved:/i],
                },
                {
                    commits: [],
                    name: 'Deprecated',
                    messageRegex: [/^deprecated:/i],
                },
                {
                    commits: [],
                    name: 'Removed',
                    messageRegex: [/^removed:/i, /^remove:/i],
                },
                {
                    commits: [],
                    name: 'Fixed',
                    messageRegex: [/^fixed:/i, /^fix:/i, /^fixes:/i],
                },
                {
                    commits: [],
                    name: 'Security',
                    messageRegex: [/^security:/i],
                },
                {
                    commits: [],
                    name: 'Improvements',
                    messageRegex: [/^improve:/i, /^improved:/i, /^style:/i],
                },
                {
                    commits: [],
                    name: 'BREAKING CHANGES',
                    messageRegex: [/^BREAKING CHANGE:/i],
                },
                {
                    commits: [],
                    name: 'Features',
                    messageRegex: [/^feat:/i],
                },
                {
                    commits: [],
                    name: 'Fixes',
                    messageRegex: [/^fix:/i],
                },
                {
                    commits: [],
                    name: 'Performance',
                    messageRegex: [/^perf:/i],
                },
                {
                    commits: [],
                    name: 'Testing',
                    messageRegex: [/^test:/i],
                },
                {
                    commits: [],
                    name: 'Documentation',
                    messageRegex: [/^docs:/i],
                },
                {
                    commits: [],
                    name: 'Removed',
                    messageRegex: [/^revert:/i],
                },
                {
                    commits: [],
                    name: 'Others',
                    messageRegex: [/^refactor:/i, /^build:/i, /^style:/i, /^ci:/i, /^chore:/i],
                },
            ];
        case 'conventional':
            return [
                {
                    commits: [],
                    name: 'BREAKING CHANGES',
                    messageRegex: [/^BREAKING CHANGE:/i],
                },
                {
                    commits: [],
                    name: 'Features',
                    messageRegex: [/^feat:/i],
                },
                {
                    commits: [],
                    name: 'Fixes',
                    messageRegex: [/^fix:/i],
                },
                {
                    commits: [],
                    name: 'Performance',
                    messageRegex: [/^perf:/i],
                },
                {
                    commits: [],
                    name: 'Testing',
                    messageRegex: [/^test:/i],
                },
                {
                    commits: [],
                    name: 'Documentation',
                    messageRegex: [/^docs:/i],
                },
                {
                    commits: [],
                    name: 'Removed',
                    messageRegex: [/^revert:/i],
                },
                {
                    commits: [],
                    name: 'Others',
                    messageRegex: [/^refactor:/i, /^build:/i, /^style:/i, /^ci:/i, /^chore:/i],
                },
            ];
        default:
            return [];
    }
};

module.exports = {
    getDefaultChangesBlock: getDefaultChangesBlock,
};
