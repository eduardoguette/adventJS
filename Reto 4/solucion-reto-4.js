export default function createXmasTree(height) {
  let arbol = '';
  for (let i = 1; i <= height; i++) {
    arbol += `${'_'.repeat(height - i) + '*'.repeat(i * 2 - 1) + '_'.repeat(height - i)}\n`;
    if(i === height){
      arbol += `${'_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)}\n`.repeat(2)
    }
  }
  return arbol.trim();
}
