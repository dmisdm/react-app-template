import reducers from './reducers';
import { createStore } from "redux";
export const configureStore = () => createStore(reducers);
export default configureStore();