# String-Calculator-TDD-Kata

A simple `Add(string numbers)` function that parses and sums numbers from a string input. Built as a progressive coding kata challenge with support for multiple delimiters, newlines, error handling, and more.

---

## 🚀 Features

- ✅ Supports empty strings: `""` → `0`
- ✅ Comma-separated numbers: `"1,2"` → `3`
- ✅ Newline support: `"1\n2,3"` → `6`
- ✅ Custom single-char delimiter: `"//;\n1;2"` → `3`
- ✅ Custom multi-char delimiter: `"//[***]\n1***2***3"` → `6`
- ✅ Multiple delimiters: `"//[*][%]\n1*2%3"` → `6`
- ✅ Multiple multi-char delimiters: `"//[***][%%%]\n1***2%%%3"` → `6`
- ✅ Ignores numbers > 1000: `"2,1001"` → `2`
- ✅ Throws exception for negatives: `"1,-2,-3"` → ❌ `negatives not allowed: -2, -3`

---

## 🧠 Function Signature

```js
function Add(numbers: string): number
