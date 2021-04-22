const path = require('path');

const root = path.join(__dirname, '..');

module.exports = {
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			extends: [
				'plugin:vue/base',
				'plugin:vue/vue3-recommended',
				'plugin:vue/vue3-essential',
				'@vue/typescript',
				'prettier',
				`${root}/rules/common.js`,
				`${root}/rules/typescript.js`
			],
			rules: {
				'vue/no-deprecated-props-default-this': 'off',
				'vue/no-multiple-template-root': 'off',
				'vue/max-attributes-per-line': [
					'error',
					{
						singleline: 3,
						multiline: {
							max: 1,
							allowFirstLine: true
						}
					}
				],
				'vue/require-component-is': 'off',
				'vue/component-name-in-template-casing': 'off',
				'vue/html-indent': [
					'error',
					'tab',
					{
						attribute: 1,
						closeBracket: 0,
						baseIndent: 1,
						alignAttributesVertically: true,
						ignores: ['VAttribute']
					}
				],

				'vue/html-closing-bracket-newline': [
					'error',
					{
						singleline: 'never',
						multiline: 'always'
					}
				],
				'vue/html-self-closing': [
					'error',
					{
						html: {
							void: 'always',
							normal: 'always',
							component: 'always'
						},
						svg: 'never',
						math: 'always'
					}
				]
			}
		}
	]
};
