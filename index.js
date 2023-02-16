const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
shuffleList(characters)

let length = 10
let checkboxNum = document.querySelector("#number-cb")
let checkboxSym = document.querySelector("#symbol-cb")

let lenInput = document.querySelector("#length-input")
let password1 = document.getElementById("pwd1")
let password2 = document.getElementById("pwd2")

let isOn = false

function darkMode() {
    if(!isOn) {
        document.documentElement.setAttribute('data-theme', "dark");
        isOn = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        isOn = false;
    }
}


let currentArray = []
currentArray.push(...characters)

checkboxNum.addEventListener('change', function(event) {
    if (event.currentTarget.checked){
        numFunction()

    } else {
        currentArray = []
        currentArray.push(...characters)

    }
});



checkboxSym.addEventListener('change', function(event) {
    if (event.currentTarget.checked){
        symFunction()

    } else {
        currentArray = []
        currentArray.push(...characters)
    }
});





lenInput.addEventListener('input', function(event) {
    length = event.target.value
    if (!length){
        length = 10
    }
});



  
function numFunction() {
    currentArray.push(...numbers)
    shuffleList(currentArray)
}

function symFunction() {
    currentArray.push(...symbols)
    shuffleList(currentArray)
}

function createPassword(length = 10) {
    let password = ""
    for (let i = length ; i > 0; i--){
        let random = Math.floor(Math.random() * currentArray.length)
        password += currentArray[random]
    }
    return password
    

}

function getPassword() {
    password2.textContent = createPassword(length)
    password1.textContent = createPassword(length)
}




function shuffleList(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }


password1.addEventListener("click", function() {
    const text1 = password1.textContent
    const text2 = password2.textContent
    navigator.clipboard.writeText(text1, text2).then(() => {
        alert("Text was copied to the clipboard");
      })
      .catch((error) => {
        console.error("Error copying text to the clipboard:", error);
      });
  });