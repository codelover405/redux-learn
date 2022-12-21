import { type } from "@testing-library/user-event/dist/type"




export const Add = (amount) => {
    return (Dispatch) => {
        Dispatch({
            type: "add",
            payload: amount
        })
    }
}

export const Less = (amount) => {
    console.log(amount);
    return (Dispatch) => {
        Dispatch({
            type: "less",  
            payload: amount
        })
    }
}


export const Multi = (amount) => {
    console.log(amount);
    return (Dispatch) => {
        Dispatch({
            type: "multi",
            payload: amount
        })
    }
}


export const Work = () => {
    return (dd) => {
        dd({
            type: "Yes",
        })
    }
}

// $$$$$$$$$$$$

export const addTopping = (inputs) => {
    return (dd) => {
        dd({
            type: "addTopping",
            payload: inputs
        })
    }
}



export const addname=(name)=>{
    return (nn)=>{
        nn({
            type:"name",
            payload:name
        })
    }
    }

