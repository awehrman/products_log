var mongoose = require('mongoose');
var Log = require('../../models/log');

module.exports.addLog = function(req, res) {
  console.log(req.body);
  var log = new Log(req.body);
    log.save(function(err) {
      if (err) {
          res.send(err);
      }
      res.json({log: log});
    });
};



module.exports.getAllLogs = function(req, res) {
  Log.find(function(err, logs) {
    if (err) {
      res.send(err);
    }
    res.json({logs: logs});
  });
};

module.exports.getSingleLog = function(req, res, id) {
  Log.findById(id, function(err, log) {
    if (err) {
      res.send(err);
    }
    res.json({log: log});
  });
};

module.exports.updateLog = function(req, res, id) {
  Log.findByIdAndUpdate(id, {$set: req.body.log}, function(err, log) {
      if (err) {
          res.send(err);
      }
      res.json({log: log});
  });
};

module.exports.deleteLog = function(req, res, id) {
  Log.findByIdAndRemove(id, function(err) {
    if (err) {
      res.send(err);
    }
    res.sendStatus(200);
  })
};