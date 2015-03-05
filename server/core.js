Meteor.publish('current-gauge-data', function() {
  var init = false;
  var self = this;
  Meteor.setInterval(function() {
    var ran = Math.floor(Math.random() * 101);
    if (init) {
      self.changed('gauge-data', 'test', {value:ran});
    } else {
      self.added('gauge-data', 'test', {value:ran});
    }
    self.ready();
    init = true;
  }, 1000);
});
