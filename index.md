---
layout: index
---
# Lohand

[![npm version](https://badge.fury.io/js/lohand.svg)](http://badge.fury.io/js/lohand)
[![Build Status](https://travis-ci.org/alexsomeoddpilot/lohand.svg?branch=master)](https://travis-ci.org/alexsomeoddpilot/lohand)
[![Dependency Status](https://david-dm.org/alexsomeoddpilot/lohand.svg)](https://david-dm.org/alexsomeoddpilot/lohand)
[![devDependency Status](https://david-dm.org/alexsomeoddpilot/lohand/dev-status.svg)](https://david-dm.org/alexsomeoddpilot/lohand#info=devDependencies)

A library for wrapping many Lodash functions into Handlebars.

## Installation

{% highlight bash %}{% raw %}
npm install lohand
{% endraw %}{% endhighlight %}

## Basic Setup

{% highlight bash %}{% raw %}
var handlebars = require('handlebars');
require('lohand')
  .registerAll(handlebars);
{% endraw %}{% endhighlight %}

### Individual Helpers

{% highlight bash %}{% raw %}
var lohand = require('lohand');

lohand.helpers; // a dictionary of helpers { name: fn() {} }
{% endraw %}{% endhighlight %}

## Testing

{% highlight bash %}{% raw %}
npm test
{% endraw %}{% endhighlight %}

## Helpers

### Iterators

#### every

{% highlight handlebars %}{% raw %}
{{#every 3 [1, 2, 3]}}
  <!-- index % 3 === 0 -->
{{else}}
  <!-- otherwise -->
{{/every}}
{% endraw %}{% endhighlight %}

#### iter

{% highlight handlebars %}{% raw %}
{{#iter items}}
    {{i}} // index
    {{iPlus1}} // index + 1
{{/iter}}
{% endraw %}{% endhighlight %}

### Comparisons

#### endsWith

{% highlight handlebars %}{% raw %}
{{#endsWith 'abc' 'c'}}
  <!-- string starts with 'c' -->
{{else}}
  <!-- string does not start with 'c' -->
{{/endsWith}}
{% endraw %}{% endhighlight %}

#### eq

{% highlight handlebars %}{% raw %}
{{#eq val1 val2}}
  <!-- === -->
{{else}}
  <!-- !== -->
{{/eq}}
{% endraw %}{% endhighlight %}

#### greaterThan

{% highlight handlebars %}{% raw %}
{{#greaterThan left right}}
  <!-- left > right -->
{{else}}
  <!-- left <= right -->
{{/greaterThan}}
{% endraw %}{% endhighlight %}

#### lessThan

{% highlight handlebars %}{% raw %}
{{#lessThan left right}}
  // left < right
{{else}}
  // left >= right
{{/lessThan}}
{% endraw %}{% endhighlight %}

#### startsWith

{% highlight handlebars %}{% raw %}
{{#startsWith 'abc' 'a'}}
  // if 'abc' starts with 'a'
{{else}}
  // if 'abc' does not start with 'a'
{{/startsWith}}
{% endraw %}{% endhighlight %}

### Strings

#### camelCase

{% highlight handlebars %}{% raw %}
{{camelCase 'Foo Bar'}}
→ fooBar
{% endraw %}{% endhighlight %}

#### capitalize

{% highlight handlebars %}{% raw %}
{{capitalize 'foo bar'}}
→ Foo Bar
{% endraw %}{% endhighlight %}

#### deburr

{% highlight handlebars %}{% raw %}
{{deburr 'déjà vu'}}
→ deja vu
{% endraw %}{% endhighlight %}

#### encodeURIComponent

{% highlight handlebars %}{% raw %}
{{encodeURIComponent 'Foo Bar'}}
→ Foo%20Bar
{% endraw %}{% endhighlight %}

#### kebabCase

{% highlight handlebars %}{% raw %}
{{kebabCase 'Foo Bar'}} // 'foo-bar'
{% endraw %}{% endhighlight %}

#### pad

{% highlight handlebars %}{% raw %}
{{pad 'abc' 8}} // '  abc   '
{{pad 'abc' 8 '_-'}} // _-abc_-_
{% endraw %}{% endhighlight %}

#### padLeft

{% highlight handlebars %}{% raw %}
{{padLeft 'abc' 6}} // '   abc'
{{padLeft 'abc' 6 '_-'}} // _-_abc
{% endraw %}{% endhighlight %}

#### padRight

{% highlight handlebars %}{% raw %}
{{padRight 'abc' 6}} // 'abc   '
{{padRight 'abc' 6 '_-'}} // abc_-_
{% endraw %}{% endhighlight %}

#### parseInt

{% highlight handlebars %}{% raw %}
{{parseInt '08'}} // 8
{% endraw %}{% endhighlight %}

#### possessive

{% highlight handlebars %}{% raw %}
{{possessive 'Susan'}} // Susan’s
{{possessive 'Chris'}} // Chris’
{% endraw %}{% endhighlight %}

#### repeat

{% highlight handlebars %}{% raw %}
{{repeat '*' 3}} // ***
{% endraw %}{% endhighlight %}

#### snakeCase

{% highlight handlebars %}{% raw %}
{{snakeCase 'Foo Bar'}} // foo_bar
{% endraw %}{% endhighlight %}

#### startCase

{% highlight handlebars %}{% raw %}
{{startCase '--foo-bar'}} // Foo Bar
{% endraw %}{% endhighlight %}

#### trim

{% highlight handlebars %}{% raw %}
{{trim '  abc  '}} // abc
{{trim '-_-abc-_-' '_-'}} // abc
{% endraw %}{% endhighlight %}

#### trimLeft

{% highlight handlebars %}{% raw %}
{{trimLeft '  abc  '}} // 'abc  '
{{trimLeft '-_-abc-_-' '_-'}} // abc-_-
{% endraw %}{% endhighlight %}

#### trimRight

{% highlight handlebars %}{% raw %}
{{trimRight '  abc  '}} // '  abc'
{{trimRight '-_-abc-_-' '_-'}} // -_-abc
{% endraw %}{% endhighlight %}

#### trunc

{% highlight handlebars %}{% raw %}
{{trunc 'hi-diddly-ho there, neighborino'}} // hi-diddly-ho there, neighbo...
{{trunc 'hi-diddly-ho there, neighborino' 24}} // hi-diddly-ho there, n...
{% endraw %}{% endhighlight %}

#### unescape

{% highlight handlebars %}{% raw %}
{{unescape 'fred, barney, &amp; pebbles'}} // fred, barney, & pebbles
{% endraw %}{% endhighlight %}
