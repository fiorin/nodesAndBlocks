import fetch from "cross-fetch";
import * as types from "../constants/actionTypes";

const updateBlocks = (res = []) => {
    return {
        type: types.UPDATE_BLOCKS,
        res
    }
} 

export function getBlocks(node) {
    return async (dispatch) => {
        try {
            const res = await fetch(`${node.url}/api/v1/blocks`);

            if (res.status >= 400) {
                dispatch(updateBlocks());
                return;
            }

            const json = await res.json();
            dispatch(updateBlocks(json))
        } catch (err) {
            dispatch(updateBlocks())
        }
    }
}
