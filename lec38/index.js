var imagesAll=["images/Capture.PNG","images/Capture1.PNG","images/Capture2.PNG"];

var oneImage=document.querySelector("img");
console.log(imagesAll.length)
var count=0;

function Previous(){
    count--;
    if(count<0){
        count=imagesAll.length-1;
        oneImage.src=imagesAll[count];
    }else{
        oneImage.src=imagesAll[count];
    }
}




function Next(){
    count++;
    if(count>=imagesAll.length){
        count=0;
        oneImage.src=imagesAll[count];
    }else{
        oneImage.src=imagesAll[count];
    }
    
    }
