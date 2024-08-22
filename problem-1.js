//১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

const str = "My name is Sayeed";
console.log(str);

// const IsBoolean = Rrue;
// console.log(IsBoolean);

let num1= 15;
let num2 = 60;
let sum = num1+num2;
let compare = num1>num2;

console.log(compare);
console.log(sum);

let number1= 32;
let number2= 62;
let number3= 92;

if(number1 < number2 && number2>number3){
    console.log("etao thik, oitao thik");
}
else{console.log("komotai thik nai");
}
if(number1 < number2 || number2>number3){
    console.log("ektai thik, arekta thik nai");
}
else{console.log("komotai thik nai");
}

let i = 7;
while(i<=21){
    console.log(i);
    i +=2;
}

let list = ['a', 'b', 'c', 'd', 'e'];
console.log(list.length);

list[3]= 'x';
console.log(list);

list.push('y','z');
console.log(list);

list.pop();
console.log(list);

for(i=0; i<list.length; i++){
    let element = list[i];
    console.log(element);
}

let nums = [45,85,96,25,87,85,86,96,100,458,2,3,6,4];
let numbers = [];
for(i=0; i<nums.length; i++){
    let element = nums[i];
    if(element>80){
        numbers.push(element);
    }
   
    
}
console.log(numbers)


let x=2;
let y=3;
let z=4;

let  prodduct = x*y*z;
console.log(prodduct);

let person = {
    name: "John Doe",
    age: 30,
    profession: "Engineer"
};
person.age= 15;
console.log(person);