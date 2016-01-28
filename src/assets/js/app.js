// controlling event bubbling hehe
$('.a-front-container-or-element').click(function(event){ event.stopPropagation(); });

// prevent dragging. http://stackoverflow.com/questions/17068026/prevent-ios-safari-from-moving-web-page-window-so-drag-event-can-happen/23965074#23965074
$(window).bind( 'touchmove', function(e) { e.preventDefault(); } );


// tell user about updates. via https://gregsramblings.com/2012/05/28/html5-application-cache-how-to/
if (window.applicationCache) {
applicationCache.addEventListener('updateready', function() {
  if (confirm('An update is available. Install?')) {
    window.location.reload(); } });}


var conf = {};

conf.poses = 10;
conf.slack = 3;
conf.posesPlusSlack = conf.poses + conf.slack;
conf.timeBudgetInMin = 1;
conf.timeBudgetInSec = conf["timeBudgetInMin"] * 60;

conf.UINodePoses = $('#posesCountDisplay');
conf.UINodeSlack = $('#SlackCountDisplay');
conf.UINodeTimeBudget = $('#TimeBudgetDisplay');

// update DOM with configuration data
function updateDom() {
  conf.UINodePoses.text( conf.poses );
  conf.UINodeSlack.text( conf.slack );
  conf.UINodeTimeBudget.text( conf.timeBudgetInMin );
}

// useless here but good to know: convert string to integer :D
// but I never want to read the DOM, just update it from the model
// conf.UINodePoses = parseInt($('#posesCountDisplay').text(), 10);






// TODO: DOESN'T WORK
// crement (model, delta, cb)

// crement ("poses", 1);
// crement ("poses", -1);
// crement ("slack", 1);
// crement ("slack", -1);
// crement ("timeBudgetInMin", 1);
// crement ("timeBudgetInMin", -1);


function crement (model, delta) {
  console.log( model );
  console.log( conf[model] );
  conf[model] = conf[model] + delta;
  conf.timeBudgetInSec = conf["timeBudgetInMin"] * 60;
  console.log( conf[model] );
  updateDom();
}



// http://stackoverflow.com/questions/11330917/how-to-play-a-mp3-using-javascript/11331165#11331165
var sound1 = new Audio('assets/bucket/2166_3310-lq.mp3');
// http://www.freesound.org/people/suburban%20grilla/sounds/2166/
var sound2 = new Audio('assets/bucket/68261_649468-lq.mp3');


var intervallId;

function playSound (selection) {
  // console.log(selection);
  selection.play();
};

function start () {
  intervallId = timer (conf.timeBudgetInSec, conf.posesPlusSlack);
  console.log(intervallId);
};

function stop () {
  // http://stackoverflow.com/questions/2901108/how-do-i-clear-this-setinterval/2901155#2901155
  window.clearInterval(intervallId);
  console.log("stopped " + intervallId);
};




// http://www.sitepoint.com/creating-accurate-timers-in-javascript/
function timer (timeBudgetInSec, posesPlusSlack)   {
  var increment = timeBudgetInSec / posesPlusSlack;
  console.log("increment: " + increment);
  var cycle = 0;

  var start = new Date().getTime();
  var elapsed = '0.0';

  return window.setInterval(function() {

    var time = new Date().getTime() - start;

    elapsed = Math.floor(time / 100) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

    if ( (elapsed / increment) > cycle) {
      cycle = cycle + 1;
      playSound(sound2);
      $('.timer-status').text(" elapsed: "+ elapsed +" cycle: "+ cycle);
    };
  }, 100);
};



updateDom();