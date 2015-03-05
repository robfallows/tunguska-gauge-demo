Template.gauge1.rendered = function() {
  var self = this;
  self.gauge = new TunguskaGauge({
    id: self.data.id,
    theme: self.data.style,
    range: {
      colorBand: [{
        startAt: 0.95,
        endAt: 0.99,
        from: 0,
        to: 75,
        color: '#090'
      }, {
        startAt: 0.90,
        endAt: 0.99,
        from: 75,
        to: 90,
        color: '#e80'
      }, {
        startAt: 0.85,
        endAt: 0.99,
        from: 90,
        to: 100,
        color: '#d00'
      }]
    },
    outer: {
      lineWidth: 1,
      color: 'black',
      alpha: 0.5,
      radius: 1
    }
  });
  Meteor.subscribe('current-gauge-data', function() {
    self.autorun(function() {
      var ti = Template.instance();
      ti.gauge.set(GaugeData.findOne({_id:'test'}).value);
    });
  });
}
