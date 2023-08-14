/**
 *
 * @param text - text to display
 * @param count - count for check text
 * @returns
 */

export const textFormatter = (text: string, count: number) => {
  const words = text.split(' ');
  const lastWord = words[words.length - 1];
  if (words.length > count) {
    const truncatedLastWord = lastWord.slice(0, count) + '...';
    words[words.length - 1] = truncatedLastWord;
  }
  return words.join(' ');
};
