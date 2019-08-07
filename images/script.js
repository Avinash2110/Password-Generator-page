var keyList="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var temp="";
function generatePassword(len){
    temp="";
    for(i=0;i<len;i++){
        temp+=keyList.charAt(Math.floor(Math.random()* keyList.length));
    }
    return temp;
}

function generate(passLength){
    document.passGen.output.value= generatePassword(passLength);
}