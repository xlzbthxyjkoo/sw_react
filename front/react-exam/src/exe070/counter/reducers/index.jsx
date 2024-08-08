import {ADD, SUB} from '../actions';
import { combineReducers } from 'redux';

const initState = {
    count: 0
};false
const data = (state = initState, action) => {
    switch(action.type) {
        case ADD:
            return {count: state.count + 1};
        case SUB: 
            return {count: state.count - 1};
        default:
            return state;
    }
}

const Reducer = combineReducers({
    data
});

export default Reducer;