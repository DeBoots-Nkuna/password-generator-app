const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
]
//collecting password divs

let passwordEl1 = document.getElementById('password-el1')
let passwordEl2 = document.getElementById('password-el2')

//declaration of variables
let randomPassCode1 = []
let randomPassCode2 = []
const passwordLength = 15

//function to generate random passwords

function generatePassword() {
  //calling resetPassword function to clear the passwords
  resetPassword()
  //for loop to generate passwords

  for (let k = 0; k < passwordLength; k++) {
    //getting random numbers for passowrd 1 and 2
    let passCode1Index = getRandomNumber()
    let passCode2Index = getRandomNumber()

    //collecting characters and adding them to the password arrays
    randomPassCode1.push(characters[passCode1Index])
    randomPassCode2.push(characters[passCode2Index])
  }

  //displaying passwords in the divs
  passwordEl1.textContent = randomPassCode1.join('')
  passwordEl2.textContent = randomPassCode2.join('')
}

//method to generate random numbers

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * characters.length)

  return randomNum
}

//function to reset the passwords
function resetPassword() {
  //clearing password arrays
  randomPassCode1 = []
  randomPassCode2 = []

  //clearing the password divs
  passwordEl1.textContent = ''
  passwordEl2.textContent = ''
}

//method to copy passwords to clipboard

function copyPassword(passwordID) {
  //getting the password element by Id

  let passwordContent = document.getElementById(passwordID).textContent

  //copying the password content to the clipboard
  navigator.clipboard.writeText(passwordContent)

  //displaying alert message to indicate successful copy
  alert(`Password copied: ${passwordContent}`)
}
