// function test(){
//   console.log(Array.prototype.map.call(arguments,console.log))
// }
// test(1,2)

a = {a:1,b:2,c:3}
// for(let i of Object.keys(a)){
//   console.log(`${i} => ${a[i]}`)
// }
// for(let key in a){
//   console.log(`${key} => ${a[key]}`)
// }

// Object.keys()

let lst = [1,2,3,4,5]
let filter = val => val % 2
// console.log(`filtered ${lst.filter(filter)}`)

function sum(acc,val,idx){
  console.log(`found ${val} at ${idx} , acc = ${acc}`)
  return acc + val
}
console.log(`sum: ${lst.reduce(sum,0)}`) // 起始值設定為0

console.log(`sum: ${lst.reduce(sum)}`) // 起始值設定為第一個item


function createState(){
  let state = {}
  // return state
  return Promise.resolved(state)
}

doSomething()
  .then()
  .then()

createState({defaults})
  .then(doSomething)
  .then(a)
  .then(b)
  .then(c)
  .then(aggregate)

createState()
  .then(state => Promise.all([a(state),b(state),c(state)]).then(x => state)) // 平行運算
  .then(aggregate)

  createState()
  .then(state => Promise.all([a(state),b(state),c(state)])) // 平行運算
  .then(states => states[0])
  .then(aggregate)