export const initialState={
    
        email:"sevara@gmail.com",
        pasword:"12345678"
      
}

export const reducer=(state,action)=>{
  
    if(action.type==="CHANGE__EMAIL"){
      return{
        ...state,
        email:action.email
      }
    }
    else if(action.type==="CHANGE__PASWORD"){
      return{
        ...state,
        pasword:action.pasword
      }
    }
    else{
      return state
    }
   
   }