

export const COLORS = ['black', 'brown','red','orange','yellow','green','blue','violet','grey','white'];

export const colorCode = (colorname:string) => {

  let colornumber

  for (let index = 0; index <= 10; index++) {
    if(colorname==COLORS[index]){
      colornumber = index
    }    
  }

  return colornumber
}