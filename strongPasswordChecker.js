const digits=[0,1,2,3,4,5,6,7,8,9];
const lAlpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const cAlpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let dig=false;
let lAl=false;
let cAl=false;

const password="";

let n=password.length;

for(let i=0;i<digits.length;i++){
    if(password.includes(digits[i])){
        dig=true;
        break;
    }
}

for(let i=0;i<lAlpha.length;i++){
    if(password.includes(lAlpha[i])){
        lAl=true;
        break;
    }
}

for(let i=0;i<cAlpha.length;i++){
    if(password.includes(cAlpha[i])){
        cAl=true;
        break;
    }
}
let k=0;
for(let i=0;i<n-2;i++){
    if(password[i]==password[i+1]&& password[i+1]==password[i+2]) k+=1;
}

let p=0;
if(n<6)p=6-n;

if(n>6){
    if(!dig)p+=1;
    if(!lAl) p+=1;
    if(!cAl)p+=1;
}

console.log(p+k);