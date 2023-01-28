// Floating point arithmetic is not always 100% accurate
// let x = 0.2 + 0.1;
// ...results in 0.30000000000000000004 for some reason
// Instead, do this:

let x = (0.2 * 10 + 0.1 * 10) / 10;

alert(x);

// Equals signs: == means equal; === means not equal.