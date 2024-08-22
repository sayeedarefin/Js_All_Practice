function checkName(name){
    if(typeof name!== "string"){
        return "invalid";
    }
    let vowels= ['a', 'e', 'i', 'o' , 'u', 'y', 'w'];
    let lastChar= name[name.length-1].toLowerCase();

    if(vowels.includes(lastChar)){
        return "It is a good name"
    }
    else{return "It is a bad name"}
}
let x = checkName("latif");
console.log(x);