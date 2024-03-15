import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import {thunk} from 'redux-thunk'
import rootReducer from './reducers'

/* First thing when implementing redux is to implement the 'store'. Not sure what that is exactly.*/

const initialState = {

}

const middleWare = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store