let image = document.querySelector("img");

image.onclick = function(){
	let src = image.getAttribute("src");
	
	if(src === "banana.jfif"){
		image.setAttribute("src", "therock.jfif");
		document.getElementById("eyebrow").play();
	} else {
		image.setAttribute("src", "banana.jfif");
	}
}
