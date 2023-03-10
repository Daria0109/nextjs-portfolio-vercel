module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'eslint-config-airbnb',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'next/core-web-vitals'
	],
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	ignorePatterns: ['**/.next/**/*.*'],
	plugins: ['react', 'react-hooks'],
	rules: {
		'react/jsx-key': [2, { warnOnDuplicates: true }],
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/jsx-props-no-spreading': 1,
		'react/react-in-jsx-scope': 0,
		'react/function-component-definition': [2, {
			namedComponents: ['arrow-function', 'function-declaration'],
			unnamedComponents: 'arrow-function'
		}],
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 2,
		'react/jsx-no-target-blank': 2,
		'react/jsx-closing-tag-location': 2,
		'react/jsx-curly-spacing': [1, {
			when: 'never',
			attributes: true,
			children: true
		}],
		'react/jsx-equals-spacing': [1, 'never'],
		'react/jsx-fragments': [1, 'syntax'],
		'react/display-name': 0,
		'react/no-children-prop': 2,
		'react/no-unescaped-entities': 0,
		'react/no-unknown-property': 2,
		'react/button-has-type': 2,
		'react/jsx-no-constructed-context-values': 2,
		'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
		'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
		'react/jsx-tag-spacing': [1, {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never'
		}],
		'react/jsx-wrap-multilines': [1, {
			declaration: 'ignore',
			assignment: 'ignore',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'ignore'
		}],
		'react/jsx-closing-bracket-location': 1,
		'react/no-multi-comp': 1,
		'react/no-unstable-nested-components': [2, { allowAsProps: true }],
		'react/require-default-props': 0,
		'react/self-closing-comp': [2, {
			component: true,
			html: true
		}],
		'react/style-prop-object': 2,
		'import/no-unresolved': 0,
		'import/prefer-default-export': 0,
		'import/extensions': [1, 'never', { lazy: 'always' }],
		'import/no-extraneous-dependencies': 0,
		indent: [1, 'tab', { SwitchCase: 1 }],
		quotes: [2, 'single'],
		semi: [2, 'always'],
		'linebreak-style': [1, 'unix'],
		'max-len': [1, {
			code: 120,
			ignoreComments: true,
			ignoreTrailingComments: true
		}],
		'no-debugger': 2,
		'no-console': [1, { allow: ['warn', 'error'] }],
		'no-self-compare': 2,
		'eol-last': [1, 'always'],
		'no-empty-pattern': 0,
		'no-extra-boolean-cast': 2,
		'no-extra-semi': 2,
		'no-case-declarations': 2,
		'no-underscore-dangle': 0,
		'no-unsafe-optional-chaining': 2,
		'no-unused-vars': [1, { argsIgnorePattern: '_', varsIgnorePattern: '_' }],
		'no-duplicate-imports': 2,
		'no-promise-executor-return': 2,
		'no-tabs': [2, { allowIndentationTabs: true }],
		'no-template-curly-in-string': 2,
		'no-shadow': 0,
		'block-scoped-var': 2,
		curly: 1,
		'default-case': 2,
		'default-case-last': 2,
		'default-param-last': 2,
		'no-confusing-arrow': [2, {
			allowParens: true,
			onlyOneSimpleParam: true
		}],
		'no-mixed-spaces-and-tabs': 1,
		'no-unneeded-ternary': 2,
		'no-var': 2,
		'prefer-const': 2,
		'require-await': 2,
		yoda: [2, 'never'],
		'arrow-parens': 2,
		'arrow-spacing': [1, { before: true, after: true }],
		'brace-style': 1,
		'comma-dangle': [1, {
			arrays: 'never',
			objects: 'never',
			imports: 'never',
			exports: 'never',
			functions: 'never'
		}],
		'comma-spacing': 1,
		'computed-property-spacing': 1,
		'func-call-spacing': 1,
		'function-call-argument-newline': [1, 'consistent'],
		'function-paren-newline': [1, 'multiline-arguments'],
		'generator-star-spacing': [1, { before: false, after: true }],
		'jsx-quotes': [1, 'prefer-double'],
		'no-multi-spaces': 1,
		'no-multiple-empty-lines': [1, { max: 1 }],
		'object-curly-newline': [1, { multiline: true }],
		'object-curly-spacing': [1, 'always'],
		'padded-blocks': [1, {
			blocks: 'never',
			classes: 'always',
			switches: 'never'
		}]
	}
};
