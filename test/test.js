var _Error = require('../_error'),
    assert = require('assert'),
    specify = require('specify');

specify('message', function (assert) {
  var e = new _Error('the message');
  assert.ok(e, 'Object created.');
  assert.strictEqual(e.message, 'the message', 'Message is correct');
});

specify('object', function (assert) {
  var e = new _Error('the message', {a:1, b:2, c:{d:4}});
  assert.ok(e.a && e.b && e.c, 'Keys exist.');
  assert.equal(e.a, 1, 'Key values are correct.');
  assert.equal(e.b, 2, 'Key values are correct.');
  assert.equal(e.c.d, 4, 'Key values are correct.');
});

specify.run(process.argv.slice(2));
