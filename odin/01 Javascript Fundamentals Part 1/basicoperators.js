// Operands: what operators are applied to. Also called arguments.
// x = 5 * 2, left operand is 5, right operand is 2
// Unary: one operand, e.g. -x
// Binary: two operands, e.g. x + y

// Unary plus: converts a non-numerical operand to a number. Same as Number(...).

// Comma


// Remember: when multiple + signs encounter a string, the rest are concatenated strings
"" + 1 + 0 // "10" // The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
"" - 1 + 0 // -1 // The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.

true + false // 1 // The addition with a string appends the number 5 to the string.
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px // not 45px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // concatenate: " -9 5 " // The addition with a string appends the number 5 to the string.
"  -9  " - 5 // -14 // The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
null + 1 // 1 // null becomes 0 after the numeric conversion.
undefined + 1 // NaN // undefined becomes NaN after the numeric conversion.
" \t \n" - 2 // -2 // Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

let a = prompt("First number?", 1);
let b = prompt("second number?", 2);
alert( +a + +b);