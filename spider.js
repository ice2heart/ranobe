const MongoClient    = require('mongodb').MongoClient;
const db             = require('./config/db');
const request = require('request');
const cheerio = require('cheerio');
const queue = require('async').queue;

var q = queue(function(task, callback) {
  //get type
  //exec
  callback();
}, 5);

MongoClient.connect(db.url, (err, database) => {
  //get task liste
  //push to queue
});
