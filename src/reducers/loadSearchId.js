import {FETCH_RECEIVE_ID} from '../constants';

const initialState = {
    id: null
}

export const loadId = (state=initialState,action) => {
    switch(action.type) {
        case FETCH_RECEIVE_ID:
            return {...state,id: action.payload}
        default :
        return state;
    }
}