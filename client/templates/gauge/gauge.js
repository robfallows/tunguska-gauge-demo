Template.gauge1.rendered = function() {
  var self = this;
  self.gauge = new TunguskaGauge({
    id: self.data.id,
    theme: self.data.style,
    range: {
      colorBand: [{
        startAt: 0.85,
        endAt: 0.99,
        from: 0,
        to: 100,
        color: '#ddd'
      },{
        startAt: 0.95,
        endAt: 0.99,
        from: 0,
        to: 75,
        color: '#0d0'
      },{
        startAt: 0.90,
        endAt: 0.99,
        from: 75,
        to: 90,
        color: '#ed0'
      }, {
        startAt: 0.85,
        endAt: 0.99,
        from: 90,
        to: 100,
        color: '#d00'
      }]
    },
    tick: {
      minor: {
        color: 'black',
      },
      major: {
        color: 'black',
        legend: {
          color: '#a9f',
          font: '12px sans-serif',
          radius: 0.72
        }
      }
    },
    digital: {
      color: '#a9f'
    },
  });
  Meteor.subscribe('current-gauge-data', function() {
    self.autorun(function() {
      var ti = Template.instance();
      ti.gauge.set(GaugeData.findOne({_id:'test'}).value);
    });
  });
}

Template.gauge2.rendered = function() {
  var self = this;
  self.gauge = new TunguskaGauge({
    id: self.data.id,
    theme: self.data.style
  });
  Meteor.setInterval(function() {
    self.gauge.set(Math.floor(Math.random()*101));
  }, 1123);
}

Template.gauge3.rendered = function() {
  var self = this;
  self.gauge = new TunguskaGauge({
    id: self.data.id,
    theme: self.data.style
  });
  Meteor.setInterval(function() {
    self.gauge.set(Math.floor(Math.random()*101));
  }, 1234);
}

Template.gauge4.rendered = function() {
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
}

Template.gauge5.rendered = function() {
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
}
