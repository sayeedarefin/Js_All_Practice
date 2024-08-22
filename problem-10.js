function monthlySavings(payments, livingCost) {
    // ইনপুট যাচাই
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = 0;

    // প্রতিটি পেমেন্টের জন্য লুপ চালানো
    for (let i = 0; i < payments.length; i++) {
        let payment = payments[i];
        if (payment >= 3000) {
            payment -= payment * 0.20; // ২০% ট্যাক্স কেটে নেওয়া
        }
        totalIncome += payment;
    }

    // সঞ্চয়ের হিসাব
    let savings = totalIncome - livingCost;

    // সঞ্চয় চেক করা
    if (savings >= 0) {
        return savings; // যদি সঞ্চয় ০ বা তার বেশি হয়
    } else {
        return "earn more"; // যদি সঞ্চয় ০ এর চেয়ে কম হয়
    }
}

// উদাহরণ:
console.log(monthlySavings([5000, 2000, 6000, 1500], 8000)); // Output: 4200
console.log(monthlySavings([1000, 1500, 2500], 5000)); // Output: "earn more"
console.log(monthlySavings("not an array", 8000)); // Output: "invalid input"
console.log(monthlySavings([5000, 2000, 6000, 1500], "not a number")); // Output: "invalid input"
