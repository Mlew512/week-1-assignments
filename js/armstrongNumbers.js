function createArrayOfNum(maxValue) {
    return [...Array(maxValue).keys()];
  }
// function createArrayOfNum2(maxValue) {
//     return [...Array(maxValue).keys()];
//   }
function findArmstrongNumbers(num){
    let array = [...Array(num).keys()]
    const armstrongNumbers = []
    array.forEach(element => {
        let num = element
        let sum= 0;
        const numDigits = element.toString().length;

        while (num >0){
            const digit = num % 10;
            sum += digit ** numDigits;
            num = Math.floor(num/10);
        }
        if (sum === element){
            armstrongNumbers.push(sum);
        }
    })
    return armstrongNumbers
}

console.log(findArmstrongNumbers(9))
// How can you make this more scalable and reusable later?

// exports.findArmstrongNumbers = function() {

// };
module.exports = {findArmstrongNumbers , createArrayOfNum}