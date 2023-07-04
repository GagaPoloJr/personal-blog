export const textFormatter = (text: string, count: number) => {
  const words = text.split(" ");
  const lastWord = words[words.length - 1];
  console.log(words,lastWord)
  if (words.length > count) {
    const truncatedLastWord = lastWord.slice(0, count) + "...";
    words[words.length - 1] = truncatedLastWord;
  }

  return words.join(" ");
};
