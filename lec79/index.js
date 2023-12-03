const promise1=new Promise((resolve,reject)=>{
    let completedPromise=false;
    if(completedPromise){
        resolve("completed promise1")
    }else{
        reject("not completed")
    }

})



promise1.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})