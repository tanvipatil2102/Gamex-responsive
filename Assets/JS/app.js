let cl = console.log;

let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let sidebar = document.getElementById("sidebar");
let backdrop = document.getElementById("backdrop");

let flag = false;

let onClick = (eve) => {
    if(!flag){
        icon1.classList.toggle("d-none");
        icon2.classList.toggle("d-none");
        sidebar.classList.toggle("transform");
        backdrop.classList.toggle("d-none");
        backdrop.classList.toggle("active");
        sidebar.classList.toggle("active");
    }
}



icon1.addEventListener("click", onClick);
icon2.addEventListener("click", onClick);

function kiran(num){
    if(num % 2 === 0){
        return `Number is even number`
    }else{
        return `Number is odd number`
    }
}


cl(kiran(45));

let array = [1,2,3,4,5,6];

cl(array);