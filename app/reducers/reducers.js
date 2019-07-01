import * as ACTION_TYPES from '../actions/types'

export default function mainReducer(state = [], action) {

    switch (action.type) {
        case ACTION_TYPES.SAVE_NETWORK_STATUS:
            return {
                ...state,
                networkStatus: action.payload
            };
        default:
            return state;
    }
};