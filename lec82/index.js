// document.write("hello everyone")


const makeRequest=(method,url)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);

    xhr.onload=()=>{
        let data=xhr.response;
        // console.log(data);
        console.log(JSON.parse(data))
    }

    xhr.onerror=()=>{
        console.log('error is here');
    }
    xhr.send();
}

const getData=()=>{
   makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}
getData();

