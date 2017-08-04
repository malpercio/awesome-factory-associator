const Promise = require('bluebird');
const retry = require('bluebird-retry');
const lodash = require('lodash');
const sails = require('sails');
const sailsrc = require('./sailsrc');

before((done) => {
  if(process.env.DBUSER){
    sailsrc.connections.awesomeConnection.user = process.env.DBUSER;
  }
  if(process.env.PSSWD){
    sailsrc.connections.awesomeConnection.password = process.env.PSSWD;
  }
  if(process.env.DB){
    sailsrc.connections.awesomeConnection.database = process.env.DB;
  }
  sails.lift(sailsrc, done);
});

after(sails.lower);
