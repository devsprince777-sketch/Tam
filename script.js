function idea() {
  const email = document.getElementById("email").value;
  const mdp = document.getElementById("mdp").value;
  if(
    email == "devsprince777@gmail.com" && mdp == "admin"
  ){
  window.location.href= "acceuil.html"
  }
  else{alert("retry password or email is false")}
};
function regi() {
  const email = document.getElementById("email").value;
  const mdp = document.getElementById("mdp").value;
  const mdp2 = document.getElementById("mdp2").value;
  if (
    mdp == mdp2 && email != null ){
    window.location.href= "acceuil.html";
  }
  else {
    alert("password is différents or email is null")
  }
};
function gol(name) {
  window.location.href= name
}