// 1
// let wrapper = document.getElementById("wrapper");
// let x = document.getElementById("x")
// let y = document.getElementById("y")
//
// wrapper.addEventListener("mousemove", (event)=>{
//     x.innerText = event.offsetX;
//     y.innerText = event.offsetY;
// })

// 2
// let inputID = document.getElementById("inputID");
//
// inputID.addEventListener("keypress", (event)=>{
//     if(Number(event.key)){
//         event.preventDefault();
//     }
// })

// 3
// let btn = document.getElementById("btn");
// let i = -1;
// btn.addEventListener("click", ()=>{
//     i++;
//     let arr = ['red','orange','green'],
//         round = document.querySelectorAll('.cir');
//     if(round[i-1]) round[i-1].style.backgroundColor = '';
//     if(i == arr.length) i = 0;
//     round[i].style.backgroundColor = arr[i];
// })