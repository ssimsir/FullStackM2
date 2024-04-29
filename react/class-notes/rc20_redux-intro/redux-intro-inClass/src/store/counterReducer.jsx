const initialState = {
   count: 0,
   token: null,
}

//?action typlerinr değişlen oalrak tanımlanması bizi bir çok case sebntirive hatasında kurtaracaktır
export const arttir = "ARTTIR"
export const azalt = "AZALT"
export const sil = "SIL"

//? action creater functionlarının tanımlanması

export const arttirma = () =>({type:arttir})

export const azaltma = () => ({type:azalt})


export const silme = () => {
   return {type:sil}
}


//?
export const counterReducer = (state=initialState, action) => {
   
   switch (action.type) {
      case arttir:
         return {count:state.count+1}
         
      case azalt:
         return {count:state.count-1}
         
      case sil:
         return {count:0}
         
      default:
         return state
         
   }

}