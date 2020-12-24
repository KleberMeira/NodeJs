var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://dw:dwdev@172.38.63.210:5432/dw')

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })