function validaEmailAddress(email) {
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}
function validate() {
$("#result").text("");
var emailaddress = $("#email").val();
if (validaEmailAddress(emailaddress)) {
$("#result").text(emailaddress + " é válido :)");
$("#result").css("color", "green");
} else {
$("#result").text(emailaddress + " não está correto, tente novamente:(");
$("#result").css("color", "red");
}
return false;
}
$("#validate").bind("click", validate);
