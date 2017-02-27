import { createStore } from 'redux';
import {
    FETCH_ITEMLIST,
    FETCH_ERROR_ITEMLIST,
    RECEIVE_ITEMLIST,
    Action
} from './actions';

interface State {
    itemList: Object[] | {},
    error: boolean
};

const initialState: State = {
    itemList: [],
    error: false
}

const reducer = (state = initialState, action: Action): Object => {
    switch(action.type) {
        case FETCH_ITEMLIST: {
            return {
                ...state,
                itemList: []
            }
        }
        case FETCH_ERROR_ITEMLIST: {
            return {
                ...state,
                itemList: [],
                error: true
            }
        }
        case RECEIVE_ITEMLIST: {
            return {
                ...state,
                itemList: action.payload
            }
        }
    }

    return state;
}

export default createStore(reducer);