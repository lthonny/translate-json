Translate a JSON Object

Fast, unopinionated, minimalist web interpreter json for [node](http://nodejs.org).

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```js
const translateFormJson = require("translate-form-json");
const translate = translateFormJson.init(test, "en", "google");
```

## Installation

```console
$ npm install translate-form-json
```

## Examples

To view the examples, clone the TranslateJson repo and install the dependencies:

```console
$ git clone https://github.com/lthonny/translate-json.git --depth 1
$ cd translate-json
$ npm install
```

Then run whichever example you want:

```console
$ node
```

## Contributing

[![Linux Build][github-actions-ci-image]][github-actions-ci-url]
[![Windows Build][appveyor-image]][appveyor-url]
[![Test Coverage][coveralls-image]][coveralls-url]

The Express.js project welcomes all constructive contributions. Contributions take many forms,
from code for bug fixes and enhancements, to additions and fixes to documentation, additional
tests, triaging incoming pull requests and issues, and more!

### Running Tests

To run the test suite, first install the dependencies, then run `npm test`:

```console
$ npm install
$ npm test
```

## License

[MIT](LICENSE)
