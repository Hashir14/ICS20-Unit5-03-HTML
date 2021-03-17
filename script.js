document.getElementById('submit').addEventListener('click', results)
/* This line grabs the button element with id:submit from the HTML file and the event listener prevents any function from being applied until the button has been clicked. */

function results () {
  alert(document.getElementById('box').value)
}
/* This line in between the curly brackets is the function that will be applied to the event listener named "results". */
