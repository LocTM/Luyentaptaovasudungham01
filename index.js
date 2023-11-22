// BT1
// function alertMessage(){
//     alert("Xin chao")
// }

// BT2
// function incrementNumber(inputNumber) {
//     return inputNumber+1;
// }
// function displayResult() {
//     let inputNumber = +(document.getElementById("inputNumber").value);
//     let result = incrementNumber(inputNumber);
//     document.getElementById("result").innerHTML = "Kết quả: " + result;
// }

// BT3

// function result(a,b){
//
//     if(a > b){
//         alert(`So ${a} lon hon so ${b}`)
//     }
//     else {
//     //     alert(a + b);
//     return a+b;
//     }
//
// }
// result = result(7,6);
// console.log(result)

// BT4
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// console.log(result);
// result = addNumbers();
// console.log(result);

// BT5
let arr1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let arr2 = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
function findConstellation(starName) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === starName) {
            // trả lại tên chòm sao tương ứng
            return arr2[i];
        }
    }

    // không tìm thấy
    return -1;
}

let userInput = prompt("Nhập tên ngôi sao cần tìm:");
let result = findConstellation(userInput);
if (result !== -1) {
    alert("Ngôi sao: " + userInput + "Chòm sao tương ứng là " + result);
} else {
    alert("Không tìm thấy thông tin về ngôi sao: " + userInput);
}

