function mostPoeticalWord(poem) {
  let sum = "";
  if (poem.includes("k" || "x")) {
    return sum + 1;
  } else {
    return false;
  }
}

console.log(mostPoeticalWord("kale salad"));
