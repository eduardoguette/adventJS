export default function listGifts(letter) {
  let array = letter.split(' ');
  array = array.filter((el) => !el.includes("_") && el).reduce((a, b) => (a[b] ? (a[b] += 1) : (a[b] = 1), a), {}); 
  return array
}
