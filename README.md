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
