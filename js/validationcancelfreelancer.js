function buttoncancelfreelancer(){
	var r = confirm("Apakah anda yakin ingin membatalkan pekerjaaan?");
	if(r == true){
		alert("Pekerjaan dibatalkan!");
		location.replace("sraboetfreelancerhomepage.html");
		return true;
	}
	else{
		return false;
	}
}
