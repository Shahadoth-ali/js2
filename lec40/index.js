// var btn=document.querySelector("button").addEventListener("click",myFunction);
// function myFunction(){
//     alert("hello");
// }



var btn=document.querySelector("button").addEventListener("click",function(){
    alert("hello shahadoth");
});



var para=document.querySelector("p");

para.addEventListener("mouseover",function(){
para.classList.add("para-style");
});

para.addEventListener("mouseout",function(){
para.classList.remove("para-style");
});


