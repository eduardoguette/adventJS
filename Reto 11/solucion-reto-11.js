function shouldBuyFidelity(times) {
  let totalAnual = 250;
  const precioEntrada = 12;
  for (let i = 1; i <= times; i++) {
    totalAnual = totalAnual + 12 * Math.pow(0.75, i);
  }
  return precioEntrada * times > totalAnual
}
// Tarjeta fidelidad: 250$ + (12$ * 0,75) + (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

console.log(shouldBuyFidelity(1)); // false -> Mejor comprar tickets de un sólo uso
//shouldBuyFidelity(100)
