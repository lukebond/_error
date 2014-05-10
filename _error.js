function _Error(msg, opts) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.message = msg;
  if (opts && typeof opts === 'object') {
    Object.keys(opts).forEach(function (k) {
      this[k] = opts[k];
    }.bind(this));
  }
};

_Error.prototype.__proto__ = Error.prototype;

module.exports = _Error;