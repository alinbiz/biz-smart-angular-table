# Smart table for angular
[![Build Status](https://travis-ci.org/alinbiz/biz-smart-angular-table.svg?branch=master)](https://travis-ci.org/alinbiz/biz-smart-angular-table)
[![codecov](https://codecov.io/gh/alinbiz/biz-smart-angular-table/branch/master/graph/badge.svg)](https://codecov.io/gh/alinbiz/biz-smart-angular-table)
[![npm version](https://badge.fury.io/js/biz-smart-angular-table.svg)](http://badge.fury.io/js/biz-smart-angular-table)
[![devDependency Status](https://david-dm.org/alinbiz/biz-smart-angular-table/dev-status.svg)](https://david-dm.org/alinbiz/biz-smart-angular-table?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/alinbiz/biz-smart-angular-table.svg)](https://github.com/alinbiz/biz-smart-angular-table/issues)
[![GitHub stars](https://img.shields.io/github/stars/alinbiz/biz-smart-angular-table.svg)](https://github.com/alinbiz/biz-smart-angular-table/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/alinbiz/biz-smart-angular-table/master/LICENSE)

## Demo
https://alinbiz.github.io/biz-smart-angular-table/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

This is a smart table for sample angular usage

## Installation

Install through npm:
```
npm install --save biz-smart-angular-table
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { BizSmartAngularTableModule } from 'biz-smart-angular-table';

@NgModule({
  imports: [
    BizSmartAngularTableModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/alinbiz/biz-smart-angular-table/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/biz-smart-angular-table/bundles/biz-smart-angular-table.umd.js"></script>
<script>
    // everything is exported bizSmartAngularTable namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://alinbiz.github.io/biz-smart-angular-table/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
