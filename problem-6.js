function CalculateMoney(soldTicket){
    if(soldTicket<0){
        return "Enter a valid number";
    }
    let earned= soldTicket*120;
    let expense = 500+50*8;
    let final = earned-expense;
    return final;
}
let x= CalculateMoney(10);
console.log(x);