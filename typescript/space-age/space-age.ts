export function age(planet: string, seconds: number): number {

  const terra = (seconds/31557600)
  let idade = terra

  switch(planet){
    case 'terra': 
    idade = terra
    break;

    case 'mercury': 
    idade = terra/0.2408467
    break;

    case 'venus': 
    idade = terra/0.61519726
    break;

    case 'mars': 
    idade = terra/1.8808158
    break;

    case 'jupiter': 
    idade = terra/11.862615
    break;

    case 'saturn': 
    idade = terra/29.447498
    break;

    case 'uranus': 
    idade = terra/84.016846
    break;

    case 'neptune': 
    idade = terra/164.79132
    break;
    default: idade = terra
  }
  idade = parseFloat(idade.toFixed(2))
  return idade
}
