export default function sumPairs(numbers, result) {
  let resultArray = null
  for (let i in numbers) {
    for (let x in numbers) {
      if (numbers[i] + numbers[x] == result && x !== i)
        resultArray = [numbers[i], numbers[x]]
    }
    if (resultArray) break;
  }
  return resultArray
}