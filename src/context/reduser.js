import { saveToLocalStorage } from "../helpers/save-localstorage"

const initialState = JSON.parse(localStorage.getItem("user")) || []
const reducer=(state, action)=>{
      switch(action.type){
        case "Register" : {
          const newUser = [...state, action.values]
          saveToLocalStorage("user", newUser)
          return newUser
        }
        case "DELETE": {
          const kk = state.filter(e => e.email !== action.data)
          saveToLocalStorage("user", dd)
          return kk
        }
      }

   
   }

   export {reducer, initialState}

   