// controlling event bubbling hehe
$('.a-front-container-or-element').click(function(event){ event.stopPropagation(); });

// prevent dragging. http://stackoverflow.com/questions/17068026/prevent-ios-safari-from-moving-web-page-window-so-drag-event-can-happen/23965074#23965074
$(window).bind( 'touchmove', function(e) { e.preventDefault(); } );


// tell user about updates. via https://gregsramblings.com/2012/05/28/html5-application-cache-how-to/
if (window.applicationCache) {
applicationCache.addEventListener('updateready', function() {
  if (confirm('An update is available. Install?')) {
    window.location.reload(); } });}



var timeBudget = 3 * 60;
var posesPlusSlack = 28;

// init: pull values from dom
// on change: push to dom

// start: run timer


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
  intervallId = timer (timeBudget, posesPlusSlack);
  console.log(intervallId);
};

function stop () {
  window.clearInterval(intervallId);
  console.log("stopped " + intervallId);
};




// http://www.sitepoint.com/creating-accurate-timers-in-javascript/
function timer (timeBudget, posesPlusSlack)   {
  var increment = timeBudget / posesPlusSlack;
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
      // document.write(" elapsed: "+ elapsed +" cycle: "+ cycle + "<br/>");
    };
    // $('.stop').bind( window.clearInterval(intervallId) );
  }, 100);
};

