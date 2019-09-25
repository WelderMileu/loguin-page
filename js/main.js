(function(){
	const $ = (e) => {
		return document.querySelector(e);
	}

	$("#register").addEventListener("click",() => {
		$(".scroll").style.transform = "translate(100%, 0%)";
		$("#loguin").style.color = "black";
		$("#register").style.color = "white";
		$(".just").style.marginLeft = "-370px";
		$(".form").style.height = "500px";
		$(".float").style.left = "100px";
	});

	$("#loguin").addEventListener("click", ()=>{
		$(".scroll").style.transform = "translate(0%, 0%)";
		$("#loguin").style.color = "white";
		$("#register").style.color = "black";
		$(".just").style.marginLeft = "-10px";
		$(".form").style.height = "430px";
		$(".form").style.backgroundImage = "";
		$(".float").style.left = "500px";
	});

	// Validando formulario
	// Loguin
	$(".submit").addEventListener("click", (e) => {
		if ($("#user").value === "" || $("#sen").value === ""){
			e.preventDefault();
			$("#info").innerHTML = "Usuario ou senha vazios";
			$("#info").style.marginTop = "10px";
			
			if ($("#user").value === "") {
				$("#user").style.borderBottom = "1px solid red";
				$("#userl").style.color = "red";
			}else{
				$("#user").style.borderBottom = "1px solid black";
				$("#userl").style.color = "black";
			}

			if ($("#sen").value === "") {
				$("#sen").style.borderBottom = "1px solid red";
				$("#senl").style.color = "red";
			}else{
				$("#sen").style.borderBottom = "1px solid black";
				$("#senl").style.color = "black";
			}
		}else{
			$("#info").innerHTML = " ";
		}
	})

	// Reagistro
	$(".submit2").addEventListener("click",(e)=>{
		if ($("#user2").value === "" || $("#email").value === "" || $("#sen2").value === "" || $("#sen2c").value === "") {
			e.preventDefault();

			$("#info2").innerHTML = "Por favor Preencha os campos";
			$("#info2").style.marginTop = "10px";


			// Usuario
			if ($("#user2").value === "") {
				$("#user2").style.borderBottom = "1px solid red";
				$("#userl2").style.color = "red";
			}else{
				$("#user2").style.borderBottom = "1px solid black";
				$("#userl2").style.color = "black";
			}

			// Email
			if ($("#email").value === "") {
				$("#email").style.borderBottom = "1px solid red";
				$("#emaill").style.color = "red";
			}else{
				$("#email").style.borderBottom = "1px solid black";
				$("#emaill").style.color = "black";
			}

			if ($("#email").value === "") {
				$("#email").style.borderBottom = "1px solid red";
				$("#emaill").style.color = "red";
			}else{
				$("#email").style.borderBottom = "1px solid black";
				$("#emaill").style.color = "black";
			}

			//Senha
			if ($("#sen2").value === "") {
				$("#sen2").style.borderBottom = "1px solid red";
				$("#sen2l").style.color = "red";
			}else{
				$("#sen2").style.borderBottom = "1px solid black";
				$("#sen2l").style.color = "black";
			}

			// Confirma senha
			if ($("#sen2c").value === "") {
				$("#sen2c").style.borderBottom = "1px solid red";
				$("#sen2lc").style.color = "red";
			}else{
				$("#sen2c").style.borderBottom = "1px solid black";
				$("#sen2lc").style.color = "black";

			}
			
		}else if($("#sen2c").value !== $("#sen2").value) {
			e.preventDefault();
			$("#info2").innerHTML = "Senha não confirmada!";
			$("#info2").style.marginTop = "10px";
		}
		else{
			$("#info2").innerHTML = " ";
		}
	})

})();