
// 2. Reducer.( ties the action(object with property type: that decribes action.) and store.)

export const CounterReducer = (state=0,action)=>{

    console.log("Reducer here")

    switch(action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            if(state>0)
                return state-1;
        default:
            return state;
    }

}