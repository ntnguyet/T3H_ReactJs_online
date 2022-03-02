function loadScript(src, callBack){
    let script = document.createElement('script'); // tạo 1 thẻ script
    script.src = src; // gán attriview src của thẻ script = ./hello.js
    script.onload = () => callBack(script); //add thẻ script vào DOM và thực hiện
    script.onerror = () => callBack(new Error (`script load error ${src}`));
    document.head.append(script);// thêm script vào cuối của thẻ head
}
loadScript('./hello.js', (script) => {
    console.log('hello people');
    console.log('Nguyet Nhi', script);
})