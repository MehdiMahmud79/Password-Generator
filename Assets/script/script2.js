function generatePasswordd(){

    var criteriaList = {
        // Properties are made up of key-value pairs
        


      
      };
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














}