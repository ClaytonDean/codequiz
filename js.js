

var seconds = 100;
var score = 0;
var count = document.getElementById("counter");
var submit_btn = document.getElementById("submit");

function decreaseSeconds() {
		if (seconds > 0){
    	seconds -= 1;
    	count.innerText = "Time left: " + seconds + " secs";
    }else{
    	//End Quiz
    }
}

function getQValue(form, name) {
    var val;
    var radios = form.elements[name];
    
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            break; 
        }
    }
    return val;
}

var Score = setInterval(decreaseSeconds, 1000);


submit_btn.onclick = function() {
	
	//alert("Here is your score: " + score);
    var q1 = getQValue(document.getElementById('q1'),'q1');
    var q2 = getQValue(document.getElementById('q2'),'q2');
    var q3= getQValue(document.getElementById('q3'),'q3');
    q1 = parseInt(q1);
    q2 = parseInt(q2);
    q3 = parseInt(q3);
    
    total = q1 + q2 + q3;
    alert("Score is: " + total + " out of 3");
	score = 0; // so we can start quiz over
};

