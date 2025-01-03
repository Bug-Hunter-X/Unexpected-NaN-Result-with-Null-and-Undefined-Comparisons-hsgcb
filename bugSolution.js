function foo(x) {
  if (x == null) { // Use loose equality to handle both null and undefined
    return 0; 
  }
  return x + 1; 
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0