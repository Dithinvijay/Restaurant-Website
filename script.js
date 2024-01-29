$(".signup").css("display", "none");

		$(".signbtn").click(function(){
			$("form").animate({ height:"toggle", opacity: "toggle"}, "slow");
		});

    $("#showhide").click(function(){
      var pass = $("#myinput");
      if (pass.attr("type") == "password") {
        pass.attr("type", "text");
      } else {
        pass.attr("type", "password");
      }
    })

// function validate(){
//   if(document.myform.name.value==""){
//     // alert("Please enter name.")
//     document.getElementById("name-err").innerHTML="Please enter name"
//   }
//   if(document.myform.password.value==""){
//     document.getElementById("pass-err").innerHTML="Please enter password"
//     // alert("Please enter password.")
//   }
// }
function validate() {
  var i = 0;
  if (document.myform.name.value == "") {
      document.getElementById("name-err").innerHTML = "Please Enter your name";
      i++;
  }
  else {
      document.getElementById("name-err").innerHTML = "";
  }
  if(document.myform.password.value==""){
    document.getElementById("pass-err").innerHTML = "please enter password";
    i++;
  }
  else{
    document.getElementById("pass-err").innerHTML = "";
  }
  if (i == 0) {
      document.getElementById("myform").action="index2.html";
  }
}
function validate1(){
  var i=0;
  if (document.myform.email.value == "") {
    document.getElementById("email-err").innerHTML = "Please Enter your name";
    i++;
}
else {
    document.getElementById("email-err").innerHTML = "";
}
if(document.myform.username.value==""){
  document.getElementById("user-err").innerHTML = "please enter password";
  i++;
}
else{
  document.getElementById("user-err").innerHTML = "";
}
if(document.myform.username.value==""){
  document.getElementById("password-err").innerHTML = "please enter password";
  i++;
}
else{
  document.getElementById("pass-err").innerHTML = "";
}
if(i==0){
window.location.href="index2.html";
}
}

function gog(){
  window.open("https://www.google.com/")
}
function fb(){
  window.open("https://www.facebook.com/")
}
function inde(){
  window.open("index2.html")
}