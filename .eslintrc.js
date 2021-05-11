module.exports = {
    'parser': '@typescript-eslint/parser',
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'plugins': [ '@typescript-eslint' ],
    'env': {
        'browser': true,
        'node': true,
        'mocha': true,
        'es6': true,
        'jest': true,
    },
    'globals': {
        'expect': true,
        'sinon': true,
        '__DEV__': true,
    },
    'rules': {
        'no-var': 2,
        'prefer-const': 2,
        'no-shadow': 2,
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-unused-vars': [
            2,
            {
                'vars': 'local',
                'args': 'after-used',
            },
        ],
        'no-use-before-define': 2,
        'no-cond-assign': [
            2,
            'always',
        ],
        'no-console': 2,
        'no-debugger': 1,
        'no-alert': 1,
        'no-constant-condition': 1,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 0,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-obj-calls': 2,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'block-scoped-var': 2,
        'consistent-return': 2,
        'curly': [
            2,
            'all',
        ],
        'default-case': 2,
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-caller': 2,
        'no-else-return': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implied-eval': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-with': 2,
        'radix': 2,
        'vars-on-top': 2,
        'yoda': 2,
        'multiline-ternary': [
            'warn',
            'never',
        ],
        'comma-dangle': [
            'warn',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'ignore',
            },
        ],
        'indent': [
            2,
            4,
            {
                'SwitchCase': 1,
            },
        ],
        'brace-style': [
            'error',
            'allman',
            {
                'allowSingleLine': true,
            },
        ],
        'quotes': [
            2,
            'single',
            'avoid-escape',
        ],
        'camelcase': [
            1,
            {
                'properties': 'never',
            },
        ],
        'comma-spacing': [
            2,
            {
                'before': false,
                'after': true,
            },
        ],
        'comma-style': [
            2,
            'last',
        ],
        'eol-last': 2,
        'func-names': 1,
        'key-spacing': [
            2,
            {
                'beforeColon': false,
                'afterColon': true,
            },
        ],
        'new-cap': [
            0,
            {
                'newIsCap': true,
            },
        ],
        'no-multiple-empty-lines': [
            2,
            {
                'max': 1,
                'maxBOF': 1,
                'maxEOF': 1,
            },
        ],
        'no-multi-spaces': 1,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-trailing-spaces': 2,
        'no-extra-parens': [
            2,
            'functions',
        ],
        'no-underscore-dangle': 0,
        'one-var': [
            2,
            'never',
        ],
        'padded-blocks': [
            2,
            'never',
        ],
        'semi-spacing': [
            2,
            {
                'before': false,
                'after': true,
            },
        ],
        'space-before-blocks': 2,
        'space-before-function-paren': [
            2,
            'never',
        ],
        'space-infix-ops': 2,
        'spaced-comment': [
            2,
            'always',
            {
                'exceptions': [
                    '-',
                    '+',
                ],
                'markers': [
                    '=',
                    '!',
                ],
            },
        ],
        'jsx-quotes': [
            2,
            'prefer-double',
        ],
        'object-curly-newline': [
            'error', {
                'ObjectExpression': {
                    'multiline': false,
                    'minProperties': 1,
                },
                'ObjectPattern': {
                    'multiline': false,
                    'minProperties': 2,
                },
                'ImportDeclaration': {
                    'multiline': false,
                    'minProperties': 2,
                },
                'ExportDeclaration': {
                    'multiline': false,
                    'minProperties': 2,
                },
            },
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'object-property-newline': [
            'error', {
                'allowAllPropertiesOnSameLine': false,
            },
        ],
        'array-bracket-newline': [
            'error', {
                'multiline': true,
                'minItems': 2,
            },
        ],
        'array-bracket-spacing': [
            'error',
            'always',
        ],
        'array-element-newline': [
            'error', 'consistent',
        ],
        'padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'return',
            },
        ],
        'no-magic-numbers': [
            'warn',
            {
                'ignore': [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100,
                ],
            },
        ],
        'no-confusing-arrow': 'warn',
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/ban-ts-comment': 1,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        'dot-notation': 'off',
        'semi': 'warn',
        '@typescript-eslint/no-empty-interface': 'off',
        'max-len': [
            'warn',
            {
                'comments': 140,
                'code': 120,
                'ignorePattern': 'import ',
            },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
    },
    'overrides': [
        {
            'files': [ '**/*.js' ],
            'rules': {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
            },
        },
        {
            'files': [ '**/*.test.ts*' ],
            'rules': {
                '@typescript-eslint/ban-ts-comment': 'off',
            },
        },
    ],
};