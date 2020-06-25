function buttoncancelworker(){
	var r = confirm("Apakah anda yakin?");
	if(r == true){
		alert("Freelancer ditolak!");
		location.replace("sraboetclienthomepage.html");
		return true;
	}
	else{
		return false;
	}
}