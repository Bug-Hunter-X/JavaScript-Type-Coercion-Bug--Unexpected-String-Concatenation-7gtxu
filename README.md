# JavaScript Type Coercion Bug: Unexpected String Concatenation

This example demonstrates a common JavaScript bug caused by type coercion. The `foo` function performs addition, but when it receives strings instead of numbers, it concatenates them instead of adding them numerically. This can lead to unexpected results if not handled carefully.

## Bug Description
The `foo` function is designed to add two numbers. However, if you pass strings to it, JavaScript's type coercion mechanism causes it to concatenate the strings instead of performing numerical addition. This is a common pitfall for developers unfamiliar with JavaScript's loose typing.

## Solution
The solution involves explicit type conversion using `parseInt()` or `parseFloat()` before performing the addition. This ensures that numerical addition is performed, irrespective of the input types.

## How to reproduce
1. Clone this repository.
2. Run `bug.js`.
3. Observe the unexpected string concatenation in the output. Then run `bugSolution.js` to see the fixed version.