function displayFizzBuzzNumbers(){
	// Getting the numbers from the form
	var firstWord = document.getElementById("firstword").value;
	var secondWord = document.getElementById("secondword").value;
	var bothWords = firstWord + " " + secondWord;
	
	var fizzDemo = document.getElementById("fizzbuzz");
	var newText = "";
	
	 
    for(i = 1; i < 101; i++){
		if(i % 3 === 0 && i % 5 === 0){
			newText += i  + ". " + bothWords + " <br>";
		} else if(i % 5 === 0) {
			newText += i  + ". " + secondWord + " <br>";
		} else if(i % 3 === 0) {
			newText += i  + ". " + firstWord + " <br>";		
		} else {
			newText += i  + ".<br>";
		}
	}
	fizzDemo.innerHTML = newText;
}// End of function