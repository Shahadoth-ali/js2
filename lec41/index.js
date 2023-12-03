
var buttonLength=document.querySelectorAll(".myButton").length;


console.log(buttonLength)

// for(var i=0;i<buttonLength;i++){
// //  document.querySelectorAll("myButton")[i].addEventListener("click",function(){
// // //     var text=this.innerHTML;
// // //     document.getElementById("h1").innerHTML= text+"is clicked";
// //  })   
// // }


for(var i=0;i<buttonLength;i++){

document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
   //  alert("hello");
 var text=this.innerHTML;

   document.getElementById("heading").innerHTML=text+" is clicked";

})

}


