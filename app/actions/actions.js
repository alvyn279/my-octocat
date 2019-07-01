import * as ACTION_TYPES from "./types";

export const saveNetworkStatus = (connected) => {
    return {
        type: ACTION_TYPES.SAVE_NETWORK_STATUS,
        payload: connected
    }
};