export function isLeap(year: number) {
  let leap: boolean
  if((year%4)===0){
    if((year%100)===0){
      if((year%400)===0){
        leap = true
      } else{
        leap = false
      }
    } else{
      leap = true
    }
  } else {
    leap = false
  }
  return leap
}
