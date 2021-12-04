export default function isValid(letter) {
  if (letter.includes('()')) return false;
  return /\(([^)][^{|[(())|}]+)\)|(\([A-z]\))/gm.test(letter);
}
