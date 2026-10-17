function calcBMI(weight, height) {
    var bmi = Math.round(weight / (height ** 2) * 10);
    return "your BMI is " + (bmi / 10);
}
var answer = calcBMI(64.5, 1.83);
console.log(answer);