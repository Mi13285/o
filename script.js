function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .filter((val) => /[a-za]/.test(val))
    .join("");
}

console.log(reverseLetter("krishan"));
