function deleteInvalids(arr) {
    return arr.filter(element => typeof element === 'number' && !isNaN(element));
}

// Example usage:
let result = deleteInvalids([NaN, 1, 12, 0, -1, undefined]);
console.log(result); // Output: [1, 12, 0, -1]



function deleteInvalids(arr) {
    let validNumbers = [];  // একটি খালি অ্যারে তৈরি করা হলো যেখানে শুধুমাত্র নাম্বারগুলো রাখা হবে

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        // চেক করা হচ্ছে যে element একটি সংখ্যা কিনা এবং NaN নয়
        if (typeof element === 'number' && !isNaN(element)) {
            validNumbers.push(element);  // যদি নাম্বার হয় তাহলে validNumbers অ্যারেতে যোগ করা হবে
        }
    }

    return validNumbers;  // শুধুমাত্র নাম্বার সম্বলিত অ্যারেটি রিটার্ন করবে
}

// উদাহরণ হিসেবে ফাংশন কল করা
let result2 = deleteInvalids([NaN, 1, 12, 0, -1, undefined, "hello", 2.5, null]);
console.log(result2);  // Output: [1, 12, 0, -1, 2.5]
