# Lohand

[![Build Status](https://travis-ci.org/alexsomeoddpilot/lohand.svg?branch=master)](https://travis-ci.org/alexsomeoddpilot/lohand)
[![Dependency Status](https://david-dm.org/alexsomeoddpilot/lohand.svg)](https://david-dm.org/alexsomeoddpilot/lohand)
[![devDependency Status](https://david-dm.org/alexsomeoddpilot/lohand/dev-status.svg)](https://david-dm.org/alexsomeoddpilot/lohand#info=devDependencies)

A library for wrapping many Lodash functions into Handlebars.

## Installation

```bash
npm install lohand
```

## Basic Setup

```bash
var handlebars = require('handlebars');
require('lohand')
  .register(handlebars);
```

### Individual Helpers

```bash
var lohand = require('lohand');

lohand.helpers; // a dictionary of helpers { name: fn() {} }
```

## Testing

```bash
npm test
```

## Helpers

### camelCase

```handlebars
{{camelCase 'Foo Bar'}} // Foo Bar
```

### capitalize

```handlebars
{{capitalize 'foo bar'}} // Foo bar
```

### deburr

```handlebars
{{deburr 'déjà vu'}} // deja vu
```

### encodeURIComponent

```handlebars
{{encodeURIComponent 'Foo Bar'}} // Foo%20Bar
```

### endsWith

```handlebars
{{#endsWith 'abc' 'c'}}
  // string starts with 'c'
{{else}}
  // string does not start with 'c'
{{/endsWith}}
```

### eq

```handlebars
{{#eq val1 val2}}
  // ===
{{else}}
  // !==
{{/eq}}
```

### iter

```handlebars
{{#iter items}}
    {{i}} // index
    {{iPlus1}} // index + 1
{{/iter}}
```

### kebabCase

```handlebars
{{kebabCase 'Foo Bar'}} // 'foo-bar'
```

### pad

```handlebars
{{pad 'abc' 8}} // '  abc   '
{{pad 'abc' 8 '_-'}} // _-abc_-_
```

### padLeft

```handlebars
{{padLeft 'abc' 6}} // '   abc'
{{padLeft 'abc' 6 '_-'}} // _-_abc
```

### padRight

```handlebars
{{padRight 'abc' 6}} // 'abc   '
{{padRight 'abc' 6 '_-'}} // abc_-_
```

### parseInt

```handlebars
{{parseInt '08'}} // 8
```

### possessive

```handlebars
{{possessive 'Susan'}} // Susan’s
{{possessive 'Chris'}} // Chris’
```

### repeat

```handlebars
{{repeat '*' 3}} // ***
```

### snakeCase

```handlebars
{{snakeCase 'Foo Bar'}} // foo_bar
```

### startCase

```handlebars
{{startCase '--foo-bar'}} // Foo Bar
```

### startsWith

```handlebars
{{#startsWith 'abc' 'a'}}
  // if 'abc' starts with 'a'
{{else}}
  // if 'abc' does not start with 'a'
{{/startsWith}}
```

### trim

```handlebars
{{trim '  abc  '}} // abc
{{trim '-_-abc-_-' '_-'}} // abc
```

### trimLeft

```handlebars
{{trimLeft '  abc  '}} // 'abc  '
{{trimLeft '-_-abc-_-' '_-'}} // abc-_-
```

### trimRight

```handlebars
{{trimRight '  abc  '}} // '  abc'
{{trimRight '-_-abc-_-' '_-'}} // -_-abc
```

### trunc

```handlebars
{{trunc 'hi-diddly-ho there, neighborino'}} // hi-diddly-ho there, neighbo...
{{trunc 'hi-diddly-ho there, neighborino' 24}} // hi-diddly-ho there, n...
```

### unescape

```handlebars
{{unescape 'fred, barney, &amp; pebbles'}} // fred, barney, & pebbles
```

### urlify

```handlebars
{{urlify 'Hey Hey'}} // hey-hey
```
