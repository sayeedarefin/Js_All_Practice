function bestFriend(friends) {
    let largestName = friends[0]; // প্রথম ফ্রেন্ডের নাম ধরে নিচ্ছি

    for (let i = 1; i < friends.length; i++) {
        if (friends[i].length > largestName.length) {
            largestName = friends[i]; // যদি বর্তমান ফ্রেন্ডের নামের দৈর্ঘ্য বেশি হয়, তাহলে সেটি largestName এ সেট করব
        }
    }

    return largestName; // সবচেয়ে বড় নামটি রিটার্ন করব
}

// উদাহরণস্বরূপ অ্যারের জন্য ফাংশন কল করা:
let friends = ["Rahim", "Karim", "Abdullah", "Mohammad", "Jubayer"];
let best = bestFriend(friends);
console.log(best); // Output: "Abdullah"
