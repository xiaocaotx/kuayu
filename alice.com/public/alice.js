
//CORS跨域
// const  request =new XMLHttpRequest();
// request.open("GET","http://qq.com:8888/friends.json");
// request.onreadystatechange =()=>{
//     console.log("alice加载了qq.com")
//     console.log("alice+"+request.status)
//     if (request.readyState == 4 && request.status ==200){
//
//         const obj = JSON.parse(request.response);
//         console.log(obj);
//     }
// }
//  request.send();

//JSONP跨域，兼容IE
const ran = Math.random();
window[ran] = (data) => {
    console.log("我执行了随机数函数"+data)
}
const scriptEle = document.createElement("script");
scriptEle.src=`http://qq.com:8888/friends.js?callback=${ran}`;


document.body.append(scriptEle);