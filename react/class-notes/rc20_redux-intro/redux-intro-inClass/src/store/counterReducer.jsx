const initialState = {
   count: 0,
   token: null,
}


export const counterReducer = (state=initialState, action) => {
   
   switch (action.type) {
      case "ARTTIR":
         return {count:state.count+1}
         
      case "AZALT":
         return {count:state.count-1}
         
      case "SIL":
         return {count:0}
         
      default:
         return state
         
   }

}