const num = 3


// const reducer = (state=num,action)=>{
//     if(action.type === "add"){
//         return state + action.payload;
//     }
//     else if(action.type === "less"){
//         return state - action.payload;
//     }
//     else{
//         return state;
//     }
// }  //reducer


const reducer = (state = num, action) => {
    switch (action.type) {
        case "add":
            return state + action.payload
        case "less":
            return state - action.payload
        case "multi":
            return state * action.payload
        default: return state
    }
}  //reducer


export default reducer;