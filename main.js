let image = document.querySelector("img");

image.onclick = function(){
	let src = image.getAttribute("src");
	
	if(src === "imagens/banana.jfif"){
		image.setAttribute("src", "imagens/therock.jfif");
		document.getElementById("eyebrow").play();
	} else {
		image.setAttribute("src", "imagens/banana.jfif");
	}
}