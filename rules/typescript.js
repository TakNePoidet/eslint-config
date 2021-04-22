const path = require('path');

const root = path.join(__dirname, '..');
module.exports = {
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				sourceType: 'module',
				project: ['./tsconfig.json']
			},
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			extends: [
				'airbnb-typescript/base',
				'plugin:@typescript-eslint/recommended',
				'prettier',
				`${root}/rules/common.js`
			],
			rules: {
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/return-await': 'off'
			},
			settings: {
				'import/resolver': {
					node: {
						extensions: ['.ts']
					}
				}
			}
		}
	]
};
