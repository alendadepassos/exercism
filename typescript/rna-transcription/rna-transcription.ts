export function toRna(dna:string) {
    
  let rna = dna.split('');
 for (let i = 0; i <= rna.length; i++) {
    switch(dna[i]){
      case 'C':
        rna[i] = 'G'
      break;
      case 'G':
        rna[i] = 'C'
      break;
      case 'A':
        rna[i] = 'U'
      break;
      case 'T':
        rna[i] = 'A'
      break;
      default:
        rna[i] = ''
    }
  }
return rna.join('');
}