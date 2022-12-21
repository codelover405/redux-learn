import { applyMiddleware , createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { reducer as reduxFormReducer } from 'redux-form';   
import { composeWithDevTools } from "redux-devtools-extension";





// export const store = createStore(
//     reducers,{} ,applyMiddleware(thunk),
// )

export const store = createStore(reducers,
    composeWithDevTools(applyMiddleware(thunk)) 
)
