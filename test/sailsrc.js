module.exports = {
  "environment": "test",
  "hooks": {
    "grunt": false,
    "orm": false,
    "pubsub": false,
    "blueprints": false,
    "sequelize": require('sails-hook-fireline')
  },
  "log":{
    "level": "silent"
  },
 "models" : {
  "connection": "awesomeConnection",
  "migrate": "drop"
 },
 "connections" : {
    "awesomeConnection": {
      "user": "root",
      "password": "",
      "database": "awesome_tests",
      "dialect": "mysql"
    }
 }
}
