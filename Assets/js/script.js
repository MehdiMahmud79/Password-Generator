// DOM elements
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector(".copyBtn");
var passwordText = document.querySelector("#password");
var criteriaContentList = document.querySelector(".mycriterialist");
var liPasswordLength = document.getElementById("password-length");
var liLowerCase = document.getElementById("Lower-Case");
var liUpperCase = document.getElementById("Upper-Case");
var liCharaters = document.getElementById("Charaters");
var liNumeric = document.getElementById("Numeric");
var passwordLength;
var crtiteriaList={
      UPPERCASE_RE:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      LOWERCASE_RE:"abcdefghijklmnopqrstuvwxyz",
      NUMBER_RE:"0123456789",
      SPECIAL_CHAR_RE:"!@#$%^&*?_~-()",
      } 
    
var hasUpperLetter=false;
var hasLowerLetter=false;
var hasNumbers=false;
var hasSpecialLetters=false;
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  passwordText.value = "I will generate your secure password";
  // criteriaUL.style.display="none";
  liPasswordLength.style.display="none";
  liUpperCase.style.display="none";
  liLowerCase.style.display="none";
  liNumeric.style.display="none";
  liCharaters.style.display="none";
    choose_criteria()  //___ Password criteria____
    copyBtn.setAttribute("style", "display:inline-block;")
    var password = generatePassword();


    passwordText.value = password;
}

// _______________________________using the prompt function to ask for the criteria__________________________
function choose_criteria(){
  do{ // this loop will continue until the criteria for the password length is achived
    passwordLength= +(prompt("Password length:\n     +It should be at least 8 characters and no more than 128 characters"));
  } while(passwordLength<8 ||passwordLength>128);  
  
  do{// this loop will continue until you choose at least one criteria
    hasUpperLetter= confirm("Password has upper case letters included:\n     +Press OK to include it \n   OR \n     +Press cancel to exclude it. ");
    hasLowerLetter= confirm("Password has lower case letters include:\n     +Press OK to include it \n   OR \n     +Press cancel to exclude it.");
    hasNumbers= confirm("Password has numeric character included:\n     +Press OK to include it \n   OR \n     +Press cancel to exclude it.");
    hasSpecialLetters= confirm("Password has special characters included:\n     +Press OK to include it \n   OR \n     +Press cancel to exclude it."); 
  
    if(!(hasLowerLetter ||hasUpperLetter || hasNumbers|| hasSpecialLetters)){
      alert("you password should atleast containe one criteria");
    }
  } while(!(hasLowerLetter ||hasUpperLetter || hasNumbers|| hasSpecialLetters));
  
  } //end of function choose_criteria

//_______________________ Creat the password with the given criteria________________________________________
  
function generatePassword(){

   
    var password=""; var myIteration=0;
    
    function getRandom(my_letters){//____ generating a random password_____________
      var range=my_letters.length;
      var j= Math.floor(Math.random() * (range));
      return my_letters[j];
    }
    do{ // this loop will continue utill the password has a length of atleast passwordLength
          if(hasLowerLetter){// choose a random lower case letter
            password=password+getRandom(crtiteriaList.LOWERCASE_RE);
            myIteration++;
            }
          if(hasUpperLetter){// choose a random upper case letter  
            password=password+getRandom(crtiteriaList.UPPERCASE_RE);
            myIteration++;
           }
          if(hasNumbers){// choose a random number 
            password=password+getRandom(crtiteriaList.NUMBER_RE);
            myIteration++;
            }
          if(hasSpecialLetters){// choose a random character
            password=password+getRandom(crtiteriaList.SPECIAL_CHAR_RE);
            myIteration++;          
            }
  } while(myIteration<=passwordLength)
  
  // ________after generating password, to have it more secure, we shuffle it to have more random Pattern____
  password=shuffle(password);
  
  //________slice the password to have the actual given length____________ 
  password=  password.slice(0, passwordLength);
  console.log("\n The chosen password of length  "+passwordLength+"  is \n "+ password);
  alert("\n The chosen password of length  "+passwordLength+"  is \n "+password)

//_________________________Add the criteria list to the HTML body_____________________________

  creatMyCriteriaList()

  // ______________Adding the criteria list to the HTML body
  function   creatMyCriteriaList(){

      criteriaContentList.style.display="block";


      liPasswordLength.textContent="password length is:  "+passwordLength
      liPasswordLength.style.display="block";
      if(hasUpperLetter){
        liUpperCase.textContent ="you passsword contain upper case letters.";
       liUpperCase.style.display="block";
      }
      if(hasLowerLetter){
        liLowerCase.textContent ="you passsword contain lower case letters.";
        liLowerCase.style.display="block";
      }
      if(hasNumbers){
        liNumeric.textContent ="you passsword contain numbers.";
        liNumeric.style.display="block";
      }  
      if(hasSpecialLetters){
        liCharaters.textContent ="you passsword contain special letters.";
        liCharaters.style.display="block";
      }            

   }// end of the function creatMyCriteriaList

      function shuffle (a) {
        var a = a.split("");
      var   n= a.length;
        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
      a=a.join(""); 
      return  a;
      }

//  in this section we demonstrate the strength of the password on the criteria Section

const indicator=document.querySelector(".indicator");
const input=document.querySelector("input");
const tooweak=document.querySelector(".tooweak");
const weak=document.querySelector(".weak");
const medium=document.querySelector(".medium");
const strong=document.querySelector(".strong");
const text=document.querySelector(".text");
// strengthCount indicates the number of choosen criteria
var strengthCount=0; 
strengthCount=hasUpperLetter+ hasLowerLetter+hasNumbers+hasSpecialLetters;
console.log("number of choosen criteria are=  "+strengthCount)
 
        indicator.style.display="block";                
        indicator.style.display="flex";
        if(strengthCount==1){
            tooweak.classList.add("active");
            text.style.display="block";
            text.textContent="your password is too weak";
            text.classList.add("tooweak");
        }
        if(strengthCount==2){
            weak.classList.add("active");
            text.textContent="your password is weak";
            text.classList.add("weak");
        }else{
            weak.classList.remove("active");   
            text.classList.remove("weak");
        }

        if(strengthCount==3){
            medium.classList.add("active");
            text.textContent="your password is medium";
            text.classList.add("medium");
            text.classList.remove("weak")
        }else{
            medium.classList.remove("active");   
            text.classList.remove("medium");

        } 
        if(strengthCount==4){
            strong.classList.add("active");
            text.textContent="your password is strong";
            text.classList.add("strong");
            text.classList.remove("medium");

        }else{
            strong.classList.remove("active");   
            text.classList.remove("strong");                    
        }
    
        // showBtn.style.display="block";
        // showBtn.onclick=function(){
        //     if(input.type=="password"){
        //         input.type="text";
        //         showBtn.textContent="HIDE";
        //     }else{
        //         input.type="password";
        //         showBtn.textContent="SHOW";
        //     }
        // }
        return password;

}// end of function generatePassword

