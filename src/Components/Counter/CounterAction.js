
// action -> object{ type:'', data:''(optional)}

console.log("CounterAction js");

// 1. Action

export const Increment = ()=>{

    // returns action {} object.
    return{
        type:"INCREMENT"
    }
}
export const Decrement = ()=>{

    return{
        type:"DECREMENT"
    }
}