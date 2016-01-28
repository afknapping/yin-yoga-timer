TODOS and Ideas™

- view state via model
- state to localstorage
- post-css generated styleguide
- tests
- do it in angular
- do it in react


- show reload button only in fullscreen

- jade --obj data.json



if(window.navigator.standalone == true) {
  // My app is installed and therefore fullscreen
}

selector:-webkit-full-screen {
  display: block; // displays the element only when in fullscreen
}

selector:-moz-full-screen {
  display: block; // hides the element when not in fullscreen mode
}

selector:-ms-fullscreen {
  display: block;
}

selector {
  display: none; // hides the element when not in fullscreen mode
}