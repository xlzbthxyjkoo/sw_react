import {ACT} from '../actions';
import { combineReducers } from 'redux';

const initState = {
    strInStore: 'react'
};

const data = (state = initState, action) => {
    switch(action.type) {
        case ACT:
            return {strInStore: state.strInStore + '_Programmer'};
        default:
            return state;
    }
};

const Reducer = combineReducers({
    data
});

export default Reducer;