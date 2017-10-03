function postfix_eval(expr) {
var arr = expr.split(/\s+/).map(ele => (!isNaN(ele)) ? +ele : ele);
  var tmp = [];
  var oper1,oper2;
  if(arr === [""]) return 0;
  for(let i = 0;i < arr.length;i++){
    if(!isNaN(arr[i])) tmp.push(arr[i]);
    else{
      oper1 = tmp.pop();
      oper2 = tmp.pop();
      tmp.push(compute(oper2,oper1,arr[i]));
    }
  }
  return tmp.pop();
}

function compute(num1,num2,operator){
  switch(operator){
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return num1 / num2;
    default: return 0;
  }
}

function postfix_notation(expr){
var arr = expr.split(/\s+/).map(ele => (!isNaN(ele)) ? +ele : ele);
  var res = [];
  var tmp = [];
  if(arr === [""]) return [];
  for(let i =0;i < arr.length;i++){
    if(!isNaN(arr[i])) res.push(arr[i]);
    else if(arr[i] === ")"){
      while(tmp[tmp.length - 1] !== "("){
        res.push(tmp.pop());
      }
      tmp.pop();
    }
    else{
      while((tmp.length !== 0) && (priority(tmp[tmp.length - 1]) <= priority(arr[i])) && (arr[i] !== "(")){
        res.push(tmp.pop());
      }
      tmp.push(arr[i]);
    }
  }
  while((tmp.length !== 0)){
    res.push(tmp.pop());
  }
  return res;
}
console.log(postfix_notation("5 * ( 6 / 7 * ( 10 + 11 / 12 ) )"));

function priority(operator){
  switch(operator){
    // case "-": return 1;
    case "*": return 2;
    case "/": return 2;
    case "%": return 2;
    case "+": return 3;
    case "-": return 3;
    case ")": return 4;
    case "(": return 5;
    default: return 0;
  }
}