var fn;
var ln;
var mn;
var cn;
var mnum;

function FullName()
{
	var fn1=document.getElementById("first").value;
	var ln1=document.getElementById("last").value;
	document.getElementById("full").value=fn1+ln1;
}
setInterval(FullName,1000);

function Condition1(){
	fn=document.getElementById("first").value;
	ln=document.getElementById("last").value;
	mn=document.getElementById("middle").value;
	
	var p=/^[a-z,A-Z]{3,}$/;
	if(mn==''){
		if(p.test(fn)&&p.test(ln))
		{
			return true;
		}
		else
		{
			document.getElementById("middle").style.borderColor="red";
			document.getElementById("first").style.borderColor="red";
			document.getElementById("last").style.borderColor="red";
			document.getElementById("mid").style.visibility="visible";
			return false;
		}
	}
	else if(mn!==""){
		if(p.test(fn)&&p.test(ln)&&p.test(mn))
		{
			return true;
		}
		else
		{
			document.getElementById("middle").style.borderColor="red";
			document.getElementById("first").style.borderColor="red";
			document.getElementById("last").style.borderColor="red";
			document.getElementById("mid").style.visibility="visible";
			return false;
		}
	}

}
function Mobile()
{
	cn=document.getElementById("country").value;
	mnum=document.getElementById("mobile").value;
	var p1=/^[6,7,8,9][0-9]{9}$/;
	var p2=/^[0-9]{3}\-[0-9]{4}\-[0-9]{3}$/;
	if(cn=="India")
	{
		if(p1.test(mnum))
		{
			return true;
		}
		else
		{
			document.getElementById("mobile").style.borderColor="red";
			document.getElementById("mb").style.visibility="visible";
			return false;
		}
	}
	else if(cn=="USA")
	{
		if(p2.test(mnum))
		{
			return true;
		}
		else
		{
			document.getElementById("mobile").style.borderColor="red";
			document.getElementById("mb").style.visibility="visible";
			return false;
		}
	}
}
function Condition2()
{
	var re1=/[a-z]/;
	var re2=/[A-Z]/;
	var re3=/[0-9]/;
	var re4=/@/;
	var pass=document.getElementById("password").value;
	// console.log(pass);
	// console.log(pass.length);
	if((pass.length<6)||!(re1.test(pass))||!(re2.test(pass))||!(re3.test(pass))||!(re4.test(pass)))
	{
		document.getElementById("psd").style.visibility="visible";
		document.getElementById("password").style.borderColor="red";
		return false;
	}
	else
	{
		return true;
	}
}
function showPassword()
{
	var s=document.getElementById("show").checked;
	if(s)
	{
		document.getElementById("password").type="text";
	}
	else
	{
		document.getElementById("password").type="password";
	}
}

function hobbies(){
	list=["c1","c2","c3"];
	var count=0;
	var i=0;
	while(i<3){
		var j=document.getElementById(list[i]).checked;
		console.log(j);
		if(j){
			count++;
		}
		i++;
	}

	if(count>1){
		// alert("if");
		return true;
	}
	else{
		// alert("else");
		return false;
	}
}

function validateEmail()
{
	var email=document.getElementById("email").value;
	var pat=/^[a-z,A-Z,0-9][a-z,A-Z,0-9,_,.]*@[a-z]{3,7}\.[a-z]{2,3}(\.[a-z]{2,3})*$/;
	if(pat.test(email))
	{
		return true;
	}
	else
	{
		document.getElementById("email").style.borderColor="red";
		return false;
	}
}
function age()
{
	var minutes=1000*60;
	var hours=minutes*60;
	var days= hours*24;
	var years=days*365;
	var birthday=Date.parse(document.getElementById("birth").value);
	var dateNow=new Date();
	var YearsOld=Math.round((dateNow-birthday)/years);
	document.getElementById("displayAge").innerHTML=("You are "+YearsOld+" years old");
}
function agree()
{
	var ag=document.getElementById("rule").checked;
	if (ag){
		return true;
	}
	else{ 
		alert("You have to agree to rules of our company...!");
		return false;
	}
}
$("#rst").click(function(){
	alert("All your data will reset")
})
function display()
{
	var fname=document.getElementById("first").value;
	document.getElementById("p").innerHTML="FirstName is : "+fname;
	var lname=document.getElementById("last").value;
	document.getElementById("p1").innerHTML="LastName is : "+lname;
	var mname=document.getElementById("middle").value;
	document.getElementById("p2").innerHTML="MiddleName is : "+mname;
	var mobnum=document.getElementById("mobile").value;
	document.getElementById("p3").innerHTML="MobileNumber is : "+mobnum;
}
function bg(){
	document.getElementById("mobile").style.backgroundColor="pink";
}
var d=document.getElementById("first");
var d1=document.getElementById("last");
var d2=document.getElementById("middle");
var d3=document.getElementById("mobile")
d.addEventListener('keyup',display);
d1.addEventListener('keyup',display);
d2.addEventListener('keyup',display);
d3.addEventListener('keyup',display);
d3.addEventListener('focus',bg);

function sizeCheck() {
	var ele=document.getElementById("photo").files[0];
	if(ele.size>50000){
		alert("file size is big");
	}
}
function sizeCheck2() {
	var ele=document.getElementById("photo").files[0];
	if(ele.size<=50000 && ele.size>0){
		return true;
	}
	else{
		return false;
	}
	return false;
}

function validate()
{
	//e.preventDefault();
	var res1=Condition1();
	var res2=Mobile();
	var res3=Condition2();
	var res4=validateEmail();
	var res5=agree();
	var res6=hobbies();
	// var res7=sizeCheck2();
	var res=res1&&res2&&res3&&res4&&res5&&res6;
	return res;

}




















