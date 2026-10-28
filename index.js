function calculateTax(amount) {
    const taxRate = 0.1; // 10% tax rate
    return amount * taxRate;
}
console.log(calculateTax(100)); // Output: 10

function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello")); // Output: "HELLO"

function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}
console.log(findMaximum(5, 10)); // Output: 10

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
   return word === reversedWord;
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

function calculateDiscountedPrice(originalPrice, discountPercentage) {
     return originalPrice - (originalPrice * (discountPercentage / 100));
}
console.log(calculateDiscountedPrice(100, 20)); // Output: 80

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };



