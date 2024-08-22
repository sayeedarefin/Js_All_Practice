function getPositiveNumbers(numbers) {
    let positiveNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            positiveNumbers.push(numbers[i]); // পজিটিভ সংখ্যা হলে অ্যারেতে যোগ করব
        } else {
            break; // নেগেটিভ সংখ্যা পাওয়া গেলে লুপ বন্ধ করে দিব
        }
    }

    return positiveNumbers; // পজিটিভ সংখ্যা গুলা রিটার্ন করব
}

// উদাহরণস্বরূপ অ্যারের জন্য ফাংশন কল করা:
let numbers = [10, 20, 30, -5, 40, 50];
let result = getPositiveNumbers(numbers);
console.log(result); // Output: [10, 20, 30]
