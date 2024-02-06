
const InitialState = " ";

export const CakeReducer=  (state=InitialState,action)=>{

    if(action.type === "BLUE_BERRY"){
        return action.cake_list
    }

    return state
}