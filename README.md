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
