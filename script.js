// Lets make a pizza!

// 1) You will order a Pizza -> 2sec  
// 2) Order taken by cheff -> 1sec 
// 3) Cheff cuts vegeies for pizza -> 2 secs 
// 4) Making crust of Pizza -> 5 sec 
// 5) make the pizza cheesy -> 2sec 
// 6) Put pizza in Oven -> 3sec 
// 7) Pizza is ready -> 1sec
// 8) Eat the Pizza -> 4 secs


// setTimeout( () =>{console.log("Ordering Pizza")},
// 2000)

// setTimeout( () =>{console.log("Order Taken by cheff")},
// 3000)


// what are callbacks

setTimeout(()=>{one(two)},6000)

function one(second){
    console.log("Ordering Pizza")
    setTimeout(second, 3000)
}
function two(){
    console.log("Order Taken by cheff")
}
// one(two)








// console.log(1)
// setTimeout(() => {console.log(2)}, 2000)
// console.log(3)





// console.log("Ordering Pizza");
// Async code
// console.log("Order taken by cheff");
// setTimeout

// console.log("Cheff cuts vegeies for pizza");
// console.log("Making crust of Pizza");
// console.log("make the pizza cheesy");
// console.log("Put pizza in Oven");
// console.log("Pizza is ready");
// console.log("Eat the Pizza");

