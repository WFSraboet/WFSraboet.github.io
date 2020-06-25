var err = document.getElementById('err_msg');

function validatelogin(){
	var username = document.getElementById('usernamelgn').value;
	var password = document.getElementById('passwordlgn').value;

	if(username == ""){
		err.innerHTML = "Nama harus diisi!"
	}

	else if(password == ""){
		err.innerHTML = "Password harus diisi!"
	}
	
	else {
		location.replace("chooserolesraboet.html");
	}
}