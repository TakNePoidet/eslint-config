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
  "extends": [
    "taknepoidet"
  ]
}
```
## Использование в TypeScript

1. Следуйте инструкциям для JavaScript.
2. Расширить код `taknepoidet/typescript`.

```json
{
  "extends": [
    "taknepoidet/typescript"
  ]
}
```

## Использование в Vue.js

1. Следуйте инструкциям для JavaScript.
2. Расширить код `taknepoidet/vue`.

```json
{
  "extends": [
    "taknepoidet/vue"
  ]
}
```
## Пример команды
```bash
eslint ./src
```
