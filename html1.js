document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction() {
  alert("The form was submitted");
}

function mOver(obj) {
  obj.innerHTML = "Acceseaza"
}

function mOut(obj) {
  obj.innerHTML = "Esti gata sa incepi?"
}
function mOverprime(obj) {
  obj.innerHTML = "Revin-o"
}

function mOutprime(obj) {
  obj.innerHTML = "Esti gata sa te intorci?"
}