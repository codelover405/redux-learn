import  onSubmit  from "../../Contact"
import  View  from "../../component/View";
const num = onSubmit



const reducer = (state = num, action=View) => {
    switch (action.type) {
        case "name":
            return state + action.payload
        default: return state
    }
}  //reducer



export default reducer;