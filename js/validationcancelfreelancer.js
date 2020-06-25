function buttoncancelfreelancer(){
	var r = confirm("Apakah anda yakin?");
	if(r == true){
		alert("Pekerjaan dibatalkan!");
		location.replace("sraboetfreelancerhomepage.html");
		return true;
	}
	else{
		return false;
	}
}