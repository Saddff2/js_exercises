
let x = 5
let y = 10
function average(x,y) {
    return console.log((x+y) / 2)
 }
 
function max (x,y) {
    console.log(Math.max(x,y))
 }

let f = average
let result = f(10,25)
f = max


console.log('hello')

const average1 = (x,y) => (x+y) / 2
console.log(average1(20,10))

const multiplyby10x = (x) => x * 10
console.log(multiplyby10x(25))

const dieToss = () => Math.trunc(Math.random()*6 )+ 1
console.log(dieToss())


arr = [1,2,3,4,5,6,67,7]

arr.forEach((element, index) => { console.log(`${index}: ${element}`)})

arr.forEach(element => {console.log(`${element}`)})

