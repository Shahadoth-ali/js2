const taskOne=(callback)=>{
    console.log("task1")
    callback();
}

const taskTwo=(callback)=>{
    setTimeout(()=>{
        console.log("task two")
        callback();
    },2000)
   
}
const taskThree=()=>{
    console.log("task3")
}
const taskFour=()=>{
    console.log("task4")
}
const taskFive=()=>{
    console.log("task5")
}
taskOne(function f(){
    taskTwo(function f1(){
taskThree();
    });
});
