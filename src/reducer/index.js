import { combineReducers } from "redux";
import crudReducer from "./crudReducer";

const rootReducer = combineReducers({
    API : crudReducer
})

export default  rootReducer