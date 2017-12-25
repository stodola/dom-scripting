// function showPic(whichpic) {
// 	var source = whichpic.getAttribute("href");
// 	var placeholder = document.getElementById("placeholder");
// 	placeholder.setAttribute("src",source);
// }

window.onload = function() {
document.getElementById("placeholder").style.display = "none";
var body_element = document.getElementsByTagName("body")[0];
console.log(body_element.childNodes)
prepareGallery()

}

function prepareGallery() {
	var lista = document.getElementById('imagegallery');
	console.log(lista.childNodes);
	for (i=0; i < lista.childNodes.length; i++){
		if (lista.childNodes[i].nodeType == 1) {
			lista.childNodes[i].childNodes[1].addEventListener("click", 
				function(event){
					var link =  event.srcElement.href;
					var placeholder = document.getElementById("placeholder");
					placeholder.setAttribute("src",link);
					console.log(placeholder);
					document.getElementById("placeholder").style.display = "";
					event.preventDefault();
				})


		}
		console.log(lista.childNodes[i])
		console.log(i) 

	}


}



// function showPic(whichpic) {
// var source = whichpic.getAttribute("href");
// var placeholder = document.getElementById("placeholder");
// placeholder.setAttribute("src",source);
// placeholder.style.display='';

// var text = whichpic.getAttribute("title");
// var description = document.getElementById('description');
// console.log(description.firstChild.nodeValue = text);
// }
