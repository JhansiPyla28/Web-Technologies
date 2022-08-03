var colorChange=document.getElementById("colorChanger");
var colors=["pink","white","cyan","violet","indigo","blue","green","yellow","orange","red"];
var count=0;

function changeColor()
{
	if(count>=colors.length)
	{
		count=0;
	}
	colorChange.style.background=colors[count];
	count++;
}
setInterval(changeColor,250);