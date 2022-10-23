export function decodedResistorValue(colornames: string[]) {

    const colorsnumber = []
  
    switch(colornames[0]){
      case 'black':
      colorsnumber[0] = 0
        break;
    
      case 'brown':
      colorsnumber[0] = 1
        break;
    
      case 'red':
      colorsnumber[0] = 2
        break;
      
      case 'orange':
      colorsnumber[0] = 3
        break;
  
      case 'yellow':
      colorsnumber[0] = 4
        break;
  
      case 'green':
      colorsnumber[0] = 5
        break;
  
      case 'blue':
      colorsnumber[0] = 6
        break;
  
      case 'violet':
      colorsnumber[0] = 7
        break; 
  
      case 'grey':
      colorsnumber[0] = 8
        break;
  
      case 'white':
      colorsnumber[0] = 9
        break; 
  
    }
    
    switch(colornames[1]){
      case 'black':
      colorsnumber[1] = 0
        break;
    
      case 'brown':
      colorsnumber[1] = 1
        break;
    
      case 'red':
      colorsnumber[1] = 2
        break;
      
      case 'orange':
      colorsnumber[1] = 3
        break;
  
      case 'yellow':
      colorsnumber[1] = 4
        break;
  
      case 'green':
      colorsnumber[1] = 5
        break;
  
      case 'blue':
      colorsnumber[1] = 6
        break;
  
      case 'violet':
      colorsnumber[1] = 7
        break; 
  
      case 'grey':
      colorsnumber[1] = 8
        break;
  
      case 'white':
      colorsnumber[1] = 9
        break; 
  
    }

    let escala, numerico;

    switch(colornames[2]){
      case 'black':
        escala = 'ohms'
        colorsnumber[0] = colorsnumber[0]*10
        numerico = colorsnumber[0]+colorsnumber[1]
      break;

      case 'brown':
        escala = 'ohms'
        colorsnumber[0] = colorsnumber[0]*100
        numerico = colorsnumber[0]+(colorsnumber[1]*10)
      break;

      case 'red':
        escala = 'kiloohms'
        numerico = colorsnumber[0]
      break;

      case 'orange':
        escala = 'kiloohms'
        colorsnumber[0] = colorsnumber[0]*10
        numerico = colorsnumber[0]+colorsnumber[1]
      break;

      case 'yellow':
        escala = 'kiloohms'
        colorsnumber[0] = colorsnumber[0]*100
        numerico = colorsnumber[0]+(colorsnumber[1]*10)
      break;

    }
    
    const resposta = ''+ numerico +' '+escala+''
    return resposta
  }
  
