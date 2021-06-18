// DOM elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var criteriaContentList = document.querySelector(".mycriterialist");
var criteriaUL = document.getElementById("mycriteriaUL");
var liPasswordLength = document.getElementById("password-length");
var liLowerCase = document.getElementById("Lower-Case");
var liUpperCase = document.getElementById("Upper-Case");
var liCharaters = document.getElementById("Charaters");
var liNumeric = document.getElementById("Numeric");

var crtiteriaList={
      UPPERCASE_RE:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      LOWERCASE_RE:"abcdefghijklmnopqrstuvwxyz",
      NUMBER_RE:"0123456789",
      SPECIAL_CHAR_RE:"!@#$%^&*?_~-()",
      }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
      //____________________________________ Password criteria_______________________________________
      var hasUpperLetter=false;
      var hasLowerLetter=false;
      var hasNumbers=false;
      var hasSpecialLetters=false;
      
    var password = generatePassword(
                    hasLowerLetter,
                    hasUpperLetter,
                    hasNumbers,
                    hasSpecialLetters);
    passwordText.value = password;
}

//_______________________ Creat the password and asking for the criteria_______________________
  
function generatePassword(lower,upper,number,symbol,length){

  //____________initilizing the vlaue of min and max length of the password____________________
      var minLength=8;
      var maxLength=128;
      var passwordLength=8;
// _______________________________using the prompt function to ask for the criteria_________

      choose_criteria()
//__________________Creating the character list concerning the chosen criteria_______________

    if(!(hasUpperLetter ||hasLowerLetter || hasNumbers|| hasSpecialLetters)){
          alert("you password should atleast containe one criteria");
          var isContinue=confirm("Do you want to continue");
        if(isContinue){
          choose_criteria();
          }else{
          return;
          }
    }

//____________________choose a random password length with the given minimum maximum lenght____________        
        passwordLength = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
        console.log("For minimum length of  "+minLength+"   and maximum length of   "+maxLength+ "  the chosen password length is  " +passwordLength);

 //_______________ generating a random password______________________    
    var password=""; var myIteration=0;
    
    function getRandom(my_letters){
      var range=my_letters.length;
      var j= Math.floor(Math.random() * (range));
      return my_letters[j];
    }
    do{
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
  // ____after generating password, to have it more secure, we shuffle it to have more random pattern____
  password=shuffle(password);
  //  slice the password to have the actual given length____________ 
  password=  password.slice(0, passwordLength);
  console.log("\n The chosen password of length  "+passwordLength+"  is \n " );

  console.log(password); 
//_________________________Add the criteria list to the HTML body_____________________________

// creatMyCriteriaList()

// _______________________________using the prompt function to ask for the criteria_________
function choose_criteria(){
      alert("you password length should be between 8 and 128 letters.");

      minLength= +(prompt("Pas sword minimum length:\n     +It should be greater or equal to 8 and less than 128. \n     +Cancel will set the minimum length to 8. "));
      if(minLength===0)minLength=8;  
      maxLength= +(prompt("Password maximum length :\n     +It should be less or equal to 128 and greater than " +minLength +". \n     +Cancel will set the maximum length to 128." ));
      if(maxLength===0)maxLength=128;
      hasUpperLetter= confirm("Password has upper case letters included:\n     +Press OK to include it \n   OR \n     +Press cancel to exclude it. ");
      hasLowerLetter= confirm("Password has lower case letters include:\n     +Press OK to include it \n   OR \n     +Press cancel to exclude it.");
      hasNumbers= confirm("Password has numeric character included:\n     +Press OK to include it \n   OR \n     +Press cancel to exclude it.");
      hasSpecialLetters= confirm("Password has special characters included:\n     +Press OK to include it \n   OR \n     +Press cancel to exclude it."); 
  } //end of function choose_criteria

  // ______________Adding the criteria list to the HTML body
  function   creatMyCriteriaList(){







      criteriaContentList.style.display="block";
      criteriaContentList.children[0].style.color="red";
      criteriaContentList.children[1].style.color="blue"; 
     
      // Create ordered list items
    //   var li = [liPasswordLength];
    //   if(hasUpperLetter) li.push(liUpperCase);
    //   if(hasLowerLetter) li.push(liLowerCase);
    //   if(hasNumbers)li.push(liNumeric);
    //   if(hasSpecialLetters) li.push(liCharaters);

    //   // Add text for list items
    //   li[0].textContent ="password length is:  "+passwordLength;
    //   li[0].style.display="block";
    //   var i=1;console.log(i);
    //   if(hasUpperLetter){i++;console.log(i);  li[i].textContent = "Upper case letters are included.";} 
    //   if(hasLowerLetter){i++;console.log(i);  li[i].textContent = "Lower case letters are included.";}
    //   if(hasNumbers){i++;console.log(i); li[i].textContent = "Numeric are included";}
    //   if(hasSpecialLetters){i++;console.log(i); li[i].textContent = "Special characters are included.";}

    //   listEl.appendChild(li[0]);
    //   for (var j=1;j<i;j++){
    //   listEl.appendChild(li[j]);
    // }
      

      // listEl.setAttribute("style", "background:#f2f2f2; padding:20px;");


    

      // Append ordered list 
      // myCriteria.appendChild(listEl);

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

      return password;
}// end of function generatePassword

