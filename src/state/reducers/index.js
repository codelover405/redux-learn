import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import ss from "./ss";
import name from "./name";
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
    amount:amountReducer,
    inputs:ss,
    name:name,
    form: reduxFormReducer, // mounted under "form"
})

export default reducers;