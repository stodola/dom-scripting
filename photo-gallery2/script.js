function prepareGallery() {
if (!document.getElementsByTagName) return false;
if (!document.getElementById) return false;
if (!document.getElementById("imagegallery")) return false;

var gallery = document.getElementById("imagegallery");
var links = gallery.getElementsByTagName("a");

var placeholder = document.getElementById('placeholder');

for (var i=0; i < links.length; i++){
	console.log(links[i])
	links[i].addEventListener('click', function(event) {
	var imageLink = event.srcElement.href

	placeholder.setAttribute('src', imageLink);
	event.preventDefault()
		

	})
}



console.log(links);

}


window.onload = prepareGallery;


