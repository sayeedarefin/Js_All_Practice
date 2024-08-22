function password(userInfo) {
    const { name, birthYear, siteName } = userInfo;
    // প্রয়োজনীয় প্রপার্টিসমূহ চেক করা
    if (!name || !birthYear || !siteName) {
        return "invalid"; // যদি প্রয়োজনীয় কোনো প্রপার্টি মিসিং থাকে, তাহলে "invalid" রিটার্ন করা হবে
    }

    // birthYear এর লেন্থ চেক করা
    if (birthYear.toString().length !== 4) {
        return "invalid"; // যদি birthYear ৪ ডিজিটের না হয়, তাহলে "invalid" রিটার্ন করা হবে
    }
    

    // পাসওয়ার্ড তৈরি করার জন্য নামের প্রথম ৩টি অক্ষর, জন্ম সনের শেষ ২টি সংখ্যা এবং সাইটের নাম যোগ করা হলো
    let password = name.slice(0, 3) + birthYear.toString().slice(-2) + siteName;

    return password;
}

// উদাহরণ হিসেবে ফাংশন কল করা
const userInfo = { name: "sayeed", birthYear: 2004, siteName: "youtube" };
let generatedPassword = password(userInfo);
console.log(generatedPassword);  // Output: kol99google
