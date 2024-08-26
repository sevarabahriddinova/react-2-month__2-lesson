import ProjectStore from "./store";
import { useReducer } from "react";
import { initialState,reducer } from "./reduser";

const StoreProvider=({children})=>{
    return <ProjectStore.Provider value={useReducer(reducer,initialState)}>
        {children}
    </ProjectStore.Provider>
}

export default StoreProvider