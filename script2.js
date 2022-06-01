setInterval(function () {
    var time = document.getElementById('hour');
    time.innerText = new Date().getHours();
}, 1000);
setInterval(function () {
    var time = document.getElementById('minute');
    time.innerText = new Date().getMinutes();
}, 1000);
setInterval(function () {
    var time = document.getElementById('second');
    time.innerText = new Date().getSeconds();
}, 1000);
// {
//     var arr = ["Welcome to my webpage!"];
//     alert(arr[0]);
// }
// let number=10;
// function findEven(number){
//     if (number%2==0){
//         console.log(2)
//     }
// }
