export default function maxProfit(prices) {
  let values = [];  
  prices.forEach((price, i) => { 
    const [compra, venta] = values
    const vAnt = prices[i > 0 ? i - 1 : i] 
    if(values.length <= 0 && (vAnt < price))
       values = [...values, vAnt]
    if(compra < price && values.length < 2)
       values = [...values, price]
    if(values.length === 2 && price > venta){
      values = [compra, price]
    } 
  })
  if(values.length === 0) return -1
  return values[1] - values[0]
}