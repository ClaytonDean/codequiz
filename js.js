var seconds = 100;
var count = document.getElementById("counter");


function decreaseSeconds() {
    seconds -= 1;
    count.innerText = "Score " + seconds;

}

var Score = setInterval(decreaseSeconds, 1000);




function myFunction() {
   count = count + answer;
  } 
  


submit_btn.onclick = function() {
	var ch = document.getElementById('q1').checked;
    count = count + parseInt(ch.value);
    ch.
   alert("Here is your score: " + count);
   count = 0; // so we can start quiz over
};
