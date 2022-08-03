var emailAdress=prompt("Enter your email:");
function validateEmail(emailAdress)
{
	var p=/^[a-z,A-Z,0-9][a-z,A-Z,0-9,_,.]*@[a-z]{3,7}\.[a-z]{2,3}(\.[a-z]{2,3})*$/;
	if(p.test(emailAdress))
	{
		document.write("Valid email");
	}
	else
	{
		// document.write("Invalid email");
		var emailAdress=prompt("Please Enter valid email:");
		validateEmail(emailAdress);
	}
}
validateEmail(emailAdress);