const arr = "";




const work = (state = arr, action) => {
    switch (action.type) {
        case "Yes":
            return state + action.payload
        default: return state
    }
}  //reducer


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addTopping":
            return state + action.payload
        default: return state
    }
}  //reducer



const initialState = {
    toppings: ['pepperoni', "okay"],
    gluten: true,
}




export default work