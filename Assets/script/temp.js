// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var generatePassword = require("password-generator");

// other project

function generatePassword(){
  upperCaseCriteria=true;
  lowerCaseCriteria=true;
  numericCharCriteria=true;
  specialCharCriteria=true;
  minLength=8,
  maxLength=128,
  UPPERCASE_RE="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  LOWERCASE_RE="abcdefghijklmnopqrstuvwxyz";
  NUMBER_RE="0123456789";
  SPECIAL_CHAR_RE="!@#$%^&*?_~-()";
  
  console.log(Math.floor(Math.random()*(NUMBER_RE.length) )) ;
  var minLength=4;
  var maxLength=15;
  var mycharlist="";
  if(upperCaseCriteria) mycharlist=mycharlist+UPPERCASE_RE;
  if(lowerCaseCriteria) mycharlist=mycharlist+LOWERCASE_RE;
  if(numericCharCriteria) mycharlist=mycharlist+NUMBER_RE;
  if(specialCharCriteria) mycharlist=mycharlist+SPECIAL_CHAR_RE;
  
  var n;
  shuffle (mycharlist); 
  shuffle (mycharlist); 
  shuffle (mycharlist); 
  shuffle (mycharlist); 
  function shuffle (a) {
    var a = mycharlist.split("");
        n = a.length;
    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
   mycharlist=a.join(""); 
  }
  console.log(mycharlist)
  console.log("n is equa; to: "+ n)
  
  
  var randomLength = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
    console.log("leng is:  "+randomLength);
  var password="";
  for(var i=0; i<randomLength;i++){
    var j = Math.floor(Math.random() * (mycharlist.length));
    password=password+mycharlist[j];
  }
  console.log(password);

var uppercaseMinCount = 3;
var lowercaseMinCount = 3;
var numberMinCount = 2;
var specialMinCount = 2;
// initialy set the length of the password

// var UPPERCASE_RE = /([A-Z])/g;
// var LOWERCASE_RE = /([a-z])/g;
// var NUMBER_RE = /([\d])/g;
// var SPECIAL_CHAR_RE = /([\?\-])/g;
// var NON_REPEATING_CHAR_RE = /([\w\d\?\-])\1{2,}/g;

var size = 0,
key;
for (key in criteriaList) {
if (criteriaList.hasOwnProperty(key)) size++;
}
  function choose_criteria(){
  criteriaList.lengthCriteria= confirm("password length included in the criteria");
  if(lengthCriteria)  {
  criteriaList.minLength=prompt("choose minimum length of the password between 8 and 128");
  criteriaList.maxLength=prompt("choose maximum length of the password between 8 and 128")
// minLength = 8; maxLength = 128;
  }
   varupperCaseCriteria= confirm("password has upper case letters included");
   criteriaList.lowerCaseCriteria= confirm("password has lower case letters included");
   criteriaList.numericCharCriteria= confirm("password has numeric character included");
   criteriaList.specialCharCriteria= confirm("password has special characters included"); 
  
 if(lengthCriteria || upperCaseCriteria ||lowerCaseCriteria || numericCharCriteria|| specialCharCriteria){

}else{
  var myvar=alert("you password should atleast containe one criteria");
  var isContinue=confirm("Do you want to continue");
  if(isContinue){
    choose_criteria();
  }else{
    return;
  }
} 
  }

choose_criteria()

function isStrongEnough(password) {
  var uc = password.match(UPPERCASE_RE);
  var lc = password.match(LOWERCASE_RE);
  var n = password.match(NUMBER_RE);
  var sc = password.match(SPECIAL_CHAR_RE);
  var nr = password.match(NON_REPEATING_CHAR_RE);
  return password.length >= minLength &&
    !nr &&
    uc && uc.length >= uppercaseMinCount &&
    lc && lc.length >= lowercaseMinCount &&
    n && n.length >= numberMinCount &&
    sc && sc.length >= specialMinCount;
}

function customPassword() {
  var password = "";
  var randomLength = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
  while (!isStrongEnough(password)) {
    password = generatePassword(randomLength, false, /[\w\d\?\-]/);
  }
  return password;
}
customPassword()

// var upperCaseLength=prompt("Minumium upper case letter will be  included in the password");
// var upperCaseLength=prompt("Minum lowe case letter will be included in the password");




}









console.log(customPassword()); // => 2hP5v?1KKNx7_a-W




var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
// Add text for list items
li1.textContent = "Apples 🍎 ";
li2.textContent = "Pizza 🍕 ";
li3.textContent = "Dumplings 🥟 ";
li4.textContent = "Cupcakes 🧁 ";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
// Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:20px;");
// Add styling to list items
li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
