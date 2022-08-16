// Get the modal
var loginmodal = document.querySelector(".loginmodal");
var signupmodal = document.querySelector(".signupmodal");
// Get the button that opens the modal
var signupbtn = document.getElementById("signup");
var loginbtn = document.getElementsByName("login");
console.log(signupbtn);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// loginbtn.onclick = function() {
//   loginmodal.style.display = "block";
// }
// loginbtn.onclick = function() {
//   loginmodal.style.display = "block";
// }
// signupbtn.onclick = function() {
//   signupmodal.style.display = "block";
// }
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   loginmodal.style.display = "none";
//   signupmodal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     loginmodal.style.display = "none";
//     signupmodal.style.display = "none";
//   }
// }