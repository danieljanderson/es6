# es6

This read me is for notes on es6 , es7 ,es8. Things that have changed that I am going to make it a point to start doing from now on.

# template lterals

Template Literals takes place of concating variables to strings

this ` symbol is the same as a "" or a '' in es5 but it is used to create template literals.
ie
const name = "rob"

const hello = `Hello, ${name}`;
console.log(hello)
that will out put "hello , rob"

Template Literals takes place of concating variables to strings

# Multiline

old way

const string ='It was a rainay day.\n'+
'It was very rainy day.'
console.log(string)

will out put

'It was a very rainy day
It was very rainy.'

new way
const string = `It was a rainay day. It was very rainy day.`
console.log(string)

will out put

"It was a very rainy day
It was very rainy."

# expressions

const anExpression = `43 * 1902 = ${43*1902}`
console.log (anExpression)
will display
"43 \* 1902 = 81786"

your cant do IF statements because those are statements

but you could use a ternary.

let isMember = true ;
const aTernary = `Your price is ${isMember ? "$2:00" : "$4.00}.`

this will out put
"your price is two dollars"

as a side note a Ternary statement is this....
Condition ? value if true : value if false

# tagged templates

the old way

let harry = `Mr. and Mrs. Dursley, of number four, Privet Driver`
let lotr = `this is just for content`
let orwell = `so much to say`
let lines = [
harry,
lotr,
orwell
];
function buildHTML(){
console.log("it works")
}
const result = buildHTML();

will out put
"it works"

the new way

let harry = `Mr. and Mrs. Dursley, of number four, Privet Driver`
let lotr = `this is just for content`
let orwell = `so much to say`
let lines = [
harry,
lotr,
orwell
];
function buildHTML(strings , expression){
console.log(strings)
console.log(expression)
}
const result = buildHTML `<li>${lines}</li>`;

will out put
['<li>','</li>][`mr. and mrs. dursley, of number four, privet driver`,`this is just for content`,`so much to say`]

breakdown
the reason why this happens is this. buildHTML is evoked. the only sting elements in the line `<li>${lines}</li>` are the <li> tags.

<li> is one string element and get stored into the 0 position of the first array and </li> is the second string element and gets stored in the 1 position of the array.

then the expression happens which calls the array of lines and displays them.

another example
let harry = `Mr. and Mrs. Dursley, of number four, Privet Driver`
let lotr = `this is just for content`
let orwell = `so much to say`
let lines = [
harry,
lotr,
orwell
];
function buildHTML(strings , expression, experession2){
console.log(strings)
console.log(expression)
console.log(expression2)
}
const result = buildHTML `<li>${lines[0]}${lines[1]}</li>`;

will out put
['<li>','</li>][`mr. and mrs. dursley, of number four, privet driver`,`this is just for content`]

it will only display two of the three lines because I only have two expressions in the template. lines[0] is one expression and lines[1] is the second.

another example

let harry = `Mr. and Mrs. Dursley, of number four, Privet Driver`
let lotr = `this is just for content`
let orwell = `so much to say`
let lines = [
harry,
lotr,
orwell
];
function buildHTML(strings , expression){
const newHTML = lines.map(function(line){
return `${stings[0]}${line}${stings[1]}`
})
return newHTML
}
const result = buildHTML `<li>${lines}</li>`;

will out put
[`<li>mr. and mrs. dursley, of number four, privet driver</li>`,`<li>this is just for content</li>`,`<li>so much to say</li>`]

#default values in functions
function getArea (x,y,s = 'square'){
if (s===square){
return x*y
}
else if (s==='triangle'){
return (x*y)/2
}
}
getArea(2,3)
this will return 6 because the defualt value is square

if I call it like this
getArea(2,3,'triangle')
it will return 3 because the triangle will over ride the square definition

# restful arguments in functions

every function in javascrip has access to a argument object. The argument object is a Array-like object corresponding to the arguments passed to a function.

function findHighest(upperLimit){
console.log(arguments)
}
findHighest(80,99,88,77,88,87,67,56,7,87,67,57,87)
findHighest will out put an object like {80,99,88,77,88,87,67,56,7,87,67,57,87}

if instead I would write the function like this
function findHighest(upperLimit,...numList){
console.log(arguments)
}
findHighest(80,99,88,77,88,87,67,56,7,87,67,57,87)
it would out put an array of [99,88,87,67,56,7,87,67,57,87]
restful arguments will have to be last because it takes what ever is left over and put into an array.

# Spread Syntax

Rest operator = I don't know how many vars(consts,or lets) your are sending, so I'll put whatever else you sent in an array

ex
function sum(...numberList){
return numberList.reduce(
function(total,num)
return total+num
)
}
const restWay = sum(1,2,3,4,5)
console.log(restWay)

that will output
15

spread syntax = My stuff is already an array. You've got separate params, unpack it.
ex
function sum (a,b,c,d,e){
return a+b+c+d+e
}
const numbers = [1,2,3,4,5]
const spreadWay = sum(...numbers)
console.log(spreadWay)
will out put
15

another example
function memberDiscount (price, discount =.2 , tax=.06){
return (price - (price + discount)) \* (1+tax)
}
const member1 = [48.99 , .3 , .09]
const member1FinalPrice = memberDiscount(...member)
console.log(member1FinalPrice)

another example
function aReducer (state, action){
// this makes a copy of state
let newState = {...state}
newState.newProperty = action.payload

console. log(newState)
will out put
{a:1,b:2,c:3, newProperty:30}

console.log(state)
will out put
{a:1,b:2,c:3}
}
const currState = {
a:1,
b:2
c:3
}
const action ={
type:"done",
payload: 30
}
aReducer(currState,action)

---

## 🧐 Problem Statement <a name = "problem_statement"></a>

# its also good for copying arrays

let myArray2 = [1,2,3,4]
let myArray3 = [...myArray2]
myArray3.push(5)
console.log(myArray2)
will out put
[1,2,3,4]

console.log(myArray3)
will out put
[1,2,3,4,5]

# arrow functions

ex
old way

const myArray =[1,2,3]
myArray.map(function(elem,i){
console.log(elm)
})

arrow function way
myArray.map((elem,i)=>{
console.log(elem)
})

when you write an anonymous function using the word function it creates a new this

however the arrow function doesn't. It will take the context of where your at.

for example
arrow function way
myArray.map((elem,i)=>{
console.log(elem)
})
the context of this function is the window or the global `this`.

Another words if you see an arrow function and you want to know what the context is look for the last time the word function was written and thats your `this`.

A common example is this
function Timer(){
setInterval(()=>{
console.log(this)
},250)
}
const tier = new Timer()

this will out put Timer{} ever 250 miloseconds

# object literal

primary ways of creating objects

let x = new Object()

let x = Object.create(null)

let x = {

}

the old way
const stuffFromElsewhere = {
name: "Rob",
career: "Teacher",
language:"JS",
aMethod:function(){
console.log("I teach")
}
}
stuffFromElsewhere.aMethod()
will out put
"I teach"

the update on object literal is this
if what you are naming on the left is going to be the same name the right you can only write it once.

for example if I had a name property name and a method I can write it
const newThing{
name,
aMethod(){
console.log("I teach")
}
}

# Desstructuring

getArea({width: 70,height:200})
function getArea({width,height}){
console.log(width)
}
it will out put 70

you can also write it like
function getArea({height,width}){
console.log(width)
}
it will out put 70 because its looking for keys not values.

you can even call it like this
getArea({height:200,width})

it will still out put 70.

last example
this is the awful way
function userProfile(userData){
const name = userData.name
const address = userData.address
}

better way
function userProfile(userData){
const{name,address} = userData
}

the bestway
function userProfile(name,address)

# Classes
The old way
function SuperHero(name,strength,speed,weapon,cape){
  this.name = name
  this.strength = strength
  this.speed = speed
  this.weapon = weapon
  this.cape = cape
  this.goodHero = true
  this.powerUp = function(){
    this.strength +=5
  }
}
note you cant deconstruct because there is no way to assign anything to the this key word.

let hero1 = new SuperHero("hank",18,5,"Fist",true)

this is a bad way to write a class in javascript because each new object will get its own powerup function

instead it should be written as 
SuperHero.prototype.goodHero = true
Super.prototype.powerUp = function(){
  this.strength += 5
}
This is better because all the objects you create will be looking at this one function.  So the computer only stores it once in memory as oppose to if you write it inside the constructor to as many objects as you created.

the es 6 way
Replace the constructor with the "class" keyword


class SuperHero{
  constructor(name,strength,speed,weapon,cape){
    this.name = name
    this.strength = strength
    this.speed = speed
    this.weapon = weapon
    this.cape = cape
    this.goodHero = true
   }
   powerUp(){
     this.strength+=5
   }
}
let hero = new SuperHero("Hank",18,5,"Fist",true)

# setters and getters
Setters are a function in the class that modifies a private variable in the same class

getters are a function in a class that returns a value of a private variable.

An example:

class SuperHero{
  constructor(name,strength,speed,weapon,cape){
    this.name = name
    this.strength = strength
    this.speed = speed
    this.weapon = weapon
    this.cape = cape
    this.goodHero = true
   }
   powerUp(){
     this.strength+=5
   }
   get name(){
     console.log("getting name")
   }
   set  name(newName){
     console.log("setting name")
     this.name = newName
   }
}
const hankDetails = ["Hank",18,5,"Fist",true]
let hero = new SuperHero(...hankDetails)

this will cause a recursive issue.  if you add an _ in front of the variables they will protect them.

# Static Methods

Static methods are good functions that are run through the class not object data.  its good to package funtions together.  
for example

function add (x,y){
  return x+y
}
console.log(add(2,5))
would out put 7 but I would need to copy and past that function in another project if I would want to reuse it.  Plus it could have naming conflicts.

I can now write it like this which will protect the global scope.
class DoMath{
  static add(x,y){
    return x + y
  }
}
let x = DoMath.add(2,5)
console.log(x)
and you will get 7