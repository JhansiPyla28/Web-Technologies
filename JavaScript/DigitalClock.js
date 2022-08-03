// alert("HIIII");
function MyTime(){
	var d=new Date();
	var hh=d.getHours();
	var mm=d.getMinutes();
	var ss=d.getSeconds();
	var session="AM";
	if(hh==0)
	{
		hh=12;
	}
	if(hh>12)
	{
		hh=hh-12;
		session="PM"
	}
	hh=(hh<10)?"0"+hh:hh;
	mm=(mm<10)?"0"+mm:mm;
	ss=(ss<10)?"0"+ss:ss;
	var time=hh+":"+mm+":"+ss+" "+session;
	// document.write(hh+":"+mm+":"+ss+" "+session)
	document.getElementsByTagName("h3")[0].innerText=time;
	setTimeout(MyTime,1000);
}
MyTime();