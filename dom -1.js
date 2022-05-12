First Class Functions(FCF) - The functions can be passed as values(as arguments) into another functions or can be returned from another functions as values. This unique feature of functions makes them call as first classs functions/ First class citizens.


Higher Order functions(HOF) - The functions which accept the FCF's or return them are called as Higher Order Functions

let g = function(param){//HOF
    console.log("I am fn G"); 
    console.log(param); 
    param();//callback function   
}

function h(){//FCF
    console.log("I am fn h");
}

g(h);//h is a function passed as an argument


let param = function(){
    console.log("i am fn H");
}

let i = function(){//HOF
    return function j(){//FCF
        console.log("I am fn J");
    }
}
let returnVal = i();
console.log(returnVal);
console.log(i());

setTimeout(() => {
    console.log("Hi I am inside a callback function");
}, 4000);


const sayHi = (nameOfFriend) => {//Callback function
    console.log("Hello",nameOfFriend);
}

const greeting = (friend, callBackFUnction) => {
    callBackFUnction(friend);//sayHi(friend);
}

greeting("Bala",sayHi);

function sayHi(arg3){//arg3=Bala
    log("hello",arg3)//hello Bala
}

function greeting(arg1, arg2){//HOF
    arg1 = "Bala",
    arg2 = sayHi,
    arg2(Bala); => sayHi(Bala);//calling a function
}

greeting("Bala",sayHi)
