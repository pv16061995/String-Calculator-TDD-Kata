function Add(numbers) {
  if (!numbers) return 0;

  let delimiters = [',', '\n'];
  let numberSection = numbers;

  // Check for custom delimiter syntax
  if (numbers.startsWith('//')) {
    const delimiterSectionEnd = numbers.indexOf('\n');
    const delimiterSection = numbers.slice(2, delimiterSectionEnd);
    numberSection = numbers.slice(delimiterSectionEnd + 1);

    // Check for multiple or multi-character delimiters
    const delimiterMatches = delimiterSection.match(/\[([^\]]+)\]/g);
    if (delimiterMatches) {
      delimiters = delimiterMatches.map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterSection];
    }
  }

  // Create delimiter regex
  const delimiterRegex = new RegExp(delimiters.map(escapeRegExp).join('|'));

  const numList = numberSection
    .split(delimiterRegex)
    .map(n => parseInt(n, 10))
    .filter(n => !isNaN(n));

  // Handle negatives
  const negatives = numList.filter(n => n < 0);
  if (negatives.length) {
    throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
  }

  // Ignore numbers > 1000
  return numList.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
}

// Escape regex special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


try {
  console.log(Add(""));                            // 0
  console.log(Add("1"));                           // 1
  console.log(Add("1,2"));                         // 3
  console.log(Add("1,2,3"));                       // 6
  console.log(Add("1\n2,3"));                      // 6
  console.log(Add("//;\n1;2"));                    // 3
  console.log(Add("//[***]\n1***2***3"));          // 6
  console.log(Add("//[*][%]\n1*2%3"));             // 6
  console.log(Add("//[***][%%%]\n1***2%%%3"));     // 6
  console.log(Add("2,1001"));                       // 2
  console.log(Add("1,-2,3,-5"));                   // Going in catch block 
} catch (e) {
  console.error(e.message); // negatives not allowed: -2, -5
}