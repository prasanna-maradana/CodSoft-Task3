let inp='';
let temp='';
let p=null;
let o=null;

function appendNo(n){
  inp = inp+n;
  temp=temp+n;
  show(temp);
}

function appendOp(x){
  if(x==='')
    return;
  if(p!==null)
    result();
  p=inp;
  o=x;
  temp=inp+o;
  show(temp);
  inp='';
}

function result(){
  let z;
  const a= parseFloat(p);
  const b= parseFloat(inp);
  if(isNaN(a) || isNaN(b))
    return;
  switch(o){
    case '+':
      z=a+b;
      break;
    case '-':
      z=a-b;
      break;
    case '*':
      z=a*b;
      break;
    case '/':
      z=a/b;
      break;
    default:
      break;
  }
  inp=z.toString();
  o=null;
  p=null;
  temp='';
  show(inp);
}

function clearText() {
  inp='';
  temp='';
  p=null;
  o=null;
  show('0');
}

function show(val){
  document.getElementById('display').value=val;
}