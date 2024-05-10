import { createStore } from 'redux';
import rootReducer from '../components/Reducers';

const store = createStore(rootReducer);

export default store;
