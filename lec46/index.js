const form=document.querySelector("form")
const name=form.querySelector("label #name");
const email=form.querySelector("label #email");
const password=form.querySelector("label #password");


form.addEventListener("submit",formHandler);

function formHandler(e){
    e.preventDefault();
    // console.log("submit");
 const userInfo={
    name:name.value,
    email:email.value,
    password:password.value
 }
 console.log(userInfo);
 name.value="";
 email.value="";
 password.value="";
}