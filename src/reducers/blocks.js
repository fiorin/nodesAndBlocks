import {UPDATE_BLOCKS} from '../constants/actionTypes';
import initialState from './initialState';

export default function blocksReducer(state = initialState().blocks, action) {
    let list;
    switch (action.type) {
        case UPDATE_BLOCKS:
            list = action.res.data;
            return {
                ...state,
                list
            };
        default:
            return state;
    }
}