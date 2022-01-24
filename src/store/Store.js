import RootReducer from '../reducers/RootReducer'
import { createStore } from 'redux'

const finalStore = createStore(RootReducer);
export default finalStore;