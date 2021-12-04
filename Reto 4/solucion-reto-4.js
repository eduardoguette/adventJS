function createXmasTree(height) {
  let arbol = ''; 
  for (let i = 1; i <= height; i++) {
    const space = '_'.repeat(height - i);
    const space_bottom = '_'.repeat(height - 1);
    const ramas = '*'.repeat(i * 2 - 1);
    arbol += `${space + ramas + space}\n`;
    if (i === height) {
      arbol += `${space_bottom + '#' + space_bottom}\n`.repeat(2);
    }
  }
  return arbol.trim();
}
console.log(createXmasTree(5))
