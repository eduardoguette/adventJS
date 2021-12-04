export default function contarOvejas(ovejas) { 
  return ovejas.filter(oveja => {
    const nameToLowerCase = oveja.name.toLowerCase()
    return ((oveja.color === "rojo") && nameToLowerCase.includes("a") && nameToLowerCase.includes("n"))
  })
}