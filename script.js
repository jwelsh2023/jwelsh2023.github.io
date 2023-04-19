function sendInfo(){
	resultDiv.innerHTML = "";
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function submitQuiz(){
	let sectionResult = document.getElementById("result");
	let animal = document.getElementById("txt-btn").value;
	let number = parseInt(document.getElementById("ban-submit").value);


	if(btn.toLowerCase() == "h1,h2,h3"){
		true;
	}
	else{
		false;
	}


	//show result
	sectionResult.classList.remove("hidden");
	sectionResult.innerHTML = "<h3>Quiz Results</h3>";
	sectionResult.innerHTML = "<p>"+ txt-btn + " "+ "</p>";
}