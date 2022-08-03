alert("Welcome to luck game by Jhansi Pyla")
alert("Rules:You can enter any number between 10 and 100...If the random number from server is matched with your number your luck count will be incresed")
var lc=0;
var n=0;
function Start() {
	while(true){
		num1=Math.floor(Math.random()*90)+10;
		console.log(num1);
		var num2=prompt("Enter a num:");
		if(num2===null){
			break;
		}
		if(num1==num2){
			lc++;
		}
		n++;
	}
}
function Bored() {
	document.write("U have guessed "+lc+" out of "+n);
}

// document.getElementById("Bored").onclick=function() {Fun()};
// document.getElementById("Start").onclick=function() {Main()};
