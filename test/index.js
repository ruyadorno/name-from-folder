const nff = require('../')
const t = require('tap')
t.equal(nff('/a/b/c/@foo/bar'), '@foo/bar')
t.equal(nff('/a/b/c/foo/bar'), 'bar')
t.equal(nff(null), false)
