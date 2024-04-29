const initialState = {
   todoList: [{ id: new Date().getTime(), text: "Work hard", completed: false }],
 }
 
 //? action types
  const ADD = "ADD"
  const DEL = "DEL"
  const CLR = "CLR"
  const TOGGLE = "TOGGLE"

 //? action creator funks
 export const addTodo = (payload) => ({ type: ADD, payload: payload })
 export const clearTodo = (payload) => ({ type: CLR})
 
 export const todoReducer = (state = initialState, { type, payload }) => {
   switch (type) {
     case ADD:
       return {
         todoList: [
           ...state.todoList,
           { id: new Date().getTime(), text: payload, completed: false },
         ],
       }
       case CLR:
         return initialState
     default:
       return state
   }
 }
 