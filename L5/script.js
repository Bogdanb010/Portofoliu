// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an = document.getElementById("anNastere")

// Add event listener
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

const d = new Date()
var year = d.getFullYear()

//Define function
function displayAge(){
	an.innerHTML = year - an.innerHTML
}


function altaViata(){
	nume.innerHTML = "Software Engineer"
	prenume.innerHTML = "Google"

	educatie.innerHTML = "Experiente"
	asteptari.innerHTML ="<ul><li>Workshops</li><li>Internship</li></ul>"
	img.src ="images/caine.jpg"
	img.style.opacity = "70%"
	img.style.border= "5px solid blue"
	body.style.background="linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)"


}