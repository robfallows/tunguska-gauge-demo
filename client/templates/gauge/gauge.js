Template.gauge1.onRendered(function() {
  var self = this;
  self.gauge = new TunguskaGauge({
    id: self.data.id,
    theme: self.data.style,
    range: {
      max: 80,
      sweep: 225,
      colorBand: [{
        startAt: 0.85,
        endAt: 0.99,
        from: 0,
        to: 80,
        color: '#ccc'
      },{
        startAt: 0.95,
        endAt: 0.99,
        from: 0,
        to: 60,
        color: '#0d0'
      },{
        startAt: 0.90,
        endAt: 0.99,
        from: 60,
        to: 72,
        color: '#cb0'
      }, {
        startAt: 0.85,
        endAt: 0.99,
        from: 72,
        to: 80,
        color: '#d00'
      }]
    },
    tick: {
      minor: {
        color: 'black',
        first: 0,
        last: 80
      },
      major: {
        color: 'black',
        legend: {
          color: '#a9f',
          font: '12px sans-serif',
          radius: 0.72
        },
        first: 0,
        last: 80
      }
    },
    digital: {
      color: '#a9f'
    },
  });
  self.subscribe('current-gauge-data', function() {
    self.autorun(function() {
      self.gauge.set(GaugeData.findOne({_id:'test'}).value);
    });
  });
});

Template.gauge2.onRendered(function() {
  var self = this;
  self.gauge = new TunguskaGauge({
    id: self.data.id,
    theme: self.data.style
  });
  Meteor.setInterval(function() {
    self.gauge.set(Math.floor(Math.random()*101));
  }, 1123);
});

Template.gauge3.onRendered(function() {
  var self = this;
  self.gauge = new TunguskaGauge({
    id: self.data.id,
    theme: self.data.style
  });
  Meteor.setInterval(function() {
    self.gauge.set(Math.floor(Math.random()*101));
  }, 1234);
});

Template.gauge4.onRendered(function() {
  var self = this;
  self.gauge = new TunguskaGauge({
    id: self.data.id,
    theme: self.data.style,
    radius: 0.9,
    range: {
      min: -10,
      max: 20,
      startAngle: -240,
      sweep: -120
    },
    outer: {
      lineWidth: 1,   
      color: 'white', 
      alpha: 1,     
      radius: 1       
    },
    tick: {
      minor: {
        lineWidth: 1,
        startAt: 0.93,
        endAt: 0.99,
        interval: 5,
        color: "white",
        alpha: 1
      },
      major: {
        lineWidth: 2,
        startAt: 0.9,
        endAt: 0.99,
        interval: 10,
        color: "white",
        legend: {
          color: "white",
          font: '12px sans-serif',
          radius: 0.72
        },
        alpha: 1
      }
    },
    pointer: [{
      points: [
        [0.9, 0],
        [1.05, 0.07],
        [1.05, -0.07]
      ],
      lineWidth: 1,
      color: "deepskyblue",
      alpha: 1,
      fillColor: "deepskyblue",
      shadowX: 1,
      shadowY: 1,
      shadowBlur: 1,
      shadowColor: "#000",
      dynamics: {
        duration: 100,
        easing: 'linear'
      }
    }, {
      points: [
        [0.9, 0],
        [1.05, 0.07],
        [1.05, -0.07]
      ],
      lineWidth: 1,
      color: "gold",
      alpha: 1,
      fillColor: "gold",
      shadowX: 1,
      shadowY: 1,
      shadowBlur: 1,
      shadowColor: "#000",
      dynamics: {
        duration: 100,
        easing: 'linear'
      }
    }, {
      points: [
        [-0.1, -0.05],
        [0.95, 0],
        [-0.1, 0.05]
      ],
      lineWidth: 1,
      color: "black",
      alpha: 1,
      fillColor: "red",
      shadowX: 1,
      shadowY: 1,
      shadowBlur: 2,
      shadowColor: "#000",
      dynamics: {
        duration: 100,
        easing: 'linear'
      }
    }]
  });
  var a = new Array(0, 0, 0);
  Meteor.setInterval(function() {
    a[2] = Math.random() * 30 - 10;
    a[0] = Math.min(a[0], a[2]);
    a[1] = Math.max(a[1], a[2]);
    self.gauge.set(a);
  }, 1345);
});

Template.gauge5.onRendered(function() {
  var self = this;
  self.gauge = new TunguskaGauge({
    id: self.data.id,
    theme: self.data.style,
    background: {
      image: 'images/clock-face.png',
      top: -70,
      left: -69
    },  
    digital: {
      color: 'dodgerblue'
    }
  });
  Meteor.setInterval(function() {
    var d = new Date();
    self.gauge.set(d);
  }, 1000);
});
