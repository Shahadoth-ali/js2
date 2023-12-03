// const input=document.querySelector("input");
// input.addEventListener('change',changeHandler)

// function changeHandler(e){
//     console.log(e);
// console.log(e.target);
// console.log(e.type);
// console.log(e.target.className)
// console.log(e.target.id);
//console.log(e.target.value);
// }



/*
const varName=document.querySelectorAll("input[name=programs]");
// console.log(varName);

Array.from(varName).map((prgram)=>{
    prgram.addEventListener("change",programHandler);
});

function programHandler(e){
    // console.log("checked");
    if(e.target.checked){
        // console.log("checked");
        console.log(e.target.value);
    }
}
*/

const department=document.querySelector("#department");
// console.log(department);
department.addEventListener("change",handleDepartment);
function handleDepartment(e){
    // console.log("select");
    console.log(e.target.value);
}
