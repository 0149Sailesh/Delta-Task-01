function Stopwatch(elem) {
  var time = 0;
  var offset;
  var interval;

  function update() {
    if (this.isOn) {
      time += delta();
    }
    
    elem.textContent = timeFormatter(time);
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;

    offset = now;

    return timePassed;
  }

  function timeFormatter(time) {
    time = new Date(time);

    var minutes;
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if(time<=59900)
    {
      minutes=0;
    }
    else if(time>59990&&time<=119990)
    {
      minutes=1;
    }
    else if(time>119990&&time<=179990)
    {
      minutes=2;
    }
    else
    {
      minutes=3;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }

    return '0' + minutes + ' : ' + seconds + ' . ' + milliseconds;
  }

  this.start = function() {
    interval = setInterval(update.bind(this), 10);
    offset = Date.now();
    this.isOn = true;
  };

  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
    
  };

  this.reset = function() {
    time = 0;
    update();
  };

  this.isOn = false;

this.ret= function(){
  return time;
}
}