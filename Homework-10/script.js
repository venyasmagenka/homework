const my={
  name: 'Sasha',
  age: 18,
  high: 182,
  sayHello(name){
    console.log(`Hello ${name}`)
  }
}
my.sayHello('Vova')
// -------------------------------
const users=[
  {
    name:'Sasha',
    age: 18,
    isAdmine:true
  },
  {
    name:'Stepa',
    age:23,
    isAdmine:false
  },
  {
    name:'Vova',
    age:25,
    isAdmine:true
  }
]
let count=0
for(let i=0;i<users.length;i++){
  if(users[i].isAdmine==false){
    count++
  }
}
console.log(count)
// -------------------------------
function helloSay(name){
  console.log(`Hello ${name}`)  
}
helloSay('Sasha')
// -------------------------------
function arrayFunc(array){
  for(let i=0;i<array.length;i++){
    if(array[i]>10){
      console.log(array[i])
    }
  }
}
let Array=[1,2,8,9,10,11,13,15]
arrayFunc(Array)
// -------------------------------
function calc(x,y,oper){
  let result=null
  if(oper=='minus'){
    result=x-y
  }else if(oper=='plus'){
    result=x+y
  }else if(oper='multiplication'){
    result=x*y
  }else if(oper=='division'){
    result=x/y
  }
  return result
}
result=calc(3,2,'minus')
console.log(result)

