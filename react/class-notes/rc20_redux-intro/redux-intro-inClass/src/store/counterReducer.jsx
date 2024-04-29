const initialState = {
   count: 0,
   token: null,
}

export const arttir = "ARTTIR"
export const azalt = "AZALT"
export const sil = "SIL"

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