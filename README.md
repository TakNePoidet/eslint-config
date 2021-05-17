# ESLint конфигурация

## Установка

Добавьте пакет в свои dev-dependencies, используя npm или yarn

```bash
$ npm i -D eslint-config-taknepoidet eslint

$ yarn add -D eslint-config-taknepoidet eslint
```

## Использование в JavaScript

Добавьте файл `.eslintrc` в корень вашего проекта, если у вас его нет.

Затем добавьте туда раздел `extends`:

```json
{
	"extends": ["taknepoidet"]
}
```

## Использование в TypeScript

1. Следуйте инструкциям для JavaScript.
2. Расширить код `taknepoidet/rules/typescript`.

```json
{
	"extends": ["taknepoidet/rules/typescript"]
}
```

## Использование в Vue.js

1. Следуйте инструкциям для JavaScript.
2. Расширить код `taknepoidet/rules/vue`.

```json
{
	"extends": ["taknepoidet/rules/vue"]
}
```

## Пример команды

```bash
eslint ./src
```

## История изменений

Смотреть весь список [изменений](docs/CHANGELOG.md)

		"@vue/cli-service": "^4.5.12",
		"@vue/eslint-config-airbnb": "^5.3.0",
		"@vue/eslint-config-typescript": "^7.0.0",
		"eslint": "^6.0.0",
		"eslint-plugin-prettier-vue": "^3.0.0",

		"eslint-plugin-vue": "^7.9.0",
		"eslint-plugin-vue-libs": "^4.0.0",

		"vue-eslint-parser": "^7.6.0"
