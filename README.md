# Unexpected NaN Result with Null and Undefined Comparisons

This repository demonstrates a subtle bug in JavaScript related to handling null and undefined values in comparisons.

The `bug.js` file contains code that attempts to handle null and undefined values, but incorrectly manages undefined resulting in NaN.

The `bugSolution.js` file provides a corrected version, showing how to reliably handle both null and undefined to avoid unexpected behavior.

## Bug Description
The original code uses strict equality (`===`) to compare the input parameter to `null`. While this works for `null`, it fails to correctly handle `undefined` which leads to `NaN` when attempting arithmetic operations.

## Solution
The solution uses loose equality (`==`) or explicit checks for both `null` and `undefined` to ensure the function behaves correctly in all scenarios, preventing `NaN` results.