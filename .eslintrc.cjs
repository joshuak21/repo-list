module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'next/core-web-vitals',
		'plugin:import/warnings',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'no-var': 2,                     // http://eslint.org/docs/rules/no-var
		'prefer-const': 2,               // http://eslint.org/docs/rules/prefer-const

		/**
		* Variables
		*/
		'no-shadow': 2,                  // http://eslint.org/docs/rules/no-shadow
		'no-shadow-restricted-names': 2, // http://eslint.org/docs/rules/no-shadow-restricted-names

		// do not use this on typescript project
		// 'no-undef': 2,                   // http://eslint.org/docs/rules/no-undef

		// 'no-unused-vars': [1, {          // http://eslint.org/docs/rules/no-unused-vars
		// 	'vars': 'local',
		// 	'args': 'after-used',
		// }],
		'no-use-before-define': 2,       // http://eslint.org/docs/rules/no-use-before-define

		/**
		* Possible errors
		*/
		'no-unused-expressions': [1, { 'allowShortCircuit': true }],
		'no-cond-assign': [2, 'always'], // http://eslint.org/docs/rules/no-cond-assign
		'no-console': 0,                 // http://eslint.org/docs/rules/no-console
		'no-debugger': 1,                // http://eslint.org/docs/rules/no-debugger
		// 'no-alert': 1,                   // http://eslint.org/docs/rules/no-alert
		'no-constant-condition': 1,      // http://eslint.org/docs/rules/no-constant-condition
		'no-dupe-keys': 2,               // http://eslint.org/docs/rules/no-dupe-keys
		'no-duplicate-case': 2,          // http://eslint.org/docs/rules/no-duplicate-case
		'no-empty': 2,                   // http://eslint.org/docs/rules/no-empty
		'no-ex-assign': 2,               // http://eslint.org/docs/rules/no-ex-assign
		'no-extra-boolean-cast': 0,      // http://eslint.org/docs/rules/no-extra-boolean-cast
		'no-extra-semi': 2,              // http://eslint.org/docs/rules/no-extra-semi
		'no-func-assign': 2,             // http://eslint.org/docs/rules/no-func-assign
		'no-inner-declarations': 2,      // http://eslint.org/docs/rules/no-inner-declarations
		'no-invalid-regexp': 2,          // http://eslint.org/docs/rules/no-invalid-regexp
		'no-irregular-whitespace': 2,    // http://eslint.org/docs/rules/no-irregular-whitespace
		'no-obj-calls': 2,               // http://eslint.org/docs/rules/no-obj-calls
		'no-sparse-arrays': 2,           // http://eslint.org/docs/rules/no-sparse-arrays
		'no-unreachable': 2,             // http://eslint.org/docs/rules/no-unreachable
		'use-isnan': 2,                  // http://eslint.org/docs/rules/use-isnan
		'block-scoped-var': 2,           // http://eslint.org/docs/rules/block-scoped-var
		'keyword-spacing': [0],

		/**
		* Best practices
		*/
		'consistent-return': 2,          // http://eslint.org/docs/rules/consistent-return
		'curly': [2, 'multi-line'],      // http://eslint.org/docs/rules/curly
		// 'default-case': 2,               // http://eslint.org/docs/rules/default-case
		// 'dot-notation': [2, {            // http://eslint.org/docs/rules/dot-notation
		// 	'allowKeywords': true
		// }],
		'eqeqeq': 2,                     // http://eslint.org/docs/rules/eqeqeq
		'guard-for-in': 0,               // http://eslint.org/docs/rules/guard-for-in
		'no-caller': 2,                  // http://eslint.org/docs/rules/no-caller
		// 'no-else-return': 2,             // http://eslint.org/docs/rules/no-else-return
		'no-eq-null': 2,                 // http://eslint.org/docs/rules/no-eq-null
		'no-eval': 2,                    // http://eslint.org/docs/rules/no-eval
		'no-extend-native': 2,           // http://eslint.org/docs/rules/no-extend-native
		'no-extra-bind': 2,              // http://eslint.org/docs/rules/no-extra-bind
		// 'no-fallthrough': 2,             // http://eslint.org/docs/rules/no-fallthrough
		'no-floating-decimal': 0,        // http://eslint.org/docs/rules/no-floating-decimal
		'no-implied-eval': 2,            // http://eslint.org/docs/rules/no-implied-eval
		'no-lone-blocks': 2,             // http://eslint.org/docs/rules/no-lone-blocks
		'no-loop-func': 2,               // http://eslint.org/docs/rules/no-loop-func
		'no-multi-str': 2,               // http://eslint.org/docs/rules/no-multi-str
		'no-native-reassign': 2,         // http://eslint.org/docs/rules/no-native-reassign
		'no-new': 2,                     // http://eslint.org/docs/rules/no-new
		'no-new-func': 2,                // http://eslint.org/docs/rules/no-new-func
		'no-new-wrappers': 2,            // http://eslint.org/docs/rules/no-new-wrappers
		'no-octal': 2,                   // http://eslint.org/docs/rules/no-octal
		'no-octal-escape': 2,            // http://eslint.org/docs/rules/no-octal-escape
		'no-param-reassign': 2,          // http://eslint.org/docs/rules/no-param-reassign
		'no-proto': 2,                   // http://eslint.org/docs/rules/no-proto
		'no-redeclare': 2,               // http://eslint.org/docs/rules/no-redeclare
		'no-return-assign': 2,           // http://eslint.org/docs/rules/no-return-assign
		'no-script-url': 2,              // http://eslint.org/docs/rules/no-script-url
		'no-self-compare': 2,            // http://eslint.org/docs/rules/no-self-compare
		'no-sequences': 2,               // http://eslint.org/docs/rules/no-sequences
		'no-throw-literal': 2,           // http://eslint.org/docs/rules/no-throw-literal
		'no-with': 2,                    // http://eslint.org/docs/rules/no-with
		'radix': 2,                      // http://eslint.org/docs/rules/radix
		'vars-on-top': 2,                // http://eslint.org/docs/rules/vars-on-top
		'wrap-iife': [2, 'any'],         // http://eslint.org/docs/rules/wrap-iife
		'yoda': 2,                       // http://eslint.org/docs/rules/yoda

		/**
		* Style
		*/
		'indent': [1, 'tab'],               // http://eslint.org/docs/rules/indent
		'brace-style': [
			2,               // http://eslint.org/docs/rules/brace-style
			'1tbs', {
				'allowSingleLine': true,
			},
		],
		'quotes': [
			2, 'single', 'avoid-escape',   // http://eslint.org/docs/rules/quotes
		],
		'camelcase': [2, {               // http://eslint.org/docs/rules/camelcase
			'properties': 'never',
		}],
		'comma-spacing': [2, {           // http://eslint.org/docs/rules/comma-spacing
			'before': false,
			'after': true,
		}],
		// 'comma-style': [2, 'first'],      // http://eslint.org/docs/rules/comma-style
		// 'eol-last': 2,                   // http://eslint.org/docs/rules/eol-last
		// 'func-names': 1,                 // http://eslint.org/docs/rules/func-names
		// 'key-spacing': [2, {             // http://eslint.org/docs/rules/key-spacing
		// 	'beforeColon': false,
		// 	'afterColon': true
		// }],
		'new-cap': [0, {                 // http://eslint.org/docs/rules/new-cap
			'newIsCap': true,
		}],
		'comma-dangle' : [1, {
			'arrays': 'always-multiline',
			'objects': 'always-multiline',
			'imports': 'always-multiline',
			'exports': 'always-multiline',
			'functions': 'ignore',
		}],
		'no-multiple-empty-lines': [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines
			'max': 2,
		}],
		'no-nested-ternary': 2,          // http://eslint.org/docs/rules/no-nested-ternary
		'no-new-object': 2,              // http://eslint.org/docs/rules/no-new-object
		'no-spaced-func': 2,             // http://eslint.org/docs/rules/no-spaced-func
		'no-trailing-spaces': [2, {
			'skipBlankLines': true,
		}],         // http://eslint.org/docs/rules/no-trailing-spaces
		'no-extra-parens': [2, 'functions'], // http://eslint.org/docs/rules/no-extra-parens
		'no-underscore-dangle': 0,       // http://eslint.org/docs/rules/no-underscore-dangle
		// 'one-var': [2, 'never'],         // http://eslint.org/docs/rules/one-var
		'padded-blocks': 0,	// http://eslint.org/docs/rules/padded-blocks
		// 'semi': [2, 'always'],           // http://eslint.org/docs/rules/semi
		'semi-spacing': [2, {            // http://eslint.org/docs/rules/semi-spacing
			'before': false,
			'after': true,
		}],
		// 'space-after-keywords': 2,       // http://eslint.org/docs/rules/space-after-keywords
		'space-before-blocks': 2,        // http://eslint.org/docs/rules/space-before-blocks
		'space-before-function-paren': [2, {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always', // valid: async () => {} | error: async() => {}
		}], // http://eslint.org/docs/rules/space-before-function-paren
		'space-infix-ops': 2,            // http://eslint.org/docs/rules/space-infix-ops
		// 'space-return-throw-case': 2,    // http://eslint.org/docs/rules/space-return-throw-case
		'spaced-comment': [2, 'always',  {// http://eslint.org/docs/rules/spaced-comment
			'exceptions': ['-', '+'],
			'markers': ['=', '!'],        // space here to support sprockets directives
		}],

		/**
		* React
		*/
		'jsx-quotes': [2, 'prefer-double'],
		'react/display-name': 0,
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'react/jsx-boolean-value': 1,
		'react/jsx-no-undef': 2,
		'react/jsx-sort-prop-types': 0,
		'react/jsx-sort-props': 0,
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/no-did-mount-set-state': [2],
		'react/no-did-update-set-state': 1,
		'react/no-multi-comp': 0,
		'react/no-unknown-property': 2,
		// 'react/prop-types': 1,
		// 'react/react-in-jsx-scope': 2,
		'react/self-closing-comp': 2,
		'react/sort-comp': 2,
		// 'react/wrap-multilines': 2,
		'react/jsx-no-bind': [0, {
			'ignoreRefs': true,
			'allowArrowFunctions': true,
			'allowBind': true,
		}],

		/**
		* IMPORT
		*/

		'import/named': 2,
		'import/namespace': 0,
		'import/default': 2,
		'import/export': 2,
		'import/no-cycle': 1,
		// 'import/no-unresolved': [2, {
		// 	// error because import a module from peer dependencies must be ignored
		// 	ignore: [
		// 		'lodash-es',
		// 		'react',
		// 		'react-dom',
		// 	],
		// }],
		'import/no-anonymous-default-export': 0,

		'@typescript-eslint/no-unused-vars': 2,
		'@typescript-eslint/no-explicit-any': 0,
		// '@typescript-eslint/prefer-optional-chain': 2,
	},

	// https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
	overrides: [{
		files: ['*.ts', '*.tsx'],
		rules: {
			'no-undef': 0,
		},
	}],

	settings: {
		'import/resolver': {
			'node': {
				'paths': ['./'],
			},
		},
	},
}
