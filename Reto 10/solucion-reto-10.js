function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]; 
  let amount = change
  return coins.reverse().map(coin => {
    const coinUsed = Math.floor(amount / coin)
    amount = amount - (coinUsed * coin)
    return coinUsed
  }).reverse()
}
//console.log(getCoins(12)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
//getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
//getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(17)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
//console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
